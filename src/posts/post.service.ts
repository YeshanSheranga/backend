import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { Post } from './post.model';
import { CreateInput, UpdateInput } from './post.input';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name)
    private postModel: Model<Post>,
  ) {}

  createPo(payload: CreateInput) {
    const createdPerson = new this.postModel(payload);
    return createdPerson.save();
  }

  update(payload: UpdateInput) {
    return this.postModel.findByIdAndUpdate(payload.id, payload, { new: true });
  }

  delete(id: Schema.Types.ObjectId) {
    return this.postModel.findByIdAndDelete(id);
  }
}
