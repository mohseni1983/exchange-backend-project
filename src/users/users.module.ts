import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { ConfigModule } from 'src/config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports:[ConfigModule,TypeOrmModule.forFeature([UserRepository])],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
