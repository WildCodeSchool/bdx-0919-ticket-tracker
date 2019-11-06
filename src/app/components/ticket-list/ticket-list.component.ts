
import { Component, OnInit } from "@angular/core";
import { Ticket } from "src/app/models/ticket";
import { TicketService } from "src/app/services/ticket.service";

@Component({
  selector: "app-ticket-list",
  templateUrl: "./ticket-list.component.html",
  styleUrls: ["./ticket-list.component.scss"]
})
export class TicketListComponent implements OnInit {

  newTicket: Ticket;
  tickets: Ticket[];

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getAll().subscribe((tickets) => {
      this.tickets = tickets;
    });

  }
}
