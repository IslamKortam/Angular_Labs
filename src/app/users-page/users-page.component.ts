import { Component, OnInit } from '@angular/core';
import { UsersService } from './../services/users.service';
import { IUser } from './../shared Classes and types/IUser';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  users: IUser[] = [];
  errorMsg: string | null = null;

  hasError(): boolean{
    return this.errorMsg !== null;
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
      this.errorMsg = null;
    },
    (errorMsg) => {this.errorMsg = errorMsg}
    )
  }

}
