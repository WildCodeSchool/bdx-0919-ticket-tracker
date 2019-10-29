import { Ticket } from 'src/app/models/ticket';
import { TicketService } from './../../services/ticket.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  router: Router;
  constructor(private ticketService: TicketService) {}
  newTicket: Ticket = new Ticket();

  ngOnInit() {
  }
  resetUserForm(userForm: NgForm) {
    userForm.resetForm();
  }
  onFormSubmit(userForm: NgForm) {
    console.log(userForm);
  }
  createTicket(newTicket: Ticket) {
    this.ticketService.addTicket(newTicket).subscribe(() => {
      this.router.navigate(['/user']);
    });
  }
}
