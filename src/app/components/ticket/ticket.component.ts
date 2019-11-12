import { Ticket } from "src/app/models/ticket";
import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-ticket",
  templateUrl: "./ticket.component.html",
  styleUrls: ["./ticket.component.scss"]
})
export class TicketComponent implements OnInit {
  @Input() ticket: Ticket;

  tickets: Ticket[];

  constructor() {}

  ngOnInit() {
    return this.ticket;
  }
}
