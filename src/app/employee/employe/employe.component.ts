import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css'],
})
export class EmployeComponent {
  public Emply: any;
  empForm: FormGroup | undefined;
  showModal: boolean = false;
  editMode: boolean = false;
  detlteproduct: any;

  constructor(private fb: FormBuilder, public http: HttpClient) {}

  ngOnInit(): void {
    this.getEmply();
    
  }

  getEmply() {
    this.http
      .get<any>('http://localhost:3000/employees')
      .subscribe((response) => {
        this.Emply = response;
        console.log(this.Emply, ' Hello Response');
      
      });
  }
  deltebyId(id: number): Observable<any> {
    return this.http
      .delete<any>(`http://localhost:3000/employees/${id}`);
  }
  onDelte(id: any){
    const index = this.Emply.findIndex((item: { id: any; }) => item.id === id);
    if (index !== -1) {
      this.Emply.splice(index, 1);
    }

    this.deltebyId(id).subscribe((res) => {
      console.log(res, "show what we get from this ")
      this.getEmply()
    })

  }
  summarizeLongDesc(): void {
    const start = 0;
    this.http.get(`http://localhost:3000/summarize/${start}`).subscribe({
      next: response => {
        console.log(response); // Success message from the server
      },
      error: error => {
        console.error(error); // Error message from the server
      },
      complete: () => {
        console.log('Request completed');
      }
    });
  }
  
}
