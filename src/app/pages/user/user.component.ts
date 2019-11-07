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
    id: 12258,
    firstname: "Erique",
    lastname: "Delacharlerie",
    github: "https://avatars.githubusercontent.com/delache?s=56",
    role: "student"
  };

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getAll().subscribe((tickets) => {
      this.tickets = tickets.reverse();
    });
  }
}
