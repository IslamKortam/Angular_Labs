import { Component, OnInit } from '@angular/core';
import {UserLogin} from '../shared Classes and types/UserLogin'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: UserLogin = new UserLogin('', '');
  constructor() { }
  
  ngOnInit(): void {
  }

}
