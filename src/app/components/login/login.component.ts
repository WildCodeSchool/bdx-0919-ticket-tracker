import { Component, OnInit } from '@angular/core';

export interface Select {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public selects: Select[] = [
    {value: 'student', viewValue: 'Campus Manager'},
    {value: 'Manager', viewValue: 'Formateur'},
    {value: 'teacher', viewValue: 'Étudiant'}
  ];

  hide: boolean = true;


  constructor() { }

  ngOnInit() {
  }


}
