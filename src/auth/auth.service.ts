import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialDto } from './auth-credentials.dto';
import { UserRepository } from '../users/user.repository';
import { OtpSms } from 'src/sms/otp.entity';
import { SmsService } from 'src/sms/sms.service';
import { CheckOtpDto } from 'src/sms/check-otp.dto';
import { User } from 'src/users/user.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository:UserRepository,
        private readonly smsService:SmsService
    ){}

    async registerWithOtp(mobile:string):Promise<OtpSms>{
        return this.smsService.sendOtpCode(mobile)
    }

    async checkOtpCode(checkOtpDto:CheckOtpDto):Promise<any>{
        const {mobile,code}=checkOtpDto
        const otp=await OtpSms.findOne({code:code,mobile:mobile,})
        if(!otp){
            throw new HttpException('کد مورد نظر صحیح نیست',404)
        }
        return {result:true};
    }

    async signUp(createUserDto:CreateUserDto):Promise<User>{
        return this.userRepository.signUp(createUserDto)
    }

    async signIn(authCredentialDto:AuthCredentialDto):Promise<any>{
        const validate=await this.userRepository.validateCredentials(authCredentialDto)
        if(!validate){
            throw new NotFoundException('نام کاربری یا رمز عبور اشتباه است')
        }
        
        return validate
    }

 

    async singIn(authCredentialDto:AuthCredentialDto){
        const result=await this.userRepository.validateCredentials(authCredentialDto)
    }
}
