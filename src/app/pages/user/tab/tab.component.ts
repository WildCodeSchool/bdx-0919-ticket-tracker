import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Ticket } from './../../../models/ticket';
import { User } from './../../../models/user';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() user: User;
  tickets: Ticket[];

  @Output() tabChanged = new EventEmitter<number>();

  private userList = [
    'Tickets cursus',
    'Tickets administration',
    'Historique',
  ];
  private adminList = [
    'En attente',
    'En cours',
    'Traités'
  ];

  selectedList: string[];
  indexClicked = 0;
  response: any;
  constructor() {}

  ngOnInit() {


    if (this.user.role === 'student') {
      this.selectedList = this.userList;
    } else {
      this.selectedList = this.adminList;
    }
  }

  defineIndex(index: number) {
    this.indexClicked = index;
    this.tabChanged.emit(index);
  }
}
