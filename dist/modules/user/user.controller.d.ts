import { UserService } from './user.service';
import { UpdateUserDto } from './dto/updateUser.dto';
import { Request } from 'express';
import { UserRechargeDto } from './dto/userRecharge.dto';
import { QueryAllUserDto } from './dto/queryAllUser.dto';
import { QueryOneUserDto } from './dto/queryOne.dto';
import { UpdateUserStatusDto } from './dto/updateUserStatus.dto';
import { ResetUserPassDto } from './dto/resetUserPass.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    update(body: UpdateUserDto, req: Request): Promise<string>;
    genInviteCode(req: Request): Promise<string>;
    getInviteRecord(req: Request): Promise<import("./user.entity").UserEntity[]>;
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
        rows: import("./user.entity").UserEntity[];
        count: number;
    }>;
    queryOne(params: QueryOneUserDto): Promise<import("./user.entity").UserEntity>;
    updateStatus(body: UpdateUserStatusDto): Promise<string>;
    resetUserPass(body: ResetUserPassDto): Promise<string>;
}
