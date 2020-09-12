import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonorousUiComponent } from './sonorous-ui.component';

describe('SonorousUiComponent', () => {
  let component: SonorousUiComponent;
  let fixture: ComponentFixture<SonorousUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonorousUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonorousUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
