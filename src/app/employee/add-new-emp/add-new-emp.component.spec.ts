import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewEmpComponent } from './add-new-emp.component';

describe('AddNewEmpComponent', () => {
  let component: AddNewEmpComponent;
  let fixture: ComponentFixture<AddNewEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
