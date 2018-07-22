import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-edit-contributions-page',
  templateUrl: './edit-contributions-page.component.html',
  styleUrls: ['./edit-contributions-page.component.css']
})
export class EditContributionsPageComponent implements OnInit {

  possibleContributions: { title: string; }[];
  id: string;
  data: {}[];

  constructor(private route: ActivatedRoute, private afDb: AngularFireDatabase) {
    this.route.paramMap.subscribe(r => {
      this.id = r.get('id');
    });
  }

  dataUp(data:any) {
    this.data = data;
  }

  save() {
    this.afDb.object(this.id).set(this.data);
  }

  ngOnInit(): void {
  }

}
