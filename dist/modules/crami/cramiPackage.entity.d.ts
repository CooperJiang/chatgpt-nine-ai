import { BaseEntity } from 'src/common/entity/baseEntity';
export declare class CramiPackageEntity extends BaseEntity {
    name: string;
    des: string;
    coverImg: string;
    price: number;
    order: number;
    status: number;
    days: number;
    balance: number;
    usesLeft: number;
    paintCount: number;
    extraReward: number;
    extraBalance: number;
    extraUsesLeft: number;
    extraPaintCount: number;
}
