import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindingsComponent } from './two-way-bindings.component';

describe('TwoWayBindingsComponent', () => {
  let component: TwoWayBindingsComponent;
  let fixture: ComponentFixture<TwoWayBindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayBindingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
