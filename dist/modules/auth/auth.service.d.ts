import { VerificationService } from './../verification/verification.service';
import { VerifyCodeDto } from './../verification/dto/verifyCode.dto';
import { UserLoginDto } from './dto/authLogin.dto';
import { UserEntity } from './../user/user.entity';
import { Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { UserRegisterDto } from './dto/authRegister.dto';
import { MailerService } from '../mailer/mailer.service';
import { UserBalanceService } from '../userBalance/userBalance.service';
import { UpdatePasswordDto } from './dto/updatePassword.dto';
import { ConfigEntity } from '../globalConfig/config.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private userService;
    private jwtService;
    private mailerService;
    private readonly verificationService;
    private readonly userBalanceService;
    private readonly configEntity;
    constructor(userService: UserService, jwtService: JwtService, mailerService: MailerService, verificationService: VerificationService, userBalanceService: UserBalanceService, configEntity: Repository<ConfigEntity>);
    register(body: UserRegisterDto, req: Request): Promise<{
        username: string;
        email: string;
    }>;
    login(user: UserLoginDto, req: Request): Promise<string>;
    getInfo(req: Request): Promise<{
        userInfo: UserEntity;
        userBalance: import("../userBalance/balance.entity").BalanceEntity;
    }>;
    activateAccount(params: VerifyCodeDto, res: Response): Promise<void>;
    updatePassword(req: Request, body: UpdatePasswordDto): Promise<string>;
}
