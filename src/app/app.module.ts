import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputValuesComponent } from './components/input-values/input-values.component';
import { UiIncomeExpenseComponent } from './components/ui-income-expense/ui-income-expense.component';

@NgModule({
  declarations: [
    AppComponent,
    InputValuesComponent,
    UiIncomeExpenseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
