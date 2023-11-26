import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatTreeComponent } from './cat-tree.component';

describe('CatTreeComponent', () => {
  let component: CatTreeComponent;
  let fixture: ComponentFixture<CatTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
