import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  public items = ['First', 'Second', 'Third'];
  public togglecollpese = false;


  constructor() { }

  onClick() {
    this.togglecollpese = !this.togglecollpese;
  }


  ngOnInit() { }

  public beforeChange(e) { }

}
