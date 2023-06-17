import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html'
})
export class DateComponent {

public thisdate = "??"
  public getDate() {
    this.thisdate = Date();
  }
}
