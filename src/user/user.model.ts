import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';

export const UserModel = MongooseModule.forFeature([
  { name: 'user', schema: UserSchema },
]);
