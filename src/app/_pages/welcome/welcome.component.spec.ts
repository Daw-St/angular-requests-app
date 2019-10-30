import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import {Router} from '@angular/router';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ],
      providers: [
        {
          provide: Router
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render welcome text', () => {
    // tslint:disable-next-line:no-shadowed-variable
    const fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.container .container__text').textContent).toContain('Welcome!!!');
  });

  it(`should have as title 'Welcome!!!'`, () => {
    // tslint:disable-next-line:no-shadowed-variable
    const fixture = TestBed.createComponent(WelcomeComponent);
    const componentWelcome = fixture.debugElement.componentInstance;
    expect(componentWelcome.welcomeText).toEqual('Welcome!!!');
  });
});
