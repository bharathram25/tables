import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableoneComponent } from './tableone.component';

describe('TableoneComponent', () => {
  let component: TableoneComponent;
  let fixture: ComponentFixture<TableoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
