import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ConfigModule } from 'src/config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { RoleReposioty } from './role.respository';

@Module({
  imports:[ConfigModule,TypeOrmModule.forFeature([UserRepository,RoleReposioty])],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
