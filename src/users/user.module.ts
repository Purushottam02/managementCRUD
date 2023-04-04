import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'; 
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose'; 
import { UserSchema } from './user.schema';
import { AuthService } from '../auth/auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LoggerMiddleware } from '../auth/middleware/LoggerMiddleware';
@Module({
  imports: [UserModule,MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService],
  exports : [UserService]
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        LoggerMiddleware,
        // cookieSession({
        //   name: 'session',
        //   secret: 'my_secret',
        //   maxAge: 24 * 60 * 60 * 1000, // 24 hours
        //   secure: true,
        //   httpOnly: true,
        //   signed: true,
        // }),
      )
      .forRoutes(UserController);
  }
}

