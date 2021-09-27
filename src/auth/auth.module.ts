import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from '../users/user.repository';
import { SmsService } from 'src/sms/sms.service';
import { SmsModule } from 'src/sms/sms.module';

@Module({
  imports:[
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.register({
      secret:'alimohseni@1362#',
      signOptions:{
        expiresIn:3600,
      }
    }),
    TypeOrmModule.forFeature([UserRepository]),
    SmsModule
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
