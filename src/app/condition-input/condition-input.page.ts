import { Component, OnInit } from '@angular/core';
import { Condition } from '../models/app-model';

@Component({
  selector: 'app-condition-input',
  templateUrl: './condition-input.page.html',
  styleUrls: ['./condition-input.page.scss'],
})
export class ConditionInputPage implements OnInit {
  public condition: Condition | null = null;

  constructor() { }

  ngOnInit() {
  }

  public selectCondition(condition: Condition) {
    this.condition = condition;
    console.log('Selected condition: ' + condition);
  }

}
