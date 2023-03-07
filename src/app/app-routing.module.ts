import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewEmpComponent } from './employee/add-new-emp/add-new-emp.component';
import { EditEmComponent } from './employee/edit-em/edit-em.component';
import { EmployeComponent } from './employee/employe/employe.component';

const routes: Routes = [
  { path: '', component: EmployeComponent },
  { path: 'employees', component: EmployeComponent },
  { path: 'editem/:id', component: EditEmComponent },
  { path: 'addnew', component: AddNewEmpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
