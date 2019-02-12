import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoPraticaComponent } from './configuracao-pratica.component';

describe('ConfiguracaoPraticaComponent', () => {
  let component: ConfiguracaoPraticaComponent;
  let fixture: ComponentFixture<ConfiguracaoPraticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracaoPraticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracaoPraticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
