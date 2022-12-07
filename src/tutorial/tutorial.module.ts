import { Module } from '@nestjs/common';
import { TutorialController } from './tutorial.controller';
import { TutorialModel } from './tutorial.model';
import { TutorialService } from './tutorial.service';

@Module({
    imports: [TutorialModel],
    providers: [TutorialService]
})
export class TutorialModule {}
