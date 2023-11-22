import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowMainComponent } from './window-main.component';

describe('WindowMainComponent', () => {
  let component: WindowMainComponent;
  let fixture: ComponentFixture<WindowMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WindowMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
