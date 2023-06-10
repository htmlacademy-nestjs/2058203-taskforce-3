import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskUserModel, TaskUserSchema } from './task-user.model';
import { TaskUserRepository } from './task-user.repository';

@Module({
  imports: [MongooseModule.forFeature([
    {name: TaskUserModel.name, schema: TaskUserSchema}
  ])],
  providers: [TaskUserRepository],
  exports: [TaskUserRepository]
})
export class TaskUserModule {}
