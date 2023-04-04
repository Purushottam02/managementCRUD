import { ApiProperty} from '@nestjs/swagger';
import {  IsNotEmpty, MinLength } from 'class-validator';

export class SignINDto {
    
    @ApiProperty({
        type: String
    })
    @IsNotEmpty()
    readonly userName: string;

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(5)
    readonly password: string;
}

