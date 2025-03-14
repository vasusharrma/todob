import mongoose, { Schema, Document } from 'mongoose'

interface todoSch extends Document {
  name: string,
  email: string,
  age: number,
  todoNote: string
}


const todoSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  todoNote: {
    type: String,
    required: true
  }
});

export default mongoose.model<todoSch>("Users", todoSchema);
