import { OmitType } from '@nestjs/swagger';
import { Allow, IsNotEmpty, ValidateNested } from 'class-validator';

export class InnerTestClass {
  @Allow()
  foo!: string;

  @Allow()
  bar!: string;
}
export class InnerTestClass2 extends OmitType(InnerTestClass, ['foo']) {
  constructor(dto: InnerTestClass2) {
    super();
    Object.assign(this, dto);
  }
}

export class TestClass {
  @ValidateNested({ each: true })
  @IsNotEmpty()
  myArray!: InnerTestClass2[];

  @Allow()
  another: string;
}

export class TestClass2 extends OmitType(TestClass, ['another']) {
  constructor(dto: TestClass2) {
    super();
    Object.assign(this, dto);
  }
}
