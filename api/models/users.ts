import { MongoBase } from '../mongo/MongoBase';
import { Typegoose } from 'typegoose';
import { MongoError } from 'mongodb';

export class jokeStat extends Typegoose {}

export class users extends MongoBase<
  jokeStat extends Typegoose ? Typegoose : any
> {
  constructor() {
    super('kid-me-api', 'joke-stats');
  }
  findAll() {
    return this.find((error: MongoError, data) => {
      if (error) error;
      else data;
    });
  }
}
