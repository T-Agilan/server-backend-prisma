// server/src/modules/graphql/dto/record.dto.ts
import {  Field, InputType } from '@nestjs/graphql';

@InputType()
export class RecordTypeDto  {
  @Field() 
  name: string;
}
