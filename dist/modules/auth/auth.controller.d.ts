import { VerifyCodeDto } from './../verification/dto/verifyCode.dto';
import { UserLoginDto } from './dto/authLogin.dto';
import { AuthService } from './auth.service';
import { UserRegisterDto } from './dto/authRegister.dto';
import { Request, Response } from 'express';
import { UpdatePasswordDto } from './dto/updatePassword.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: UserRegisterDto, req: Request): Promise<{
        username: string;
        email: string;
    }>;
    login(body: UserLoginDto, req: Request): Promise<string>;
    updatePassword(req: Request, body: UpdatePasswordDto): Promise<string>;
    getInfo(req: Request): Promise<{
        userInfo: import("../user/user.entity").UserEntity;
        userBalance: import("../userBalance/balance.entity").BalanceEntity;
    }>;
    activateAccount(parmas: VerifyCodeDto, res: Response): Promise<void>;
    registerSuccess(parmas: any): Promise<{
        username: any;
        id: any;
        email: any;
        teamName: any;
        registerSuccessEmailTitle: any;
        registerSuccessEmailTeamName: any;
        registerSuccessEmaileAppend: any;
    }>;
    registerError(parmas: any): Promise<{
        message: any;
        teamName: any;
        registerFailEmailTitle: any;
        registerFailEmailTeamName: any;
    }>;
}
