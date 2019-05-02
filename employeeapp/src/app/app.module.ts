import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeeDeleteComponent } from './employees/employee-delete/employee-delete.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { SandboxComponent } from './sandbox/sandbox.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeDetailComponent,
    EmployeeDeleteComponent,
    EmployeeEditComponent,
    SandboxComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
