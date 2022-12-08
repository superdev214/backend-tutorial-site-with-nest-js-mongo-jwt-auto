import { Module } from '@nestjs/common';
import { UserModel } from './user.model';
import { UserService } from './user.service';
import { UserController } from './user.controller';
@Module({
  imports: [UserModel],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
