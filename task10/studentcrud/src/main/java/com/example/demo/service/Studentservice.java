package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Student;
import com.example.demo.repository.Studentrepository;
@Service
public class Studentservice {
	private final Studentrepository repo;

	public Studentservice(Studentrepository repo) {
		this.repo = repo;
	}
	public Student savestudent(Student s) {
		return repo.save(s);
	}
	public List<Student> getallstudents() {
		return repo.findAll();
	}
	public Student getstudentbyid(int id) {
		return repo.findById(id).orElse(null);
	}
	public Student updatestudent(Student s) {
		return repo.save(s);	
	}
	public void deletestudent(int id) {
		repo.deleteById(id);
	}
}

