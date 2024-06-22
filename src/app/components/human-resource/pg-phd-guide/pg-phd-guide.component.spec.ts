import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgPhdGuideComponent } from './pg-phd-guide.component';

describe('PgPhdGuideComponent', () => {
  let component: PgPhdGuideComponent;
  let fixture: ComponentFixture<PgPhdGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgPhdGuideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgPhdGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
