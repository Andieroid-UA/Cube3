import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanoramaComponent } from './panorama.component';

describe('PanoramaComponent', () => {
  let component: PanoramaComponent;
  let fixture: ComponentFixture<PanoramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanoramaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


