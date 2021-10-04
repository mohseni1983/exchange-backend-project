import { Body, Controller, Post } from '@nestjs/common';
import { PodRequestDto } from '../dto/pod-request.dto';
import { PodService } from '../services/pod.service';

@Controller('pod')
export class PodController {
    constructor(private podService:PodService){}

    @Post('request')
    async  createRequest(@Body() podRequestDto:PodRequestDto):Promise<any>{
        return this.podService.createPodRequest(podRequestDto)
    }
}
