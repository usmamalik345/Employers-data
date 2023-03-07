import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-new-emp',
  templateUrl: './add-new-emp.component.html',
  styleUrls: ['./add-new-emp.component.css'],
})
export class AddNewEmpComponent {
  form: FormGroup<any> | any;
  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      postion: ['', [Validators.required]],
      depart: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getDatabyid().subscribe((data) => {
      console.log(data, ' Data in New Emply');

      this.form.patchValue({
        name: data.name,
        postion: data.postion,
        depart: data.depart,
      });
    });
  }
  onSubmit() {
    console.log(this.form.value, 'New Emply Data');
  }
  getDatabyid(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/employees/`);
  }
  updatedData(data: any) {
    return this.http.post<any>(`http://localhost:3000/employees/` , data);
  }
  updatedDataEmp (){
    return this.updatedData(this.form.value).subscribe((data) => {
        return console.log(data , "New Data save ")
      })
  }
}
