
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

  // tickets: Ticket[] = [
  //   {
  //     id: 1,
  //     title: "Bloqué sur AngularMaterial",
  //     description:
  //       "J'ai initié un projet en utilisant Angular Material.Quand j'essaie de créer un avavar, cela ne fonctionne pas.",
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   },
  //   {
  //     id: 2,
  //     title: "Plus de papier toilette",
  //     description: "En galère",
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   }
  // ];

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getAll().subscribe((tickets) => {
      this.tickets = tickets;
    });

  }
  onCheckDelete(indexDanslaList: number) {
    this.tickets.splice(indexDanslaList, 1);
  }
}
