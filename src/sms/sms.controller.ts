import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SmsService } from './sms.service';

@Controller('sms')
export class SmsController {
    constructor(private smsService:SmsService){}

    @Get()
    getSmsServiceActive():string{
        return 'service is ok'
    }

    @Get('otp/:mobile')
    async sendOtp(@Param('mobile') mobile:string):Promise<any>{
        return this.smsService.sendOtpCode(mobile)
    }
}
