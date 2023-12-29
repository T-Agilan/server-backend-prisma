import { Query, Args, Mutation, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';
import { RecordTypeDto } from './record.dto';
import { RecordType } from './app.model';
// import { RecordTypeDto } from './record.dto;

@Resolver(() => RecordType)
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => RecordType)
  test(
    @Args('recordDto') recordDto: RecordTypeDto,
    @Args('name') name: string,
  ): RecordType {
    return this.appService.someMethod(recordDto, name);
  }

  @Mutation(() => RecordType)
  async createRecord(
    @Args('recordDto') recordDto: RecordTypeDto,
  ): Promise<RecordType> {
    return this.appService.createRecord(recordDto);
  }
}
