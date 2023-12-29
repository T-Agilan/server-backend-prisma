// server/src/modules/graphql/app.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Record } from './record.model';
import { RecordTypeDto } from './record.dto';
import { RecordType } from './app.model';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}
  someMethod(_recordDto: RecordTypeDto, name: string): RecordTypeDto {
    return {
      name: name,
    };
  }

  async createRecord(recordDto: RecordTypeDto): Promise<RecordType> {
    console.log(recordDto, 'recordDtorecordDto');
    return await this.prisma.customer.create({
      data: recordDto,
    });
  }
}
