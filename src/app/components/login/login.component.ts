import { Component, OnInit, Input} from '@angular/core';


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

  @Input () isModalVisible: boolean;



  public selects: Select[] = [
    {value: 'student', viewValue: 'Campus Manager'},
    {value: 'Manager', viewValue: 'Formateur'},
    {value: 'teacher', viewValue: 'Étudiant'}
  ];

  hide = true;


  constructor() { }

  ngOnInit() { }

  nothing() {}



}
