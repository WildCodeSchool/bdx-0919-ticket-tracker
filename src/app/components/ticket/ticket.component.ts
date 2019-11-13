import { Ticket } from './../../models/ticket';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {


  constructor() {}
  @Input() ticket: Ticket;
  @Output() getCheckDelete = new EventEmitter<Ticket>();
  tickets: Ticket[];



  ngOnInit() {
    return this.ticket;
  }

  onCheckDelete($event) {
    this.getCheckDelete.emit($event);
  }
}
