import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, flushMicrotasks, fakeAsync, flush } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs'

import { LeaguesComponent } from './leagues.component';

describe('LeaguesComponent', () => {
  let component: LeaguesComponent;
  let fixture: ComponentFixture<LeaguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ LeaguesComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({
              leagues: [ 
                  { 
                    "id":"Standard",
                    "realm":"pc",
                    "description":"The default game mode.",
                    "registerAt":"2019-09-06T19:00:00Z",
                    "url":"http:\/\/pathofexile.com\/forum\/view-thread\/71278",
                    "startAt":"2013-01-23T21:00:00Z",
                    "endAt":null,
                    "delveEvent":true,
                    "rules":[ 
              
                    ]
                  },
              ]
            })
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h3 tag with the text "Leagues"', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Leagues');
  });

  it("should have a list of leagues", fakeAsync(() => {
    component.ngOnInit();
    flushMicrotasks();
    expect(component.leagues.length).toBe(1);
  }));
});
