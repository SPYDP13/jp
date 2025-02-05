import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAnneeScolaireComponent } from './delete-annee-scolaire.component';

describe('DeleteAnneeScolaireComponent', () => {
  let component: DeleteAnneeScolaireComponent;
  let fixture: ComponentFixture<DeleteAnneeScolaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteAnneeScolaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteAnneeScolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
