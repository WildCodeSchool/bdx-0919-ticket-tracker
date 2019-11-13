import { Ticket } from './../../models/ticket';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/user';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() ticket: Ticket;
  @Input() user: User;
  @Output() getCheckDelete = new EventEmitter<Ticket>();


  constructor() {}


  tickets: Ticket[];



  ngOnInit() {
    return this.ticket;
  }

  onCheckDelete($event) {
    this.getCheckDelete.emit($event);
  }
}
