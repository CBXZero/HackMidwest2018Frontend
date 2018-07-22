import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.css']
})
export class ContributionComponent implements OnInit {
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
