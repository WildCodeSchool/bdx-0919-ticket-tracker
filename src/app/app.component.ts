import { Component, OnInit } from "@angular/core";
import { TicketService } from "./services/ticket.service";
import { Ticket } from "./models/ticket";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "ticket-tracker";
  tickets: Ticket[];

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getAll().subscribe((tickets) => {
      this.tickets = tickets;
    });
  }
}
