// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { UserService } from '../users/user.service';
// import { login } from './auth.interface';
// import { Model } from 'mongoose';
// import { InjectModel } from '@nestjs/mongoose';
// import { SignINDto } from './auth.dto';

// @Injectable()
// export class AuthService {
//   constructor(
//     private usersService: UserService,
//     private jwtService: JwtService,
//     //  @InjectModel('login')
//     //  private readonly userModel: Model<login>
//   @InjectModel('User') private readonly loginModel: Model<login>

//   ) {}
//   async signUser(sign: SignINDto): Promise<login>
// {
//    const signInUser = new this.loginModel(sign);
//    return await signInUser;
//   }
//   async signIn(username, pass) {
//     const user = await this.usersService.login(username);
//     if (user?.password !== pass) {
//       throw new UnauthorizedException();
//     }
//     const { password, ...result } = user;
//     const payload = { username: user.username, sub: user.userId };
//     return {
//       access_token: await this.jwtService.signAsync(payload),
//     };
//   }
// }

import { Injectable, UnauthorizedException, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { login } from './auth.interface';
import { SignINDto } from './auth.dto';
import { UserService } from '../users/user.service';
import { Response } from 'express';
import { error } from 'console';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
    @InjectModel('User') private readonly loginModel: Model<login>,
  ) {}

  async signUser(sign: SignINDto): Promise<login> {
    const signInUser = new this.loginModel(sign);
    return await signInUser.save();
  }

  async signIn(username: string, password: string) {
    try {
      const user = await this.usersService.login(username);
      if (!user || user.password !== password) {
        throw new UnauthorizedException();
      }
      const { password: _, ...result } = user.toObject();
      const payload = { username: user.username, sub: user.userId };
      const token = await this.jwtService.signAsync(payload);
      return token;
    } catch (err) {
      console.error(err);
      return '';
    }
  }

  async result(username: string, password: string) {
    // try {
    //   const user = await this.usersService.login(username);
    //   if (!user || user.password !== password) {
    //     throw new UnauthorizedException();
    //   }
    //   const { password: _, ...result } = user.toObject();
    //   const payload = { username: user.username, sub: user.userId };
    //   const token = await this.jwtService.signAsync(payload);
    //   return token;
    // } catch (err) {
    //   console.error(err);
    //   return '';
    // }
    return 'result';

  }


  async about(username: string, password: string) {
    // try {
    //   const user = await this.usersService.login(username);
    //   if (!user || user.password !== password) {
    //     throw new UnauthorizedException();
    //   }
    //   const { password: _, ...result } = user.toObject();
    //   const payload = { username: user.username, sub: user.userId };
    //   const token = await this.jwtService.signAsync(payload);
    //   return token;
    // } catch (err) {
    //   console.error(err);
    //   return '';
    // }
    return  'about';

  }

}
