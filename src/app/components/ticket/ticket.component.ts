import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from "src/app/models/ticket";
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: "app-ticket",
  templateUrl: "./ticket.component.html",
  styleUrls: ["./ticket.component.scss"]
})
export class TicketComponent implements OnInit {
  @Input() ticket: Ticket;

  constructor(private ticketsService: TicketService) {}

  ngOnInit() {
    console.log(this.ticket);
  }
  delete(): void {
    this.ticketsService.deleteTicket(this.ticket.id)
    .subscribe(() => {});
  }
}
