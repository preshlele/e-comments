import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMain } from './main.main';

describe('MainMain', () => {
  let component: MainMain;
  let fixture: ComponentFixture<MainMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMain]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
