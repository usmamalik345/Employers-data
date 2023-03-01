import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent {
  public Emply : any
  empForm: FormGroup | undefined;
  showModal: boolean = false
  editMode: boolean = false


  constructor(private fb: FormBuilder, public http: HttpClient ) {
   
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.empForm = this.fb.group({
    //   id: [''],
    //   name: ["Hamza Malik", Validators.required],
    //   position: ["juniour Angular developer", Validators.required],
    //   depart: [ 'Development']

    // })
    this.getEmply()
  }

  // onEmpSubmot() {
  //   if (this.empForm?.valid) {
  //     console.log(this.empForm.value)
  //     if (this.editMode) {
        
  //     } else {
        
  //     }
  //     }
  //   }
  getEmply() {
    this.http.get<any>('http://localhost:3000/employees').subscribe((response) => {
      this.Emply = response

      console.log(response , " Hello Response")
    } )
  }
  
}
