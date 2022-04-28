import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TestClass2 } from './classes';
import { plainToClass } from 'class-transformer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Test using:
  // curl -X POST -H "Content-Type: application/json" -d '{"myArray" : [{"foo": "hi"}]}' localhost:3000
  // Expected: TestClass2 { myArray: [ { foo: 'hi' } ] }
  // Actual:   TestClass2 { myArray: [ [ foo: 'hi' ] ] }

  // InnerTestClass should be a object to an array

  @Post()
  getHello(@Body() data: TestClass2): string {
    console.log("Expected: TestClass2 { myArray: [ { foo: 'hi' } ] }");
    console.log('Actual:  ', data);
    console.log(
      'Actual 2:  ',
      plainToClass(
        TestClass2,
        { myArray: [{ foo: 'hi' }] },
        { enableImplicitConversion: true },
      ),
    );
    return this.appService.getHello();
  }
}
