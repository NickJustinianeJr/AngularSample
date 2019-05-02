import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { Employee, Team, Tier, Client, Menu } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  teams: Team[] = [];
  tiers: Tier[] = [];
  clients: Client[] = [];
  menus: Menu[] = [];


  // employeeForm = new FormGroup({
  //   userName: new FormControl('', [Validators.required]),
  //   password: new FormControl('', Validators.required),
  //   isActive: new FormControl('', Validators.required),
  //   siteLink: new FormControl('', Validators.required),
  //   firstName: new FormControl('', Validators.required),
  //   middleName: new FormControl('', Validators.required),
  //   lastName: new FormControl('', Validators.required),
  //   emailAddress: new FormControl('', Validators.required),
  //   location: new FormControl('', Validators.required),
  //   tier: new FormControl('', Validators.required),
  //   team: new FormControl('', Validators.required),
  //   company: new FormControl('', Validators.required),
  //   menus: new FormControl('')
  // });


  constructor(
    private employeeService: EmployeeService) { }

    ngOnInit() {
    }

 
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.employeeForm.value);

    // let employee = new Employee();
    // employee.userName = this.employeeForm.userName.value;
    // employee.password = this.employeeForm.password.value;
    // employee.isActive = this.employeeForm.isActive.value;
    // employee.siteLink = this.employeeForm.siteLink.value;
    // employee.firstName = this.employeeForm.firstName.value;
    // employee.middleName = this.employeeForm.middleName.value;
    // employee.lastName = this.employeeForm.lastName.value;
    // employee.emailAddress = this.employeeForm.emailAddress.value;
    // employee.location = this.employeeForm.location.value;
    // employee.tiers.tierId = this.employeeForm.tier.value;
    // employee.teams.teamId = this.employeeForm.team.value;
    // employee.clients.clientId = this.employeeForm.company.value;
    
    // this.employeeService.addEmployee(employee);

    console.log("Add Employee Success");
  }
}
