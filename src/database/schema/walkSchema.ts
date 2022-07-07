import {tableSchema} from '@nozbe/watermelondb/Schema';

export const walkSchema = tableSchema({
  name: 'walks',
  columns: [
    {name: 'walk_id', type: 'number'},
    {name: 'distance', type: 'number'},
    {name: 'hours', type: 'number'},
    {name: 'minutes', type: 'number'},
    {name: 'date', type: 'string'},
  ],
});
