import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.scss']
})
export class WeeklyComponent implements OnInit {

  constructor( private route: ActivatedRoute , private contentService: ContentService ) { }

  shoutboxe: any;
  audio: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe( (value) => {
      this.contentService.getSpecificShoutboxe(value.get('id') , 45 , 0).subscribe( (value2) => {
        this.shoutboxe = value2;
        console.log(this.shoutboxe);
        this.audio = JSON.parse(this.shoutboxe.shoutBox.audios);
      });
  });
  }

}
