import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments: any;
  constructor( private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getComments(30).subscribe( (value) => {
      this.comments = value;
      console.log(this.comments);
    });
  }

}
