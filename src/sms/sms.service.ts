import { HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { OtpSms } from './otp.entity';
//const kv=new kavenegar()


const url= 'https://api.kavenegar.com/v1/5A495742317837564762424F4247734C5967433675513934414F6F417834/verify/'
const apiKey='5A495742317837564762424F4247734C5967433675513934414F6F4178346A53'
@Injectable()
export class SmsService {
    async sendOtpCode(mobile:string):Promise<OtpSms>{
        const randomCode=Math. floor(1000 + Math. random() * 9000)
        const url  = `https://api.kavenegar.com/v1/${apiKey}/verify/lookup.json?receptor=${mobile}&token=${randomCode}&template=siteVerifyCode`;
        const result= await axios.get(url)
        if(result.status!==200){
            throw new HttpException(result.data,404)
        }
        const otp=new OtpSms()
        otp.mobile=mobile
        otp.code=randomCode.toString()
        await otp.save()
        return otp
    }
}
