import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TutorialController } from './tutorial/tutorial.controller';
import { TutorialModule } from './tutorial/tutorial.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/testdb'),
    TutorialModule,
    UserModule,
    AuthModule,
  ], //@ Connect Database
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
