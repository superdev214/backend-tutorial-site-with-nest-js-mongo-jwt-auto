import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TutorialController } from './tutorial/tutorial.controller';
import { TutorialModule } from './tutorial/tutorial.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/testdb'),
    TutorialModule,
  ], //@ Connect Database
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
