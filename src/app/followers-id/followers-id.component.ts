import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-followers-id',
  templateUrl: './followers-id.component.html',
  styleUrls: ['./followers-id.component.css']
})
export class FollowersIDComponent implements OnInit {
id:number;
page:number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
     this.id =  +this.route.snapshot.paramMap.get('username');
    this.page =  +this.route.snapshot.queryParamMap.get('page');

  }

}
