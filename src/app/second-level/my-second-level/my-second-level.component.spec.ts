import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecondLevelComponent } from './my-second-level.component';

describe('MySecondLevelComponent', () => {
  let component: MySecondLevelComponent;
  let fixture: ComponentFixture<MySecondLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySecondLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySecondLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
