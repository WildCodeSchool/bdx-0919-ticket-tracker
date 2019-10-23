import { User } from "./../../models/user";
import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

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
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  };
  constructor() {}

  ngOnInit() {}
}
