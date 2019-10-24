import { Component, OnInit } from "@angular/core";
import { Ticket } from "src/app/models/ticket";

@Component({
  selector: "app-ticket-list",
  templateUrl: "./ticket-list.component.html",
  styleUrls: ["./ticket-list.component.scss"]
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[];
  constructor() {}

  ngOnInit() {}
}