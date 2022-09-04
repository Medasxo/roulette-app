import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsLogComponent } from './actions-log.component';

describe('ActionsLogComponent', () => {
  let component: ActionsLogComponent;
  let fixture: ComponentFixture<ActionsLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
