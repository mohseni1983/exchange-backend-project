import { Injectable } from "@nestjs/common";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { resolve } from "path";
import { ConfigService } from "src/config/services/config.service";

@Injectable()
export class PostgresTypeOrmConfigService implements TypeOrmOptionsFactory{

    constructor(private readonly configService:ConfigService){}

    // return postgress database connection strings
    createTypeOrmOptions():TypeOrmModuleOptions {
        const options:TypeOrmModuleOptions={
            type:'postgres',
            host:this.configService.get<string>('db_postgres.host'),
            port:this.configService.get<number>('db_postgres.port'),
            database:this.configService.get<string>('db_postgres.db'),
            username:this.configService.get<string>('db_postgres.user'),
            password:this.configService.get<string>('db_postgres.password'),
            synchronize:this.configService.get<boolean>('orm.sync'),
            entities:[
                __dirname + '/../**/**.entity{.ts,.js}',
                __dirname + '/../**/models/**.entity{.ts,.js}'
            ]
        }
        return options
    }
    
}