import { Component, OnInit } from '@angular/core';
import { Employee, Roles } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  roles: Roles[] = [];

  constructor(
    private employeeService: EmployeeService) { }

  ngOnInit() {
    console.log("EmployeeListComponent:OnInit");
    // this.getEmployees();
    this.getRoles();
  }

  getRoles(): void {
    this.employeeService.getRoles()
      .subscribe(roles => roles);
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
    .subscribe(employees => {
      
      // employees.forEach(function (employee) {

      //   var employeeModel = new Employee();
      //   employeeModel.userId = employee.userId;
      //   employeeModel.userName = employee.userName;        
      //   employeeModel.isActive = employee.isActive;
      //   employeeModel.siteLink = employee.siteLink;
        
      //   employeeModel.firstName = employee.firstName;
      //   employeeModel.middleName = employee.middleName;
      //   employeeModel.lastName = employee.lastName;
      //   employeeModel.fullName = employee.userName;
      //   employeeModel.userName = employee.userName;
      //   employeeModel.userName = employee.userName;
      //   employeeModel.userName = employee.userName;
      //   employeeModel.userName = employee.userName;

      //   this.employees.push(employeeModel);
        
      // });
      
      this.employees = employees;
      
      console.log(employees);  
      console.log(employees.length);
    });
  }

}
