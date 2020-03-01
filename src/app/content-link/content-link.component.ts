import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-link',
  templateUrl: './content-link.component.html',
  styleUrls: ['./content-link.component.scss']
})
export class ContentLinkComponent implements OnInit {

  constructor( private ContentService : ContentService) { }

  ngOnInit(): void {
    this.ContentService.getCategories().subscribe((value) => {
      console.log("server" , value);
    });
  }

}
