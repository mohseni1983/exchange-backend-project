import { Module } from '@nestjs/common';
import { PodService } from './services/pod.service';
import { PodController } from './controllers/pod.controller';

@Module({
  providers: [PodService],
  controllers: [PodController],
  exports:[PodService]
})
export class PodModule {}
