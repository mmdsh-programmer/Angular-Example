import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-active-part',
  templateUrl: './active-part.component.html',
  styleUrls: ['./active-part.component.scss']
})
export class ActivePartComponent implements OnInit {

  specificService: any;
  registered: number;
  uses: string[];
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getSpecificService().subscribe( (value) => {
      this.specificService = value;
      console.log(this.specificService);
      this.registered = Math.floor(this.specificService.registered / 1000) * 1000;
      const str = new String(this.specificService.uses);
      this.uses = str.split('","');
    });
  }

}
