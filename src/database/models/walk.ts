import {Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';

export class Walk extends Model {
  static table = 'walks';

  @field('walk_id')
  walk_id!: string;

  @field('distance')
  distance!: number;

  @field('hours')
  hours!: number;

  @field('minutes')
  minutes!: number;

  @field('date')
  date!: string;
}
