import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { LoggerMiddleware } from './auth/middleware/LoggerMiddleware';


@Module({
  imports: [AuthModule,UserModule,MongooseModule.forRoot('mongodb://localhost/managemet', {
    useNewUrlParser: true,
  })],
  controllers: [AppController],
  providers: [AppService,JwtModule],
})

export class AppModule{}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//         consumer
//           .apply(LoggerMiddleware)
//           .exclude(
//             { path: '/profile', method: RequestMethod.GET },
//             // { path: '/profile', method: RequestMethod.POST },
//             'auth/(.*)',
//   )
//           .forRoutes(AuthController);
//   }
// }



