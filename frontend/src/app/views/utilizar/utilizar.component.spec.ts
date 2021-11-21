import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizarComponent } from './utilizar.component';

describe('UtilizarComponent', () => {
  let component: UtilizarComponent;
  let fixture: ComponentFixture<UtilizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
