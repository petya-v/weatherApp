import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardWrapperComponent } from './weather-card-wrapper.component';

describe('WeatherCardWrapperComponent', () => {
  let component: WeatherCardWrapperComponent;
  let fixture: ComponentFixture<WeatherCardWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCardWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
