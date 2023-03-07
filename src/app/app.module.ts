import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeComponent } from './employee/employe/employe.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditEmComponent } from './employee/edit-em/edit-em.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNewEmpComponent } from './employee/add-new-emp/add-new-emp.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    EditEmComponent,
    AddNewEmpComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
