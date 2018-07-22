import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.css']
})
export class ContributionComponent implements OnInit {
  @Input() name: string;
  @Output() checked: boolean;
  checkboxChecked: boolean;

  constructor() { }

  ngOnInit() {
  }

  updateData() {
    
  }
}
