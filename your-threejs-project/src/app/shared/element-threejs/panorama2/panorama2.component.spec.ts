import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panorama2Component } from './panorama2.component';

describe('Panorama2Component', () => {
  let component: Panorama2Component;
  let fixture: ComponentFixture<Panorama2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Panorama2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Panorama2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
