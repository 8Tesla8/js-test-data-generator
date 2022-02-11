import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { User } from '../models/user.model';
import {
  DataType,
  MockDataGenerator,
  MockDataProperty,
} from './mock-data-generator.service';

@Injectable()
export class DataGeneratorService {
  constructor(private readonly _dataGenerator: MockDataGenerator) {}

  public createUsers(count: number): User[] {
    let props: MockDataProperty[] = [
      {
        propName: 'id',
        dataType: DataType.Guid,
      },
      {
        propName: 'guest',
        dataType: DataType.Boolean,
      },
      {
        propName: 'lastVisit',
        dataType: DataType.Date,
      },
      {
        propName: 'firstName',
        dataType: DataType.StringName,
      },
      {
        propName: 'lastName',
        dataType: DataType.StringName,
      },
      {
        propName: 'money',
        dataType: DataType.Number,
      },
    ];

    return this.generateData(count, props);
  }

  public createTransaction(count: number): Transaction[] {
    let props: MockDataProperty[] = [
      {
        propName: 'id',
        dataType: DataType.Guid,
      },
      {
        propName: 'startDate',
        dataType: DataType.Date,
      },
      {
        propName: 'endDate',
        dataType: DataType.Date,
      },
      {
        propName: 'success',
        dataType: DataType.Boolean,
      },
      {
        propName: 'wallet',
        dataType: DataType.StringWithNumber,
      },
      {
        propName: 'cost',
        dataType: DataType.Number,
      },
      {
        propName: 'fees',
        dataType: DataType.NumberFloat,
      },
    ];

    return this.generateData(count, props);
  }

  private generateData(count: number, props: MockDataProperty[]): Array<any> {
    let arr: Array<any> = [];

    for (let i = 0; i < count; i++) {
      arr.push(this._dataGenerator.create(props));
    }

    return arr;
  }
}

