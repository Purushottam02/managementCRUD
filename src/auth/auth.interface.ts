import { Document } from 'mongoose';
export interface login extends Document {
    findOne(arg0: { username: string; }): unknown;
    readonly username:string;
    readonly password: string;
    readonly userId:string;
}
