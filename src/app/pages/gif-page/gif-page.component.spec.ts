import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifPageComponent } from './gif-page.component';

describe('GifPageComponent', () => {
  let component: GifPageComponent;
  let fixture: ComponentFixture<GifPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
