import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { Group } from './../../models/group';
import { TicketService } from './../../services/ticket.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor(
    private ticketService: TicketService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  newTicket: Ticket = new Ticket();
  ticketType: string;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.newTicket.id = parseInt(params.get('id'));
      this.ticketService.getById(this.newTicket.id).subscribe(ticket => {
        this.newTicket = ticket;
        if (this.newTicket.group) {
          this.ticketType = 'CURSUS';
        } else {
          this.ticketType = 'SCHOOL';
        }
      });
    });
    this.ticketService.formButton = false;
  }

  onReset(createTicket?: NgForm) {
    createTicket.resetForm();
  }

  onFormSubmit(newTicket: Ticket) {
    if (this.ticketType === 'CURSUS') {
      this.newTicket.group = { id: 178 } as Group;
      this.newTicket.school = null;
    } else {
      this.newTicket.school = { id: 5 };
      this.newTicket.group = null;
    }
    this.ticketService.createTicket(this.newTicket).subscribe(() => {
      this.router.navigate(['/user']);
    });
  }

  onUpdateTicket() {
    this.ticketService.updateTicket(this.newTicket).subscribe();
    this.router.navigate(['/user']);
  }

  onClose() {
    this.router.navigate(['/user']);
  }
}
