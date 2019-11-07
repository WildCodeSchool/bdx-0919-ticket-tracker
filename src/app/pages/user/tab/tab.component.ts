import { Component, OnInit, Input } from "@angular/core";
import { User } from "./../../../models/user";

@Component({
  selector: "app-tab",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.scss"]
})
export class TabComponent implements OnInit {
  @Input() user: User;
  private userList = [
    "Tous les tickets",
    "Tickets cursus",
    "Tickets administration"
  ];
  private adminList = ["En attente", "En cours", "Traités"];
  selectedList: string[];
  indexClicked: number = 0;
  constructor() {}

  ngOnInit() {
    if (this.user.role === "administrator") {
      this.selectedList = this.adminList;
    } else {
      this.selectedList = this.userList;
    }
  }

  defineIndex(index) {
    this.indexClicked = index;
  }
}
