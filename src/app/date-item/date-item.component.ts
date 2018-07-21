import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date-item',
  templateUrl: './date-item.component.html',
  styleUrls: ['./date-item.component.css']
})
export class DateItemComponent implements OnInit {

  @Input() option: { date: string; time: string; };
  
  constructor() { }

  ngOnInit() {
  }

}
