import { Ticket } from "./../../models/ticket";
import { Routes } from "@angular/router";
import { User } from "./../../models/user";
import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { TicketService } from "src/app/services/ticket.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  user: User;
  tickets: Ticket[];
  mary: User = {
    id: 14982,
    firstname: "Mary",
    lastname: "Royer",
    github:
      // tslint:disable-next-line: max-line-length
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    role: "student"
  };

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getAll().subscribe((tickets) => {
      this.tickets = tickets.reverse();
    });
  }
}
