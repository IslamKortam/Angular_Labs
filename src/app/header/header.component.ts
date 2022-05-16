import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  bannerSource:string = '../../assets/banner.jpg'

  navigateToHomePage(){
    this.router.navigate(['/home'])
  }
  navigateToProductsPage(){
    this.router.navigate(['/products'])
  }
  navigateToPostsPage(){
    this.router.navigate(['/posts'])
  }
  navigateToUsersPage(){
    this.router.navigate(['/users'])
  }
  
  navigateToRegisterPage(){
    this.router.navigate(['/register'])
  }

  navigateToLoginPage(){
    this.router.navigate(['./login'])
  }
}
