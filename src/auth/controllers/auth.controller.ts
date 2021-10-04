import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CheckOtpDto } from 'src/sms/dto/check-otp.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthCredentialDto } from '../dto/auth-credentials.dto';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Get('otp/:mobile')
    async sendOtpCode(@Param('mobile') mobile:string):Promise<any>{
        const otp=await this.authService.registerWithOtp(mobile)
        delete otp.code
        return otp
    }

    @Post('checkotp')
    async checkOtpCode(@Body() checkOtoCodeDto:CheckOtpDto):Promise<any>{
        return await this.authService.checkOtpCode(checkOtoCodeDto)
    }

    @Post('signup')
    async signUpUser(@Body() createUserDto:CreateUserDto):Promise<any>{
        const user=await this.authService.signUp(createUserDto)
        delete user.password
        return user
    }

    @Post('signin')
    async signIn (@Body() authCredentialDto:AuthCredentialDto):Promise<any> {
        const result=await this.authService.signIn(authCredentialDto)
        return result
        
    }


}
