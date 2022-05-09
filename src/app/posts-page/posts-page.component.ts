import { Component, OnInit } from '@angular/core';
import { IPost } from './../shared Classes and types/IPost';
import { PostsService } from './../services/posts.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  posts: IPost[] = [];
  errorMsg: string | null = null;  
  hasError(): boolean{
    return this.errorMsg !== null;
  }


  ngOnInit(): void {
    this.postsService.getPosts().subscribe((postsData)=>{
      this.posts = postsData;
      this.errorMsg = null;
    },
      (errorMsg) => {this.errorMsg = errorMsg}
    )
  }

}
