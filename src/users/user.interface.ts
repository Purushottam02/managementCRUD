import { Document } from 'mongoose';
export interface User extends Document {
    readonly firstName: string;
    readonly lastName: string;
    readonly emailId: string;
    readonly mobileNumber: string;
    readonly password: string;
    readonly username : string;
    readonly userId: string;
}
