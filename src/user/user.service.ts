import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';
@Injectable()
export class UserService {
  constructor(@InjectModel('user') private readonly userModel: Model<User>) {}
  //CreateUser
  async createUser(
    first_name: string,
    last_name: string,
    email: string,
    password: string,
  ): Promise<User> {
    return this.userModel.create({
      first_name,
      last_name,
      email,
      password,
    });
  }
  //GetUser
  async getUser(query: object): Promise<User> {
    return this.userModel.findOne(query);
  }
}
