import { Module } from '@nestjs/common';
import { SmsService } from './services/sms.service';
import { SmsController } from './controllers/sms.controller';

@Module({
  providers: [SmsService],
  controllers: [SmsController],
  exports:[SmsService]
})
export class SmsModule {}
