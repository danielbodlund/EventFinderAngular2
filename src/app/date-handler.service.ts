import {Injectable} from '@angular/core';

@Injectable()
export class DateHandlerService {

  constructor() {}
  getDate(){
    var start_date = new Date().toLocaleDateString();
    return start_date;
  }

  getTime(){
    var start_date = new Date();
    
    var h = start_date.getHours();
    var m = start_date.getMinutes();
    var time;
    if (m < 10) {
      time = h + ":0" + m;
    }else{
      time = h + ":" + m;
    }
    
    return time;
  }

  getTimeStamp(){
    return Date.now();
  }
}
