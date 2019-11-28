import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaEditComponent } from './incidencia-edit.component';

describe('IncidenciaEditComponent', () => {
  let component: IncidenciaEditComponent;
  let fixture: ComponentFixture<IncidenciaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenciaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
