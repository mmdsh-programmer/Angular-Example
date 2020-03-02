import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor( private route: ActivatedRoute , private contentService: ContentService) {}
  news: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe( (value) => {
      if (Number(value.get('id')) > 0) {
        this.contentService.getFourteenDays().subscribe( (value2) => {
          this.news = value2;
        });  
      } 
  });
  }
}
