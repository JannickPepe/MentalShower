import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Condition } from '../../models/app-model';

@Component({
  selector: 'app-condition-button',
  templateUrl: './condition-button.component.html',
  styleUrls: ['./condition-button.component.scss'],
})
export class ConditionButtonComponent implements OnInit {
  @Input() condition: Condition;
  @Input() selectedCondition: Condition;
  @Output() selectCondition: EventEmitter<Condition> = new EventEmitter();

  constructor() { }

  get isSelected() {
    return this.condition === this.selectedCondition;
  }

  get ionicColor() {
    return 'var(--ion-color-' + this.condition + ')';
  }

  ngOnInit() {}

  public onClick() {
    this.selectCondition.emit(this.condition);
  }

}
