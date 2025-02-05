import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnneeScolaireComponent } from './add-annee-scolaire.component';

describe('AddAnneeScolaireComponent', () => {
  let component: AddAnneeScolaireComponent;
  let fixture: ComponentFixture<AddAnneeScolaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAnneeScolaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAnneeScolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
