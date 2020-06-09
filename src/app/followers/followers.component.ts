import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
posts : any[] = [];

  constructor(private data : PostService) {}

  ngOnInit(): void {
this.getfollowers();
  }
  getfollowers(){
    this.data.getAll().subscribe(res=>{
      this.posts = Object.values(res);
      
    },error =>{
      alert('erreur inattendue');
    })
  }

}
