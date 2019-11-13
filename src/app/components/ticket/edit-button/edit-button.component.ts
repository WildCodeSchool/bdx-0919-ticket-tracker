import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Ticket } from "src/app/models/ticket";
import { TicketService } from "src/app/services/ticket.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-edit-button",
  templateUrl: "./edit-button.component.html",
  styleUrls: ["./edit-button.component.scss"]
})
export class EditButtonComponent implements OnInit {
  @Input() ticket: Ticket;
  @Output() getCheckDelete = new EventEmitter<Ticket>();

  constructor(
    private ticketsService: TicketService,
    private userService: UserService
  ) {}

  idUser = this.userService.user.id;

  ngOnInit() {}

  delete() {
    this.ticketsService
      .deleteTicket(this.ticket.id)
      .subscribe((data: Ticket) => {
        this.getCheckDelete.emit(data);
      });
  }
}
