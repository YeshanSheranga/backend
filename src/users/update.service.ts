import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Update } from './update.model';
import { Model } from 'mongoose';
import { UpdateInput } from './update.inputs';

@Injectable()
export class UpdateService {
  constructor(
    @InjectModel(Update.name)
    private update: Model<Update>,
  ) {}

  async updateU(payload: UpdateInput) {
    return this.update.findByIdAndUpdate(payload.id, payload);
  }
}
