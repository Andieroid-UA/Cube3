import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeMovingComponent } from './cube-moving.component';

describe('CubeMovingComponent', () => {
  let component: CubeMovingComponent;
  let fixture: ComponentFixture<CubeMovingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CubeMovingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CubeMovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
