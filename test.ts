import 'reflect-metadata'
import { prop, ref, schema, use } from "class-schema";
import { expect } from 'chai';

it('throw a TypeError when the parent schema has no props', () => {
    @schema()
    class ParentSchema {}

    expect(() => {
        @schema()
        class ChildSchema extends ParentSchema {}
    }).to.throw(TypeError)
})

it('do not throw when the parent schema has a prop', () => {
    @schema()
    class ParentSchema {
        @prop()
        myProp!: string
    }

    expect(() => {
        @schema()
        class ChildSchema extends ParentSchema {}
    }).to.not.throw(Error)
})
