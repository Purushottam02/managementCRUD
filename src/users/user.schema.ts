 import { Schema,Document } from 'mongoose';
import {Prop, SchemaFactory} from '@nestjs/mongoose';


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
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true
  },
  userName: {
    type: String,
    required:true
  },
  password: {
    type: String,
    required : true
  },
  

});




