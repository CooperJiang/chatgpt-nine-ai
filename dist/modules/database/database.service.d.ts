import { OnModuleInit } from '@nestjs/common';
import { Connection } from 'typeorm';
interface UserInfo {
    username: string;
    password: string;
    status: number;
    email: string;
    sex: number;
    role: string;
}
export declare class DatabaseService implements OnModuleInit {
    private connection;
    constructor(connection: Connection);
    onModuleInit(): Promise<void>;
    checkSuperAdmin(): Promise<void>;
    createDefaultUser(userInfo: UserInfo): Promise<void>;
    checkSiteBaseConfig(): Promise<void>;
    createBaseSiteConfig(): Promise<void>;
}
export {};
