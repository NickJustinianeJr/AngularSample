import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeeDeleteComponent } from './employees/employee-delete/employee-delete.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';

const routes: Routes = [    
  { path: '', redirectTo: 'Employees', pathMatch: 'full' },
  { path: 'Employees', component: EmployeeListComponent },
  { path: 'Employees/AddEmployee', component: EmployeeAddComponent },
  { path: 'Employees/EmployeeDetails/:id', component: EmployeeDetailComponent },
  { path: 'Employees/DeleteEmployee/:id', component: EmployeeDeleteComponent },
  { path: 'Employees/EditEmployee/:id', component: EmployeeEditComponent }
  // { path: 'EmployeeAccess', component: EmployeeAccessListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
