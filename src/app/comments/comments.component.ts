import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  specificServices: any;
  comments: any;
  constructor( private contentService: ContentService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (value) => {
      if (value.get('route')) {
        this.contentService.getSpecificService(value.get('route')).subscribe( (value2) => {
          this.specificServices = value2;
          console.log(this.specificServices.id);
          this.contentService.getComments(10, this.specificServices.id).subscribe( (value3) => {
            this.comments = value3;
            console.log(this.comments);
          });
        });
      }
    });
  }

}
