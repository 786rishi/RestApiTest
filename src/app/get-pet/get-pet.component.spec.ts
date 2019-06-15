import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPetComponent } from './get-pet.component';

describe('GetPetComponent', () => {
  let component: GetPetComponent;
  let fixture: ComponentFixture<GetPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
