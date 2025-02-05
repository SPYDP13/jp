import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEleveComponent } from './delete-eleve.component';

describe('DeleteEleveComponent', () => {
  let component: DeleteEleveComponent;
  let fixture: ComponentFixture<DeleteEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteEleveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
