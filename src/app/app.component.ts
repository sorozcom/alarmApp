import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi alarma para despertar';
  alarmMessage = 'HEY! WAKE UP!';
  seconds = 55;
  alarmClockArray = [];
  alarmId = 1;

  getRandomSeconds(){
    this.seconds = Math.trunc(Math.random()*60);
  }
  ShowWakeUpMessage(data){
    this.alarmMessage = `${data.message}  ${this.alarmMessage}`;
    //this.alarmMessage = data.message;
    this.seconds = data.time;
    this.alarmClockArray.push({id: this.alarmId, time: data.time, message: this.alarmMessage});
    this.alarmId++;
  }
}