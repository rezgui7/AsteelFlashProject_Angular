import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSousProjectComponent } from './add-sous-project.component';

describe('AddSousProjectComponent', () => {
  let component: AddSousProjectComponent;
  let fixture: ComponentFixture<AddSousProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSousProjectComponent]
    });
    fixture = TestBed.createComponent(AddSousProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
