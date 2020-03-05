import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewFormularioPage } from './view-formulario.page';

describe('ViewFormularioPage', () => {
  let component: ViewFormularioPage;
  let fixture: ComponentFixture<ViewFormularioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFormularioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewFormularioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
