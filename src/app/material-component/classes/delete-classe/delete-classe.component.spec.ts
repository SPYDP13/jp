import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClasseComponent } from './delete-classe.component';

describe('DeleteClasseComponent', () => {
  let component: DeleteClasseComponent;
  let fixture: ComponentFixture<DeleteClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteClasseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
