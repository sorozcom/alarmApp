import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alarm-clock',
  templateUrl: './alarm-clock.component.html',
  styleUrls: ['./alarm-clock.component.css']
})
export class AlarmClockComponent implements OnInit {

  @Input() startTime;
  //@Input() messageToShow;
  @Input() alarmList;
  @Output() Notification = new EventEmitter();
  isSent = false;

  constructor() { }

  ngOnInit() {
    this.startTime = "_ _";
    setInterval(() => {
      if (this.startTime > 0) {
        this.startTime--;
        this.isSent = false;
      }
      else {
        this.startTime = "_ _";
        //alert("Emite")
        if(!this.isSent){
          this.Notification.emit({time:0, message:"I'm Back!"});
          this.isSent = true;
        }
      }
    }, 100);
  }

}
