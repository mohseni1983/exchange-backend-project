import { BadGatewayException, HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';
import * as request from 'request'
import * as qs from 'qs'
import { PodRequestDto } from './dto/pod-request.dto';
import { json } from 'stream/consumers';
import { PodResponseDto } from './dto/pod-response.dto';
import { url } from 'inspector';

const token='3d149c1cf78f4b1082e91a2438e83257'
const podUser=20337697
const redirectUrl='https://barexshop.ir/callback3'
@Injectable()
export class PodService {

    async createPodRequest(podRequestDto:PodRequestDto):Promise<any>{
        const {amount,invoice} = podRequestDto
        const data = qs.stringify({
            scProductId: 34976,
            amount: amount,
            userId: podUser,
            billNumber: invoice,
            wallet: 'PODLAND_WALLET',
            redirectUrl: redirectUrl
          });
          const config = {
            method: 'post',
            url: 'https://core.pod.ir/nzh/doServiceCall',
            headers: { 
              '_token_': `${token}`, 
              '_token_issuer_': '1', 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : {
                'scProductId': 34976,
                'amount': `${amount}`,
                'userId': `${podUser}`,
                'billNumber': `${invoice}`,
                'wallet': 'PODLAND_WALLET',
                'redirectUrl': `${redirectUrl}`
            }
          };
          const result=await axios('https://api.pod.ir/srv/sc/nzh/doServiceCall',{
              data:data,
              headers:{ 
                '_token_': `${token}`, 
                '_token_issuer_': '1', 
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method:'post',

          },
         )
         let res=new PodResponseDto()
          if(result.status!==200 || result.data.hasError==true){
              res.code=result.data.errorCode 
              res.hasError=true
              res.message=result.data.message
          }else{
            res.code=-1 
            res.hasError=false
            res.message=`https://core.pod.ir/nzh/payAnyCreditInvoice?hash=${result.data.result}&gateway=PEP`
          }
            //throw new BadGatewayException(new PodResponseDto())
          return res
    }
    async verifyTranscation(invoice:number):Promise<any>{
        const result=await axios("https://api.pod.ir/srv/sc/nzh/doServiceCall",
        {
            headers:{ 
                '_token_': `${token}`, 
                '_token_issuer_': '1', 
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              data:qs.stringify({
                  scProductId:34977,
                  billNumber:invoice
              }),
              method:'post'
        }
        )

    }
}
