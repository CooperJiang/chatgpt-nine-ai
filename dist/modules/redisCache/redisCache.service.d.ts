import { OnModuleInit } from '@nestjs/common';
import { RedisClientType } from 'redis';
export declare class RedisCacheService implements OnModuleInit {
    private redistClient;
    constructor(redistClient: RedisClientType);
    onModuleInit(): Promise<void>;
    test(): number;
    get(body: any): Promise<string>;
    set(body: any): Promise<string>;
}
