import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IExUsers } from '../interfaces/iexuser';
import { ILogin } from '../interfaces/ilogin';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: ILogin = { username: '', password: '' };
  userx?: IExUsers;
  exUsers?: IExUsers[];
  // ------------------------------------------
  constructor(private userService: UserService, private route: Router) {}
  // ------------------------------------------

  ngOnInit(): void {
    this.userService.fetchUsers().subscribe((users) => {
      this.exUsers = users;
    });
  }
  // ------------------------------------------

  login() {
    this.userx = this.exUsers?.find(
      (o) =>
        o.username === this.user.username && o.password === this.user.password
    );
    console.log(this.userx);

    if (this.userx) {
      this.userService.setCurrentUser(this.userx);
      this.route.navigate(['/users/profile', this.userx?.id]);
    }
  }

  login2() {
    console.log(this.user);
  }
}
