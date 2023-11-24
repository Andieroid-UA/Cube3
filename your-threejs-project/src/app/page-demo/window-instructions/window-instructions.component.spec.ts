import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowInstructionsComponent } from './window-instructions.component';

describe('WindowInstructionsComponent', () => {
  let component: WindowInstructionsComponent;
  let fixture: ComponentFixture<WindowInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowInstructionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WindowInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
