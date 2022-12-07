import * as mongoose from 'mongoose';
import { Tutorial } from '../tutorial/tutorial.interface';
export const TutorialSchema = new mongoose.Schema<Tutorial>({
  title: { type: String },
  description: { type: String },
  published: { type: Boolean },
});
