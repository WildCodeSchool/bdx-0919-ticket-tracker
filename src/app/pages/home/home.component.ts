import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isModalVisible = false;


  constructor() { }

  ngOnInit() {

  }

  connexion() {
    this.isModalVisible = !this.isModalVisible;

  }


}
