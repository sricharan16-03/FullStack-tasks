package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Student;
import com.example.demo.service.Studentservice;

@RestController
@RequestMapping("/students")
public class StudentController {
	private final Studentservice service;

	public StudentController(Studentservice service) {
		this.service = service;
	}
	@PostMapping
	public Student createStudent(@RequestBody Student student) {
		return service.savestudent(student);
	}
	@GetMapping
	public List<Student> getAllStudents(){
		return service.getallstudents();
	}
	@GetMapping("/{id}")
	public Student getStudent(@PathVariable int id) {
		return service.getstudentbyid(id);
	}
	@PutMapping("/{id}")
	public Student updateStudent(@PathVariable int id,@RequestBody Student student) {
		student.setId(id);
		return service.updatestudent(student);
	}
	@DeleteMapping("/{id}")
	public String deleteStudent(@PathVariable int id) {
		service.deletestudent(id);
		return "student deleted successfully";
	}
}
