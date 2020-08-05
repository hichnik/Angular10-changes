import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProgressBarComponent } from './app-progress-bar.component';

describe('AppProgressBarComponent', () => {
  let component: AppProgressBarComponent;
  let fixture: ComponentFixture<AppProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
