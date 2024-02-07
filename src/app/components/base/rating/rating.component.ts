import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RatingComponent implements OnInit {   
  
  currentRate = 6;
  selected = 0;
  hovered = 0;
  readonly = false;
  heartRate=5;

  constructor(config: NgbRatingConfig) { 
    config.max = 5;
		config.readonly = true;

  }

  ngOnInit() { }

  ctrl = new FormControl(null, Validators.required);

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }
}
