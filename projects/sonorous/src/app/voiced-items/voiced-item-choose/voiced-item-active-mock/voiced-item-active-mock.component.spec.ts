import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoicedItemActiveMockComponent } from './voiced-item-active-mock.component';

describe('VoicedItemActiveMockComponent', () => {
  let component: VoicedItemActiveMockComponent;
  let fixture: ComponentFixture<VoicedItemActiveMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoicedItemActiveMockComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoicedItemActiveMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
