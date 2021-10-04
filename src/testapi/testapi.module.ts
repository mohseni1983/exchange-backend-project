import { Module } from '@nestjs/common';
import { TestapiController } from './testapi.controller';
import { APP_GUARD } from "@nestjs/core";
import { JwtGuard } from "../auth/guard/jwt.guard";

@Module({
  controllers: [TestapiController],

})
export class TestapiModule {}
