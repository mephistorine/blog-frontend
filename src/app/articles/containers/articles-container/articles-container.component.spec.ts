import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesContainerComponent } from './articles-container.component';

describe('ArticlesContainerComponent', () => {
  let component: ArticlesContainerComponent;
  let fixture: ComponentFixture<ArticlesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
