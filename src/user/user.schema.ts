import * as mongoose from 'mongoose';
// const userSchema = new mongoose.Schema({
//     first_name: { type: String, default: null },
//     last_name : { type: String, default: null },
//     email     : { type: String, unique: true  },
//     password  : { type: String },
//     token     : { type: String },
// });
import { User } from './user.interface';
export const UserSchema = new mongoose.Schema<User>({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String, require: true},
  token: { type: String },

});
