import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetialComponent } from './view-detial.component';

describe('ViewDetialComponent', () => {
  let component: ViewDetialComponent;
  let fixture: ComponentFixture<ViewDetialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewDetialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewDetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
