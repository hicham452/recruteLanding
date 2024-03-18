import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindemoComponent } from './maindemo.component';

describe('MaindemoComponent', () => {
  let component: MaindemoComponent;
  let fixture: ComponentFixture<MaindemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaindemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaindemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
