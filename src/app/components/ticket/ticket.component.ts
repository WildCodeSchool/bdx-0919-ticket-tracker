import { Component, OnInit, Input } from "@angular/core";
import { Ticket } from "src/app/models/ticket";
import { element } from "protractor";

@Component({
  selector: "app-ticket",
  templateUrl: "./ticket.component.html",
  styleUrls: ["./ticket.component.scss"]
})
export class TicketComponent implements OnInit {
  @Input() ticket: Ticket;

  constructor() {}

  ngOnInit() {
    return this.ticket;
  }

  editTicket(): void {
    this.ticketsService.getbyId(this.ticket.id).subscride(() => {});
  }
}
