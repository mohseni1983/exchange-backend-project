import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { TestdriveModule } from './testdrive/testdrive.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SmsModule } from './sms/sms.module';
import { BinanceModule } from './binance/binance.module';
import { PodModule } from './pod/pod.module';
import { AccountingModule } from './accounting/accounting.module';
import { CryptoModule } from './crypto/crypto.module';

@Module({
  imports: [ConfigModule, DatabaseModule, TestdriveModule, AuthModule, UsersModule, SmsModule, BinanceModule, PodModule, AccountingModule, CryptoModule],
})
export class AppModule {}
