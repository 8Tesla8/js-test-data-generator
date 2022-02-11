import { Component } from '@angular/core';
import { Transaction } from './models/transaction.model';
import { User } from './models/user.model';
import { DataGeneratorService } from './services/data-generatro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public usersCount = 0;
  public transactionCount = 0;

  public users: User[] = [];
  public transactions: Transaction[] = [];

  constructor(private readonly _dataGenerator: DataGeneratorService) {    
  }

  public createUsers():void{
    this.users = this._dataGenerator.createUsers(this.usersCount);
    debugger;
  }

  public createTransactions():void{
    this.transactions = this._dataGenerator.createTransaction(this.transactionCount);
  }
}
