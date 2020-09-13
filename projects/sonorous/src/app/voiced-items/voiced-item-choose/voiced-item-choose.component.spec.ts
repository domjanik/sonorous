import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoicedItemChooseComponent } from './voiced-item-choose.component';

describe('VoicedItemChooseComponent', () => {
  let component: VoicedItemChooseComponent;
  let fixture: ComponentFixture<VoicedItemChooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoicedItemChooseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoicedItemChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
