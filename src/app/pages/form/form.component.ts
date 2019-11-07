import { Group } from './../../models/group';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from './../../services/ticket.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor(private ticketService: TicketService, private router: Router) {}
  newTicket: Ticket = new Ticket();
  ticketType: string;

  ngOnInit() {
  }
  onReset(createTicket: NgForm) {
    createTicket.resetForm();
  }
  onFormSubmit(newTicket: Ticket) {
    if (this.ticketType === 'CURSUS') {

      newTicket.group = {id: 178} as Group;
    } else {
      newTicket.school = {id: 5};
    }
    this.ticketService.createTicket(newTicket).subscribe(() => {

    this.router.navigate(['/user']);
    });
    }

  onClose() {
    this.router.navigate(['/user']);
  }
}
