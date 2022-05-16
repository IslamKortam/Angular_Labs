import { Component, OnInit } from '@angular/core';
import {UserClass} from '../shared Classes and types/UserClass'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  tobics = ['Data Structures', 'Algorithms', 'Design Patterns'];


  ngOnInit(): void {
  }

  user: UserClass = new UserClass(
    '',
    '',
    '',
    '',
    'Data Structures'
  );

}
