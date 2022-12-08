import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}
  /**
   * Feature: Check if a user from the user.mode matches a user record from the database
   * if there is no match, the method returns a null value
   */
  async validateUser(email: string, password: string): Promise<any> {
    console.log('auth.service method called');
    const user = await this.userService.getUser({ email });
    if (!user) return null;
    if (user && (await (password === user.password))) return user;
    return null;
  }
  async login(user: any) {
    console.log('auth.service login start');
    const payload = { email: user.email, sub: user.password };

    return {
      token: this.jwtService.sign(payload),
      msg: "success",
    };
  }
}
