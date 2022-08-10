import 'reflect-metadata'
import { prop, schema, use } from "class-schema";

@schema()
class ParentSchema {
}

@schema()
class ChildSchema extends ParentSchema {}
