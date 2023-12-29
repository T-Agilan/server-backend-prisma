// server/src/modules/graphql/dto/record.dto.ts
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RecordTypeDto {
  @Field()
  fname: string;
  @Field()
  mail: string;
  @Field()
  number: string;
  @Field()
  website: string;
  @Field()
  contactName: string;
  @Field()
  contactPhone: string;
  @Field()
  contactMail: string;
  @Field()
  notes: string;
  @Field()
  type: string;
  @Field()
  category: string;
  @Field()
  percentage: number;
  @Field()
  activeFrom: string;
  @Field()
  criticalAccount: boolean;
  @Field()
  paymentOptions: string;
}
