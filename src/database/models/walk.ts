import {Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';

export class Walk extends Model {
  static table = 'walks';

  @field('id')
  id!: string;

  @field('distance')
  distance!: number;

  @field('hours')
  hours!: number;

  @field('minutes')
  minutes!: number;

  @field('date')
  date!: string;
}
