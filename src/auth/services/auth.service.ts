import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialDto } from '../dto/auth-credentials.dto';
import { UserRepository } from '../../users/repositories/user.repository';
import { OtpSms } from 'src/sms/models/otp.entity';
import { SmsService } from 'src/sms/services/sms.service';
import { CheckOtpDto } from 'src/sms/dto/check-otp.dto';
import { User } from 'src/users/models/user.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository:UserRepository,
        private readonly smsService:SmsService,
        private  readonly jwtService:JwtService
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
        const validatedUser=await this.userRepository.validateCredentials(authCredentialDto)
        if(!validatedUser){
            throw new NotFoundException('نام کاربری یا رمز عبور اشتباه است')
        }
        const payload = {username:validatedUser.username,user_id:validatedUser.id,roles:validatedUser.roles,countries:validatedUser.countries}
        
        return await this.jwtService.signAsync(payload);
    }

 

    async singIn(authCredentialDto:AuthCredentialDto){
        const result=await this.userRepository.validateCredentials(authCredentialDto)
    }
}
