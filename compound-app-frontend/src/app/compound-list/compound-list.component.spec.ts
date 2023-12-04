import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundListComponent } from './compound-list.component';

describe('CompoundListComponent', () => {
  let component: CompoundListComponent;
  let fixture: ComponentFixture<CompoundListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompoundListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompoundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
