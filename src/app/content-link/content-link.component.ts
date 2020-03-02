import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-link',
  templateUrl: './content-link.component.html',
  styleUrls: ['./content-link.component.scss']
})
export class ContentLinkComponent implements OnInit {

  constructor( private contentService: ContentService) { }

  categories: any;
  ngOnInit(): void {
    this.contentService.getCategories().subscribe((value) => {
      this.categories = value;
    });
  }

}
