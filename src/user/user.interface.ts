// const userSchema = new mongoose.Schema({
//     first_name: { type: String, default: null },
//     last_name : { type: String, default: null },
//     email     : { type: String, unique: true  },
//     password  : { type: String },
//     token     : { type: String },
// });
export type User = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  token: string;
};
