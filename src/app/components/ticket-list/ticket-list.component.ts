import { User } from "./../../models/user";
import { Component, OnInit, Input } from "@angular/core";
import { Ticket } from "src/app/models/ticket";

@Component({
  selector: "app-ticket-list",
  templateUrl: "./ticket-list.component.html",
  styleUrls: ["./ticket-list.component.scss"]
})
export class TicketListComponent implements OnInit {
  newTicket: Ticket;
  @Input() tickets: Ticket[];
  @Input() user: User;

  constructor() {}

  ngOnInit() {
    return this.tickets;
  }

  onCheckDelete(indexDanslaList: number) {
    this.tickets.splice(indexDanslaList, 1);
  }
}
