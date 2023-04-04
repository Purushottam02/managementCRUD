import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  Query,
  NotFoundException,
  Delete,
} from '@nestjs/common';
import { ApiResponse, ApiQuery } from '@nestjs/swagger';
import { CreateUserDTO } from './user.dto';
import { UserService } from './user.service';
import { Public } from '../auth/decorators/public.decorator';
@Controller()
export class UserController {
  constructor(private readonly UserService: UserService) {}

  // @Public()
  @Post('/create')
  @ApiResponse({ status: 201, description: 'Successful Login' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async createPost(@Res() res, @Body() CreateUserDTO: CreateUserDTO) {
    const user = await this.UserService.createUser(CreateUserDTO);
    return res.status(HttpStatus.CREATED).json({
      id: user._id,
    });
  }
  @Get('/get')
  @ApiQuery({ name: 'mobileNumber', required: false, type: String })
  @ApiQuery({ name: 'emailId', required: false, type: String })
  @ApiResponse({ status: 200, description: 'User found successfully' })
  @ApiResponse({ status: 204, description: 'User not found' })
  async getUser(
    @Res() res,
    @Query('mobileNumber') mobileNumber: string,
    @Query('emailId') emailId: string,
  ) {
    let user;
    if (mobileNumber) {
      user = await this.UserService.getUserByMobileNumber(mobileNumber);
    } else if (emailId) {
      user = await this.UserService.getUserByEmailId(emailId);
    }
    if (!user) {
      return res.status(HttpStatus.NO_CONTENT).json();
    }
    return res.status(HttpStatus.OK).json(user);
  }

  @Delete('/delete')
  async deleteProduct(@Res() res, @Query('UserId') userId: string) {
    const deletedUser = await this.UserService.deleteUser(userId);
    if (!deletedUser) {
      throw new NotFoundException('User is not found');
    }
    return res.status(HttpStatus.OK).json({
      mensaje: 'user',
      deletedUser,
    });
  }

}
