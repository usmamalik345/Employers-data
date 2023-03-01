import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-edit-em',
  templateUrl: './edit-em.component.html',
  styleUrls: ['./edit-em.component.css']
})
export class EditEmComponent {
 
   datawithId : any

  form: FormGroup;
  formBuilder: any;
  data: any;

  constructor(private fb: FormBuilder , private router : ActivatedRoute , private http : HttpClient)  {
    this.form = this.fb.group({
      name: ['', Validators.required],
      postion: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.router.snapshot.params['id'])
    this.getDatabyid(this.router.snapshot.params['id']).subscribe((data) => {
      console.log(data, "Data is here ")
      
      this.data = data;
      this.form.patchValue({
        name: data.name,
        postion: data.postion,
       
      });
    })
   }

  onSubmit() {
    console.log(this.form.value);
  }
  getDatabyid(id: string): Observable<any> {
    const data = this.http.get<any>(`http://localhost:3000/employees/${id}`);
    return of(data);
  }
}
