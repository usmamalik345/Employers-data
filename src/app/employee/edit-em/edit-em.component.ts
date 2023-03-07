import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-em',
  templateUrl: './edit-em.component.html',
  styleUrls: ['./edit-em.component.css'],
})
export class EditEmComponent {
  datawithId: any;

  form: FormGroup | any;

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
    console.log(this.router.snapshot.params['id']);
    this.getDatabyid(this.router.snapshot.params['id']).subscribe((data) => {
      console.log(data, 'Check that the data is being correctly retrieved');

      this.form.patchValue({
        name: data.name,
        postion: data.postion,
        depart: data.depart,
      });
      console.log(this.form.value, ' from value');
    });
  }

  onSubmit() {
    console.log(this.form.value, 'asasdadas');
  }
  getDatabyid(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/employees/${id}`);
  }
  updatedData() {
    console.log(this.form.value);
    this.Employerupdate(
      this.router.snapshot.params['id'],
      this.form.value
    ).subscribe((newData) => {
      return console.log(newData, 'new data');
    });
  }

  Employerupdate(id: any, data: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/employees/${id}`, data);
  }

  
}
