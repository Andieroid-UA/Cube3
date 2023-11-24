import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowProgressComponent } from './window-progress.component';

describe('WindowProgressComponent', () => {
  let component: WindowProgressComponent;
  let fixture: ComponentFixture<WindowProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WindowProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
