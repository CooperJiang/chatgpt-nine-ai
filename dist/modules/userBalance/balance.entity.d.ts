import { BaseEntity } from 'src/common/entity/baseEntity';
export declare class BalanceEntity extends BaseEntity {
    userId: number;
    balance: number;
    usesLeft: number;
    paintCount: number;
    useTokens: number;
    useChats: number;
    usePaints: number;
}
