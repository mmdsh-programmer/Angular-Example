import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service'; 

@Component({
  selector: 'app-content-discuss',
  templateUrl: './content-discuss.component.html',
  styleUrls: ['./content-discuss.component.scss']
})
export class ContentDiscussComponent implements OnInit {

  shoutbox: any;
  constructor( private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getShoutBoxes().subscribe((value) => {
      this.shoutbox = value;
      console.log(this.shoutbox);

    });
  }

}
