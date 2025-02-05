import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMatiereComponent } from './delete-matiere.component';

describe('DeleteMatiereComponent', () => {
  let component: DeleteMatiereComponent;
  let fixture: ComponentFixture<DeleteMatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteMatiereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
