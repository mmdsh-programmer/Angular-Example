import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-sidebar-box-services',
  templateUrl: './sidebar-box-services.component.html',
  styleUrls: ['./sidebar-box-services.component.scss']
})
export class SidebarBoxServicesComponent implements OnInit {

  service: any;
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getServices(10, 0).subscribe((value) => {
      this.service = value;
    });
  }

}
