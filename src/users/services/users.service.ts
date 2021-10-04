import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../models/user.entity';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository:UserRepository
        ){}

    async singUpUser(createUserDto:CreateUserDto):Promise<User>{
        return await this.userRepository.signUp(createUserDto)
    }
    
}
