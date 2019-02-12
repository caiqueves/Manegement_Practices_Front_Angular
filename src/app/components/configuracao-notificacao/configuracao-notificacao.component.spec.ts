import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoNotificacaoComponent } from './configuracao-notificacao.component';

describe('ConfiguracaoNotificacaoComponent', () => {
  let component: ConfiguracaoNotificacaoComponent;
  let fixture: ComponentFixture<ConfiguracaoNotificacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracaoNotificacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracaoNotificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
