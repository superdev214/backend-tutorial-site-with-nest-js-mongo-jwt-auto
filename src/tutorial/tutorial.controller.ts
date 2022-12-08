import {
  Controller,
  Get,
  Post,
  Req,
  Param,
  UseGuards,
  Body,
  Query
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TutorialDto } from './tutorial.dto';
import { TutorialService } from './tutorial.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@Controller()
export class TutorialController {
  constructor(private readonly tutorialService: TutorialService) {}
  //create

  @Post('/')
  createTutorial(@Body() tutorialDto: TutorialDto) {
    return this.tutorialService.create(
      tutorialDto.title,
      tutorialDto.description,
      tutorialDto.published,
 
    );
  }
@UseGuards(JwtAuthGuard)
  @Get('/')
  findAllorTitle(@Query() query) {
    console.log("asdf");
    return this.tutorialService.findAllorTitle(query.title);
  }
}
