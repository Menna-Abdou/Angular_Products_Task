import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IExUsers } from '../interfaces/iexuser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css'],
})
export class UserShowComponent implements OnInit {
  userData?: IExUsers;
  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userData = this.userService.getCurrentUser();
  }
}
