import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { TaskUserModule } from './task-user/task-user.module';

@Module({
  imports: [AuthenticationModule, TaskUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
