import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SmsModule } from './sms/sms.module';
import { BinanceModule } from './binance/binance.module';
import { PodModule } from './pod/pod.module';
import { ProfileModule } from './profile/profile.module';
import { TestapiModule } from './testapi/testapi.module';

@Module({
  imports: [ConfigModule, DatabaseModule, AuthModule, UsersModule, SmsModule, BinanceModule, PodModule, ProfileModule, TestapiModule],
  controllers: [],
})
export class AppModule {}
