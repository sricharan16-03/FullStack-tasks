
package com.example.ems;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.BeanFactory;

@Configuration
@ComponentScan(basePackages = "com.example.ems")
public class MainApp {

    public static void main(String[] args) {

        AnnotationConfigApplicationContext context =
                new AnnotationConfigApplicationContext(MainApp.class);

        BeanFactory factory = context.getBeanFactory();

        EmployeeService service = factory.getBean(EmployeeService.class);

        service.addEmployee(new Employee(1, "naveen", "IT"));
        service.addEmployee(new Employee(2, "charan", "HR"));
        service.addEmployee(new Employee(3, "rakesh", "Finance"));

        System.out.println("Employee List:");
        service.displayEmployees();

        context.close();
    }
}
