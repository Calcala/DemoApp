import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  //Constantes
  months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  
  //Variables
  day: String
  month: String;
  now= new Date();

  isWorking: Boolean = false
  startedAt: String

  constructor() { }

  ngOnInit() {
    this.day = ("0" + this.now.getDate()).slice(-2)
    this.month = this.months[this.now.getMonth()]
  }

  onStartDay(){
    this.isWorking = true
    this.startedAt = this.now.getHours() + ":" + this.now.getMinutes()+":"+ ("0" + this.now.getSeconds()).slice(-2);
  }

  onEndDay(){
    this.isWorking = false
  }



}
