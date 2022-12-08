import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { User } from './user.interface';
import { UserService } from './user.service';
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  /**
 * 
 *  export const UserSchema = new mongoose.Schema<User>({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String, require: true},
  token: { type: String },
});
 */
  @Post('/register')
  async createUser(
    @Body('first_name') first_name: string,
    @Body('last_name') last_name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<any> {
    console.log(first_name + last_name + email + password);
    const result = await this.userService.createUser(
      first_name,
      last_name,
      email,
      password,
    );
    return {
      ...result,
      msg: 'success',
    };
  }
}
