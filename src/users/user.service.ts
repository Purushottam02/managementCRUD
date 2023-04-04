import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO, UpdateUserDTO } from './user.dto';
import { User } from './user.interface';
// import * as sgMail from '@sendgrid/mail';
import { login } from '../auth/auth.interface';
// import { loginUser } from '../auth/auth.interface';
// import { SignInDto } from '../auth/auth.dto';
// export type User1 = any;
@Injectable()

export class UserService {
  
  constructor(@InjectModel('User') private readonly userModel: Model<User>,
  @InjectModel('User') private readonly loginModel: Model<login> ) {}


  async createUser(createProductDto: CreateUserDTO): Promise<User> {
    const newUser = new this.userModel(createProductDto);
    return await newUser.save();

    // sgMail.setApiKey('your_sendgrid_api_key');

    // const sendOTP = async (email: string, otp: string) => {
    //   const msg = {
    //     to: email,
    //     from: 'gandasp18@gmail.com',
    //     subject: 'OTP Verification',
    //     text: `Your OTP for account verification is ${otp}`,
    //   };
    //   try {
    //     await sgMail.send(msg);
    //     console.log('OTP sent successfully');
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };

    // sendOTP('gandasp18@gmail.com', '1234');

  }

  async getUserById(userId: string): Promise<User> {
    const user = this.userModel.findOne({ _id: userId });
    return user;
  }

  async getUserByEmailId(emailId: string): Promise<User> {
    const user = this.userModel.findOne({ emailId });
    return user;
  }

  async login(username: string): Promise<User> {
    const udetail = this.userModel.findOne({username});
    return udetail;
  }
  async getUserByMobileNumber(mobileNumber: string): Promise<User> {
    const user = this.userModel.findOne({ mobileNumber });
    return user;
  }

  async updateUser(
    userId: string,
    createProductDto: UpdateUserDTO,
  ): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      userId,
      createProductDto,
      { new: true },
    );
    return updatedUser;
  }

  async deleteUser(userId: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(userId);
    return deletedUser;
  }


  // async login(username: string): Promise<User | undefined> {
  //   const userd = await this.userModel.find(auth => auth.userName === userName);
  //   return userd;
  // }
//   async loginUser(signINDto: SignInDto): Promise<User> {
//     const User =this.userModel.find(userModel =>);
//     return await User;
// }
// async findByUsername(username: string): Promise<loginUser | null> {
//   return this.userModel.findOne({ username }).exec();
// }
}