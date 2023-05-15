import { Request } from 'express';
import { UserBalanceService } from './userBalance.service';
export declare class UserBalanceController {
    private userBalanceService;
    constructor(userBalanceService: UserBalanceService);
    getRechargeLog(req: Request, params: any): Promise<{
        rows: import("./accountLog.entity").AccountLogEntity[];
        count: number;
    }>;
}
