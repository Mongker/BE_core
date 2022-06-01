import { model, Schema, Document } from 'mongoose';
import { Thread } from '@interfaces/threads.interface';

const threadSchema: Schema = new Schema({
  groupId: {
    type: String,
    require: true,
    default: '',
  },
  title: {
    type: String,
    require: true,
    default: '',
  },
  type: {
    type: String,
    require: true,
    default: '',
  },
  image_link: {
    type: String,
    require: true,
    default: '',
  },
  version: {
    type: Number,
    require: true,
    default: 0,
  },
  description: {
    type: String,
    default: '',
  },
  link_blank: {
    type: String,
    default: '',
  },
  date: {
    type: String,
    default: '',
  },
});

const threadModel = model<Thread & Document>('thread', threadSchema, 'thread');

export default threadModel;
