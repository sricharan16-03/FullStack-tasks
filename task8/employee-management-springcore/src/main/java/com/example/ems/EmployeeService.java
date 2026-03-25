
package com.example.ems;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    public void addEmployee(Employee emp) {
        repository.addEmployee(emp);
    }

    public void displayEmployees() {
        for(Employee e : repository.getAllEmployees()) {
            System.out.println(e);
        }
    }
}
