import { UserStatusEnum } from './../../common/constants/user.constant';
import { MailerService } from '@nestjs-modules/mailer';
import { VerificationService } from './../verification/verification.service';
import { Repository, Connection, UpdateResult } from 'typeorm';
import { UserRegisterDto } from '../auth/dto/authRegister.dto';
import { UserEntity } from './user.entity';
import { UserLoginDto } from '../auth/dto/authLogin.dto';
import { UserBalanceService } from '../userBalance/userBalance.service';
import { UpdateUserDto } from './dto/updateUser.dto';
import { Request } from 'express';
import { UserRechargeDto } from './dto/userRecharge.dto';
import { QueryAllUserDto } from './dto/queryAllUser.dto';
import { UpdateUserStatusDto } from './dto/updateUserStatus.dto';
import { ResetUserPassDto } from './dto/resetUserPass.dto';
import { ConfigEntity } from '../globalConfig/config.entity';
export declare class UserService {
    private readonly userEntity;
    private readonly connection;
    private readonly verificationService;
    private readonly mailerService;
    private readonly userBalanceService;
    private readonly configEntity;
    constructor(userEntity: Repository<UserEntity>, connection: Connection, verificationService: VerificationService, mailerService: MailerService, userBalanceService: UserBalanceService, configEntity: Repository<ConfigEntity>);
    createUserAndVerifycation(user: UserEntity | UserRegisterDto, req: Request): Promise<UserEntity>;
    verifyUserCredentials(user: UserLoginDto): Promise<UserEntity>;
    verifyUserPassword(userId: any, password: any): Promise<any>;
    updateUserStatus(id: number, status: UserStatusEnum): Promise<boolean>;
    getUserStatus(id: number): Promise<number>;
    queryUserInfoById(id: number): Promise<UserEntity>;
    queryOneUserInfo(userId: number): Promise<UserEntity>;
    checkUserStatus(userId: number): Promise<void>;
    getUserInfo(userId: number): Promise<{
        userInfo: UserEntity;
        userBalance: import("../userBalance/balance.entity").BalanceEntity;
    }>;
    updateInfo(body: UpdateUserDto, req: Request): Promise<string>;
    updateUserPassword(userId: number, password: string): Promise<void>;
    genInviteCode(req: Request): Promise<string>;
    getInviteRecord(req: any): Promise<UserEntity[]>;
    qureyUserInfoByInviteCode(inviteCode: string): Promise<UserEntity>;
    userRecharge(body: UserRechargeDto): Promise<{
        userId: any;
        rechargeType: any;
        usesLeft: any;
        paintCount: any;
        balance: any;
        extent: string;
        uid: string;
    } & import("../userBalance/accountLog.entity").AccountLogEntity>;
    queryAll(query: QueryAllUserDto, req: Request): Promise<{
        rows: UserEntity[];
        count: number;
    }>;
    queryOne({ id }: {
        id: any;
    }): Promise<UserEntity>;
    updateStatus(body: UpdateUserStatusDto): Promise<string>;
    resetUserPass(body: ResetUserPassDto): Promise<string>;
    savaLoginIp(userId: number, ip: string): Promise<UpdateResult>;
}
