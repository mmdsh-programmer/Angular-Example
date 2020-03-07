import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  quote: any;
  constructor( private contentService: ContentService ) { }

  ngOnInit(): void {

    this.contentService.getFourteenDays(5, 0).subscribe((value) => {
      this.quote = value;
      console.log(this.quote.data[0].date);
    });
  }

}
