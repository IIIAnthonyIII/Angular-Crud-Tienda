import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteHeader } from './header.component';

describe('ComponenteHeader', () => {
  let component: ComponenteHeader;
  let fixture: ComponentFixture<ComponenteHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteHeader ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
