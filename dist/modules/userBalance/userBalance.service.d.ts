import { BalanceEntity } from './balance.entity';
import { Repository } from 'typeorm';
import { AccountLogEntity } from './accountLog.entity';
import { Request } from 'express';
import { ConfigEntity } from '../globalConfig/config.entity';
export declare class UserBalanceService {
    private readonly balanceEntity;
    private readonly accountLogEntity;
    private readonly configEntity;
    constructor(balanceEntity: Repository<BalanceEntity>, accountLogEntity: Repository<AccountLogEntity>, configEntity: Repository<ConfigEntity>);
    addBalanceToNewUser(userId: number, invitedId: number): Promise<void>;
    validateBalance(userId: any, deductionType: any, amount: any): Promise<void>;
    deductFromBalance(userId: any, deductionType: any, amount: any, UseAmount?: number): Promise<void>;
    queryUserBalance(userId: any): Promise<BalanceEntity>;
    saveRecordRechargeLog({ userId, rechargeType, usesLeft, paintCount, balance, extent }: {
        userId: any;
        rechargeType: any;
        usesLeft: any;
        paintCount: any;
        balance: any;
        extent?: string;
    }): Promise<{
        userId: any;
        rechargeType: any;
        usesLeft: any;
        paintCount: any;
        balance: any;
        extent: string;
        uid: string;
    } & AccountLogEntity>;
    addBalanceToUser(userId: any, money?: {
        usesLeft: number;
        paintCount: number;
        balance: number;
    }): Promise<void>;
    getRechargeLog(req: Request, params: any): Promise<{
        rows: AccountLogEntity[];
        count: number;
    }>;
    queryUserBalanceByIds(ids: number[]): Promise<BalanceEntity[]>;
}
