import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.scss'
})
export class StudentProfileComponent {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
       console.log(params['id']); // Access the 'id' parameter from the URL
    });
  }
}
