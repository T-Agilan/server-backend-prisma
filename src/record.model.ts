// server/src/modules/graphql/record.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Record extends Document {
  @Prop()
  name: string;
}

export const RecordSchema = SchemaFactory.createForClass(Record);
