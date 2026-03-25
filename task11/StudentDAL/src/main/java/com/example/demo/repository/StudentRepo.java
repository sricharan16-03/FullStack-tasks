package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Student;

public interface StudentRepo extends JpaRepository<Student, Integer>{
	//automated query generation and application
	List<Student>findByDept(String dept);
	List<Student>findByAge(int age);
	List<Student>findByAgeGreaterThan(int age);
	List<Student>findByDeptAndAge(String dept,int age);
}
