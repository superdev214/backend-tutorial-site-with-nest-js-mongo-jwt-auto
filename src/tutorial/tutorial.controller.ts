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

import { TutorialDto } from './tutorial.dto';
import { TutorialService } from './tutorial.service';

@Controller('tutorial')
export class TutorialController {
  constructor(private readonly tutorialService: TutorialService) {}
  //create

  @Post()
  createTutorial(@Body() tutorialDto: TutorialDto) {
    return this.tutorialService.create(
      tutorialDto.title,
      tutorialDto.description,
      tutorialDto.published,
    );
  }
  @Get()
  findAllorTitle(@Query() query) {
    return this.tutorialService.findAllorTitle(query.title);
  }
}
