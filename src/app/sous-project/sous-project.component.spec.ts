import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousProjectComponent } from './sous-project.component';

describe('SousProjectComponent', () => {
  let component: SousProjectComponent;
  let fixture: ComponentFixture<SousProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SousProjectComponent]
    });
    fixture = TestBed.createComponent(SousProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
