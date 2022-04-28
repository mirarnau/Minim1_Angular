import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualConfigAddComponent } from './visual-config-add.component';

describe('VisualConfigAddComponent', () => {
  let component: VisualConfigAddComponent;
  let fixture: ComponentFixture<VisualConfigAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualConfigAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualConfigAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
