import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-sidebar-box',
  templateUrl: './sidebar-box.component.html',
  styleUrls: ['./sidebar-box.component.scss']
})
export class SidebarBoxComponent implements OnInit {

  users: any;
  constructor( private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getBirthdays(9, 0).subscribe((value) => {
      this.users = value;
    });
  }

}
