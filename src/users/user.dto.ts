import { ApiProperty} from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDTO {
    
    @ApiProperty({
        type: String
    })
    @IsNotEmpty()
    readonly firstName: string;

    @ApiProperty()
    readonly lastName: string;

    @ApiProperty()
    @IsEmail()
    readonly emailId: string;

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(5)
    readonly password: string;

    @ApiProperty()
    readonly mobileNumber: string;

    @ApiProperty()
    readonly userName: string;
}

export class UpdateUserDTO {
    
    @ApiProperty()
    readonly isEmailVerified: boolean;

    @ApiProperty()
    readonly isMobileVerified: boolean;

    @ApiProperty()
    readonly isTermsAccepted: boolean;

    @ApiProperty()
    readonly aadharNumber: number;

    @ApiProperty()
    readonly isAadharVerified: boolean;

    @ApiProperty()
    readonly profilePictureURL: string;

    @ApiProperty()
    readonly description: string;

    @ApiProperty()
    readonly isDriver: boolean;

    @ApiProperty()
    readonly driverId: string;

    @ApiProperty()
    readonly isRegistered: boolean;
}