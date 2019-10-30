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
    if (this.user.status === "student") {
      this.selectedList = this.userList;
    } else {
      this.selectedList = this.adminList;
    }
  }

  defineIndex(index) {
    this.indexClicked = index;
  }
}
