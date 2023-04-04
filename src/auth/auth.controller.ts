import {Body,Controller,Get,HttpCode,HttpStatus,Post,Req,Res} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { SignINDto } from './auth.dto';
import { Response, Request } from 'express';

interface SessionData {
  accessToken?: string;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(
    @Req() req: Request & { session: SessionData },
    @Res() res: Response,
    @Body() signInDto: SignINDto,
  ) {
    const token = await this.authService.signIn(
      signInDto.userName,
      signInDto.password,
    );
    if (!token) {
      res.status(401).send('Unauthorized');
    } else {
      res
        .cookie('access_token', token, {
          httpOnly: true,
          secure: false,
          sameSite: 'lax',
          expires: new Date(Date.now() + 1 * 24 * 60 * 1000),
        })
        .send({ status: 'ok' });
    }
  }
  @Get('/profile')
  async profile(
    @Req() req: Request & { session: SessionData },
    @Res() res: Response,@Body() signInDto: SignINDto
  ) {
    const profile = await this.authService.result(
      signInDto.userName,
      signInDto.password,
    );
    const accessToken = req.session.accessToken;
    if (!accessToken) {
      res.status(401).send('Unauthorized');
      return;
    }
    res.send(`Access token: ${profile}`);
  }
  @Get('/about')
  async about(
    @Req() req: Request & { session: SessionData },
    @Res() res: Response,@Body() signInDto: SignINDto
  ) {
    const profile = await this.authService.about(
      signInDto.userName,
      signInDto.password,
    );
    const accessToken = req.session.accessToken;
    if (!accessToken) {
      res.status(401).send('Unauthorized');
      return;
    }
    res.send(`Access token: ${profile}`);
  }
}
