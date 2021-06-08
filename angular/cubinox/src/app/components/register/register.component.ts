import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public registerUserData: User = {id: 0, username: '', password: ''};
  public userExist: boolean;

  constructor(private authService: AuthService,
             private router: Router) { }

  registerUser() {
    this.authService.registerUser(this.registerUserData)
    .subscribe(
      res => {
        if (res === null ) {
          this.userExist = true;
          setTimeout(() => {
            this.userExist = false;
          }, 3000);
        } else {
        this.router.navigate(['/login']);
        console.log(res);
        }
      },
      err => console.log(err)
    );
  }
}
