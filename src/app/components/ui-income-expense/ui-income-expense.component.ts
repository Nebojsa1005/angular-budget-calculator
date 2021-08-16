import { Component, Input, OnInit } from '@angular/core';
import { Value } from 'src/app/interfaces/Value';

@Component({
  selector: 'app-ui-income-expense',
  templateUrl: './ui-income-expense.component.html',
  styleUrls: ['./ui-income-expense.component.css']
})
export class UiIncomeExpenseComponent implements OnInit {

  @Input() incomeAmount: Value[] | undefined
  @Input() expenseAmount: Value[] | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
