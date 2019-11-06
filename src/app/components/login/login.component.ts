import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

export interface Select {
  value: string;
  viewValue: string;
}
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  @Input() isModalVisible: boolean;
  @Output() getModalVisible: EventEmitter<boolean> = new EventEmitter();

  public selects: Select[] = [
    { value: "student", viewValue: "Campus Manager" },
    { value: "Manager", viewValue: "Formateur" },
    { value: "teacher", viewValue: "Étudiant" }
  ];

  hide = true;

  constructor() {}

  ngOnInit() {}

  nothing() {}

  hideModal() {
    this.getModalVisible.emit(!this.isModalVisible);
  }
}
