import { Component } from '@angular/core';
import { Value } from './interfaces/Value'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'budgedCalculator'
  incomeAmount: Value[] = []
  expenseAmount: Value[] = []
  totalBudget: number = 0

  addAmount(data: Value) {
    if(data.type === 'income') {
      this.incomeAmount.push(data)
    } else {
      this.expenseAmount.push(data)
    } 
    this.calculateBudgete()   
    console.log(this.incomeAmount);
    
  }

  calculateBudgete() {
    let incomeAmount = 0
    let expenseAmount = 0

    this.incomeAmount.forEach(value => {
      incomeAmount += value.amount
    })

    this.expenseAmount.forEach(value => {
      expenseAmount -= value.amount
    })

    this.totalBudget = incomeAmount - expenseAmount
  }
}
