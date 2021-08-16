import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-values',
  templateUrl: './input-values.component.html',
  styleUrls: ['./input-values.component.css']
})
export class InputValuesComponent implements OnInit {
  @Output() onAddAmountHandler = new EventEmitter()

  amount: number = 0
  description: string = ''
  type: string = 'income'
  constructor() { }

  ngOnInit(): void {
  }

  onAddAmount() {
    if( this.amount < 0 ) {
      this.type = 'expense'
    } else {
      this.type = 'income'
    }
    const amountData = {
      amount: this.amount,
      description: this.description,
      type: this.type 
    }
    this.onAddAmountHandler.emit(amountData)
    this.amount = 0
    this.description = ''
  }

}
