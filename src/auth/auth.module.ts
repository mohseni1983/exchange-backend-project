import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UserRepository } from '../users/repositories/user.repository';
import { SmsService } from 'src/sms/services/sms.service';
import { SmsModule } from 'src/sms/sms.module';
import { JwtGuard } from "./guard/jwt.guard";
import { JwtStrategy } from "./guard/jwt.strategy";
import { RolesGuard } from "./guard/roles.guard";
import { CountryGuard } from "./guard/country.guard";

@Module({
  imports:[
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: 'alimohseni@1362#',
        signOptions: { expiresIn: '3600s' },
      }),
    }),
    TypeOrmModule.forFeature([UserRepository]),
    SmsModule
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtGuard,JwtStrategy,RolesGuard,CountryGuard],
  exports:[AuthService,AuthModule]
})
export class AuthModule {}
