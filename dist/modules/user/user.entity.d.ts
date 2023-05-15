import { BaseEntity } from 'src/common/entity/baseEntity';
export declare class UserEntity extends BaseEntity {
    username: string;
    password: string;
    status: number;
    sex: number;
    email: string;
    avatar: string;
    sign: string;
    registerIp: string;
    lastLoginIp: string;
    inviteCode: string;
    invitedBy: string;
    role: string;
}
