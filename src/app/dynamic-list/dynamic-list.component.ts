import { Component, OnInit, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.css']
})
export class DynamicListComponent implements OnInit {

  @ViewChildren('contribution') domContributions: ViewChildren;

  form = this.fb.group({
    contributions: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get contributions() {
    return this.form.get('contributions') as FormArray;
  }

  addContribution() {
    if (this.contributions.at(this.contributions.length - 1).value != "") {
      setTimeout(() => {
        var element = (this.domContributions as any).last.nativeElement;
        element.focus();
      }, 0);
      var newField = this.fb.control('');
      this.contributions.push(newField);
    }
  }

  onEnter() {
    this.addContribution();
  }

  delete(entry) {
    this.contributions.removeAt(entry);
  }

}
