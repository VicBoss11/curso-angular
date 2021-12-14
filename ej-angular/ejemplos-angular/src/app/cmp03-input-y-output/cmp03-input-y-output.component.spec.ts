import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp03InputYOutputComponent } from 'src/app/cmp03-input-y-output/cmp03-input-y-output.component';

describe('Cmp03ImputYOutputComponent', () => {
  let component: Cmp03InputYOutputComponent;
  let fixture: ComponentFixture<Cmp03InputYOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp03InputYOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp03InputYOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
