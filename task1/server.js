const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "charan",
    database: "task1_db"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection error:", err);
    } else {
        console.log("Database connected successfully");
    }
});

app.post("/register", (req, res) => {

    const { name, email, dob, dept, phn } = req.body;

    if (!name || !email || !dob || !dept || !phn) {
        return res.json({ message: "All fields are required" });
    }

    const sql = "INSERT INTO users (name, email, dob, dept, phn) VALUES (?, ?, ?, ?, ?)";

    db.query(sql, [name, email, dob, dept, phn], (err, result) => {
        if (err) {
            console.log("MYSQL ERROR:", err);   
            return res.json({ message: "Error inserting data" });
        }
        res.json({ message: "Data inserted successfully" });
    });
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
