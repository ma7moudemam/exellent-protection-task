import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerPopupComponent } from './worker-popup.component';

describe('WorkerPopupComponent', () => {
  let component: WorkerPopupComponent;
  let fixture: ComponentFixture<WorkerPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
