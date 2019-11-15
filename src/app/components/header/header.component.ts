import { TicketService } from '../../services/ticket.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;
  formButton: boolean;
  constructor(private router: Router, private userService: UserService, private ticketService: TicketService) { }

  ngOnInit() {
    this.user = this.userService.user;
    this.formButton = this.ticketService.formButton;
  }
  deconnection() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}
