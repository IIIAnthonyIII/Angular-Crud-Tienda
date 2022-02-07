import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaGraciasComponent } from './pagina-gracias.component';

describe('PaginaGraciasComponent', () => {
  let component: PaginaGraciasComponent;
  let fixture: ComponentFixture<PaginaGraciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaGraciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaGraciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
