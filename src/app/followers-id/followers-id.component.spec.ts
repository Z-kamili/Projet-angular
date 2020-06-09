import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersIDComponent } from './followers-id.component';

describe('FollowersIDComponent', () => {
  let component: FollowersIDComponent;
  let fixture: ComponentFixture<FollowersIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowersIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowersIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
