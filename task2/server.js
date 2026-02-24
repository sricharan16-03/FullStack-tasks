const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());


app.use(express.static(__dirname));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "charan",  
    database: "task1_db"
});

db.connect(err => {
    if (err) {
        console.log("Database connection failed");
    } else {
        console.log("Database connected");
    }
});



app.get("/users", (req, res) => {

    let { sort, dept } = req.query;
    let query = "SELECT * FROM users";

    if (dept && dept !== "all") {
        query += ` WHERE dept='${dept}'`;
    }

    if (sort === "name") {
        query += " ORDER BY name ASC";
    }

    if (sort === "dob") {
        query += " ORDER BY dob ASC";
    }

    db.query(query, (err, result) => {
        if (err) res.status(500).send(err);
        else res.json(result);
    });
});


app.get("/count", (req, res) => {
    let query = "SELECT dept, COUNT(*) as total FROM users GROUP BY dept";

    db.query(query, (err, result) => {
        if (err) res.status(500).send(err);
        else res.json(result);
    });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});
