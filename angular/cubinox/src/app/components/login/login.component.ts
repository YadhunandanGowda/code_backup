import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginUserData: User = { id: 0, username: '', password: '' };
  public errorMsg: string;

  constructor(private authService: AuthService,
    private router: Router) { }

  loginUser() {
    // this.authService.loginUser(this.loginUserData)
    // .subscribe(
    //   res => {
    //     localStorage.setItem('token', res);
    //     this.router.navigate(['/listBook']);
    //   },
    //   err => {console.log(err),
    //         this.errorMsg = err;
    //   }
    // );
  }

}
