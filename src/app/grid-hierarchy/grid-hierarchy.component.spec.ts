import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHierarchyComponent } from './grid-hierarchy.component';

describe('GridHierarchyComponent', () => {
  let component: GridHierarchyComponent;
  let fixture: ComponentFixture<GridHierarchyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridHierarchyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
