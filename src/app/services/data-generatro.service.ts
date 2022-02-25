import { Injectable } from '@angular/core';
import { BooleanParameters, DateParameters, NumberParameters, StringOptions, StringParameters } from '../models/mock-data-property-parameter.model';
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
    let guidParam = new StringParameters();
    guidParam.options = StringOptions.Guid;

    let nameParam = new StringParameters();
    nameParam.options = StringOptions.Name;

    let props: MockDataProperty[] = [
      {
        propName: 'id',
        dataType: DataType.String,
        parameter: guidParam,
      },
      {
        propName: 'guest',
        dataType: DataType.Boolean,
        parameter: new BooleanParameters()
      },
      {
        propName: 'lastVisit',
        dataType: DataType.Date,
        parameter: new DateParameters(),
      },
      {
        propName: 'firstName',
        dataType: DataType.String,
        parameter: nameParam,
      },
      {
        propName: 'lastName',
        dataType: DataType.String,
        parameter: nameParam,
      },
      {
        propName: 'money',
        dataType: DataType.Number,
        parameter: new NumberParameters()
      },
    ];

    return this.generateData(count, props);
  }

  public createTransaction(count: number): Transaction[] {
    let guidParam = new StringParameters();
    guidParam.options = StringOptions.Guid;

    let numberParam = new NumberParameters();
    numberParam.startNumber = 20;
    numberParam.startNumber = 30;
    numberParam.float = false;
    numberParam.convertToString = true;

    let floatNumberParam = new NumberParameters();
    floatNumberParam.startNumber = 3;
    floatNumberParam.startNumber = 10;


    let props: MockDataProperty[] = [
      {
        propName: 'id',
        dataType: DataType.String,
        parameter: guidParam,
      },
      {
        propName: 'startDate',
        dataType: DataType.Date,
        parameter: new DateParameters(),
      },
      {
        propName: 'endDate',
        dataType: DataType.Date,
        parameter: new DateParameters(),
      },
      {
        propName: 'success',
        dataType: DataType.Boolean,
        parameter: new BooleanParameters(),
      },
      {
        propName: 'wallet',
        dataType: DataType.Number,
        parameter: new NumberParameters(),
      },
      {
        propName: 'cost',
        dataType: DataType.Number,
        parameter: numberParam,
      },
      {
        propName: 'fees',
        dataType: DataType.Number,
        parameter: floatNumberParam,
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

