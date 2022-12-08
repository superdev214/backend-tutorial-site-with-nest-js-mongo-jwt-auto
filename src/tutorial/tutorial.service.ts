import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tutorial } from './tutorial.interface';
@Injectable()
export class TutorialService {
  constructor(
    @InjectModel('tutorial') private readonly tutorialModel: Model<Tutorial>,
  ) {}
  /**
   * @ Create tutorial
   */
  async create(
    title: string,
    description: string,
    published: boolean,
  ): Promise<any> {
    try {
      const tutorial = await this.tutorialModel.create({
        title: title.toLocaleLowerCase(),
        description: description,
        published: published ? published : false,
      });
      return {
        ...tutorial,
        msg: "success",
      }
    } catch {}
  }
  async findAllorTitle(title?: string) {
    console.log(title);
    if (title === '' || title === undefined) {
      const tutorial = await this.tutorialModel.find();
      return tutorial;
    } else {
      const tutorial = await this.tutorialModel.find({ title: title });
      return tutorial;
    }
  }
}
