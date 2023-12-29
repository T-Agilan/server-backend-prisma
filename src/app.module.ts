// server/src/modules/app.module.ts
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { ApolloDriver } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { Record, RecordSchema } from './record.model';
import { PrismaAppModule } from 'prisma/prisma.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://agilanakil1432:nAm4gGm7dfloQM0M@testing-nest.v4fk1ij.mongodb.net/nest',
    ),
    MongooseModule.forFeature([{ name: Record.name, schema: RecordSchema }]),
    PrismaAppModule
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
