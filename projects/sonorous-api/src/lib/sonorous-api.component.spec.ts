import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonorousApiComponent } from './sonorous-api.component';

describe('SonorousApiComponent', () => {
  let component: SonorousApiComponent;
  let fixture: ComponentFixture<SonorousApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonorousApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonorousApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
