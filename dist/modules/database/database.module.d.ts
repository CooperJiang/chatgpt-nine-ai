import { OnModuleInit } from '@nestjs/common';
import { ConfigService } from 'nestjs-config';
import { Connection } from 'typeorm';
export declare class DatabaseModule implements OnModuleInit {
    private readonly connection;
    private readonly config;
    constructor(connection: Connection, config: ConfigService);
    private readonly logger;
    onModuleInit(): void;
}
