# nestjs-omit-type-bug (See [issue](https://github.com/typestack/class-transformer/issues/1182))

1. `npm install`
2. `npm run start:dev`
3. `curl -X POST -H "Content-Type: application/json" -d '{"myArray" : [{"foo": "hi"}]}' localhost:3000`
4. Check console:
```
[Nest] 40553  - 04/28/2022, 5:16:32 PM     LOG [NestFactory] Starting Nest application...
[Nest] 40553  - 04/28/2022, 5:16:32 PM     LOG [InstanceLoader] AppModule dependencies initialized +14ms
[Nest] 40553  - 04/28/2022, 5:16:32 PM     LOG [RoutesResolver] AppController {/}: +12ms
[Nest] 40553  - 04/28/2022, 5:16:32 PM     LOG [RouterExplorer] Mapped {/, POST} route +1ms
[Nest] 40553  - 04/28/2022, 5:16:32 PM     LOG [NestApplication] Nest application successfully started +1ms
Expected: TestClass2 { myArray: [ { foo: 'hi' } ] }
Actual:   TestClass2 { myArray: [ [ foo: 'hi' ] ] }
```
