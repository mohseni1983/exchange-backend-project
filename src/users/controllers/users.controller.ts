import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../models/user.entity';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){

    }

    @Post('/signup')
    async singUpUser(@Body() createUserDto:CreateUserDto):Promise<User>{
        return this.userService.singUpUser(createUserDto)
    }
}
