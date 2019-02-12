import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoTipoMetodologiaComponent } from './configuracao-tipo-metodologia.component';

describe('ConfiguracaoTipoMetodologiaComponent', () => {
  let component: ConfiguracaoTipoMetodologiaComponent;
  let fixture: ComponentFixture<ConfiguracaoTipoMetodologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracaoTipoMetodologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracaoTipoMetodologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
