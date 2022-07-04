
import { appSchema } from "@nozbe/watermelondb/Schema";
import { userSchema } from "./userSchema";
import {walkSchema} from './walkSchema'

const schemas = appSchema({
    version: 2,
    tables: [
        walkSchema,
        userSchema
    ]
})

export {schemas}