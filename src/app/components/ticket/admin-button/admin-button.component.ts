import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-admin-button',
  templateUrl: './admin-button.component.html',
  styleUrls: ['./admin-button.component.scss']
})
export class AdminButtonComponent implements OnInit {
  @Input() ticket: Ticket;
  constructor() {}

  ngOnInit() {}

  isInProgress() {
    this.ticket.status = 'inProgress';
  }

  isDone() {
    this.ticket.status = 'done';
  }
}
