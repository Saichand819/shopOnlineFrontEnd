import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailsService } from '../Shared/Service/user-details.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userService : UserDetailsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    userService = TestBed.inject(UserDetailsService);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make user logged true on userlogin',()=>{

     let spy = spyOn( userService , 'userLoggingIn')
      
      component.LogTheUser();

      expect(spy).toHaveBeenCalled();
  })
});
