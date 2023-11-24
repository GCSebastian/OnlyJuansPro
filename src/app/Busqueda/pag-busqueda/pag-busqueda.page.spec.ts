import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagBusquedaPage } from './pag-busqueda.page';

describe('PagBusquedaPage', () => {
  let component: PagBusquedaPage;
  let fixture: ComponentFixture<PagBusquedaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagBusquedaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
