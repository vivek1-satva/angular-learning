import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommMainComponentComponent } from './e-comm-main-component.component';

describe('ECommMainComponentComponent', () => {
  let component: ECommMainComponentComponent;
  let fixture: ComponentFixture<ECommMainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ECommMainComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECommMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
