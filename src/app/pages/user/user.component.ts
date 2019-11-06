import { WsHelperService } from './../../services/ws-helper.service';
import { TicketService } from './../../services/ticket.service';
import { ActivatedRoute} from "@angular/router";
import { User } from "./../../models/user";
import { Component, OnInit } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  user: User;
  mary: User = {
    id: 1,
    firstName: "Mary",
    lastName: "Royer",
    avatar:
      // tslint:disable-next-line: max-line-length
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    status: "student"
  };

  constructor(private route: ActivatedRoute, private service: WsHelperService) {}

  ngOnInit() {
  }
}
