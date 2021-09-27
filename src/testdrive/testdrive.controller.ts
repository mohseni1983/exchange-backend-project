import { Controller, Get } from '@nestjs/common';
import { TestdriveService } from './testdrive.service';

@Controller('testdrive')
export class TestdriveController {
    constructor(private testDriveService:TestdriveService){

    }

}
