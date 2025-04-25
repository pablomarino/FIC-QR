import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrformComponent } from './qrform.component';

describe('QrformComponent', () => {
  let component: QrformComponent;
  let fixture: ComponentFixture<QrformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
