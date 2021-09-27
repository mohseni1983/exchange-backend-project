import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){

    }

    @Post('/signup')
    async singUpUser(@Body() createUserDto:CreateUserDto):Promise<User>{
        return this.userService.singUpUser(createUserDto)
    }
}
