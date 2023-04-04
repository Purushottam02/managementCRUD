 import { Schema,Document } from 'mongoose';


export const LoginSchema = new Schema({
  userName: {
    type: String,
    required:true
  },
  password: {
    type: String,
    required : true
  },
  
});




