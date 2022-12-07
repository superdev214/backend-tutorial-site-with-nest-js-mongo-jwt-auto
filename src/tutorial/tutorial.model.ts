import { MongooseModule } from '@nestjs/mongoose';
import { TutorialSchema } from './tutorial.schema';

export const TutorialModel = MongooseModule.forFeature([
  { name: 'tutorial', schema: TutorialSchema },
]);
