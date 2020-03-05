import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brain',
  templateUrl: './brain.component.html',
  styleUrls: ['./brain.component.scss']
})
export class BrainComponent implements OnInit {
  specificServices: any;
  constructor(private route: ActivatedRoute , private contentService: ContentService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (value) => {
      if (value.get('route')) {
        this.contentService.getSpecificService(value.get('route')).subscribe( (value2) => {
          this.specificServices = value2;
          console.log(this.specificServices);
        });
      }
    });
  }

}
