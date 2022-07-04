import { Database } from "@nozbe/watermelondb";
import SQLiteDatabaseAdapter from "@nozbe/watermelondb/adapters/sqlite";

import { schemas } from "./schema";
import { Walk } from "./models/walk";
import {User} from './models/user'

const adapter = new SQLiteDatabaseAdapter({
    schema: schemas
});

export const database = new Database({
    adapter,
    modelClasses: [Walk, User],
})