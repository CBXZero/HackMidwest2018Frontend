import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-event-page',
  templateUrl: './create-event-page.component.html',
  styleUrls: ['./create-event-page.component.css']
})
export class CreateEventPageComponent implements OnInit {

  createEventForm = this.fb.group({
    title: '',
    description: '',
    location: '',
    website: '',
    startTime: '',
    endTime: '',
    visibility: '',
    guestOptions: '',
    dressCode: ''
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
