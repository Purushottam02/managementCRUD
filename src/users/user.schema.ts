 import { Schema } from 'mongoose';



export const UserSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  emailId: {
    type: String,
    required: true,
    unique: true
  }
});

export const ProductSchema = new Schema({
  name: {type: String, required: true},
  description: String,
  imageUrl: String,
  price: Number,
  createdAt: {
      type: Date,
      default: Date.now,
  },
});
