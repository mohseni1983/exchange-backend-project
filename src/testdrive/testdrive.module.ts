import { Module } from '@nestjs/common';
import { TestdriveService } from './testdrive.service';
import { TestdriveController } from './testdrive.controller';
import { ConfigModule } from 'src/config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sample } from './sample.entity';
//import { ConfigService } from 'src/config/config.service';

@Module({
  providers: [TestdriveService],
  controllers: [TestdriveController],
  imports:[TypeOrmModule.forFeature([Sample])]
})
export class TestdriveModule {}
