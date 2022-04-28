import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualConfigComponent } from './visual-config-list.component';

describe('VisualConfigComponent', () => {
  let component: VisualConfigComponent;
  let fixture: ComponentFixture<VisualConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
