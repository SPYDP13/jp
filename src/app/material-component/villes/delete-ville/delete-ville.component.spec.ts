import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVilleComponent } from './delete-ville.component';

describe('DeleteVilleComponent', () => {
  let component: DeleteVilleComponent;
  let fixture: ComponentFixture<DeleteVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteVilleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
