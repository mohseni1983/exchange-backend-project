import { Injectable } from '@nestjs/common';
import {BinanceApiClient} from 'binance-api-client'

const binance=new BinanceApiClient()
@Injectable()
export class BinanceService {
    constructor(){
        
    }

}
