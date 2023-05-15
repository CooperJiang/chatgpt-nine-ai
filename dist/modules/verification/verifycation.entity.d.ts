import { BaseEntity } from 'src/common/entity/baseEntity';
export declare class VerifycationEntity extends BaseEntity {
    userId: number;
    type: number;
    code: number;
    expiresAt: Date;
    email: string;
    used: number;
}
