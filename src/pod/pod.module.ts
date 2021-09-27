import { Module } from '@nestjs/common';
import { PodService } from './pod.service';
import { PodController } from './pod.controller';

@Module({
  providers: [PodService],
  controllers: [PodController],
  exports:[PodService]
})
export class PodModule {}
