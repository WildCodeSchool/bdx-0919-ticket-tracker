import { TicketService } from "./../../services/ticket.service";
import { Component, OnInit } from "@angular/core";
import { Ticket } from "src/app/models/ticket";
import { Router } from "@angular/router";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  router: Router;
  constructor(private ticketService: TicketService) {}

  ngOnInit() {}

  createTicket(newTicket) {
    this.ticketService.createTicket(newTicket).subscribe(() => {
      this.router.navigate(["/user"]);
    });
  }
}
