import { Ticket } from 'src/app/models/ticket';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() ticket: Ticket;
  @Output() getCheckDelete = new EventEmitter<Ticket>();

  tickets: Ticket[];

  constructor(private ticketsService: TicketService, private http: HttpClient) {}

  ngOnInit() {
  }

  delete() {
    this.ticketsService.deleteTicket(this.ticket.id)
    .subscribe((data: Ticket) => {
      this.getCheckDelete.emit(data);
    });
  }

}

