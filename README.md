# repro-class-schema

The `@schema` throw an error when we inherit an empty class.

```
     TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))
      at __read (node_modules/class-schema/dist/decorators/schema.js:14:46)
      at /Users/v-mendele/Documents/projects/repro-class-schema/node_modules/class-schema/src/decorators/schema.ts:27:16
      at DecorateConstructor (node_modules/reflect-metadata/Reflect.js:541:33)
      at Reflect.decorate (node_modules/reflect-metadata/Reflect.js:130:24)
      at __decorate (test.ts:4:92)
      at Context.<anonymous> (test.ts:11:22)
      at processImmediate (node:internal/timers:473:21)

```

---

## Run test and example

Look at the `test.ts` file to see the error case (run it with `npm run test`). To see the stacktrace, you can
run `throwing.ts` using `npm run example`.

```sh
npm i
npm run test
npm run example
```
