import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-active-part',
  templateUrl: './active-part.component.html',
  styleUrls: ['./active-part.component.scss']
})
export class ActivePartComponent implements OnInit {

  specificService: any;
  registered: number;
  uses;
  constructor(private contentService: ContentService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (value) => {
        this.contentService.getSpecificService(value.get('route')).subscribe( (value2) => {
          this.specificService = value2;
          this.registered = Math.floor(this.specificService.registered / 1000) * 1000;
          this.uses = JSON.parse(this.specificService.uses);
          console.log(this.uses);
        });
    });
  }

}
