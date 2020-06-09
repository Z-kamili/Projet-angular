import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PostService } from '../services/post.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  posts: any[] = [];
  gets: any[] = [];
 status = false;
 post = {
  id:0,
  title:'',
  body:'',
  userId:''
};
  constructor(private postService: PostService) {}
  ngOnInit(): void {
    this.getpost();
  }
  getpost(){
   this.postService.getAll().subscribe(res=>{
    this.posts = Object.values(res);
    },error =>{
      alert('erreur inattendue');
      console.log(error);
    })
  }
  createPost(){
     this.postService.create(this.post).subscribe(res=>{
      this.gets = Object.values(res);
      this.post.id = this.gets[0].id;
      this.posts.push(this.post);
      this.post = {
        id:0,
        title:'',
        body:'',
        userId:''
      };
    },error =>{
      alert('erreur inattendue');
      console.log(error);
    })
  }
  editPost(post){
    this.status = true;
    this.post = post;
  }
  Updatepost(){
    this.postService.edit(this.post).subscribe(res=>{

      this.gets = Object.values(res);
      this.post.id = this.gets[0].id;
     this.posts.unshift(this.post);
     this.post = {
       id:0,
       title:'',
       body:'',
       userId:''
     }
     this.status = false;

    },error =>{
      alert('erreur inattendue');
      console.log(error);
    })
  }
  deletePost(Post){
    this.postService.delete(123).subscribe(res=>{
      let index = this.posts.indexOf(Post);
      this.posts.splice(index,1);
      console.log(res);
    },(error:Response) =>{
         if(error.status === 404){
           alert("ce post est deja supprimer !!");
         }else{
          alert('erreur inattendue');
         }
      console.log(error);
    })
  }

}
