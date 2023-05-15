import { BaseEntity } from 'src/common/entity/baseEntity';
export declare class AccountLogEntity extends BaseEntity {
    userId: number;
    rechargeType: number;
    usesLeft: number;
    paintCount: number;
    balance: number;
    uid: string;
    extent: string;
}
