import { OnModuleInit } from '@nestjs/common';
import { SetConfigDto } from './dto/setConfig.dto';
import { ConfigEntity } from './config.entity';
import { Repository } from 'typeorm';
import { QueryConfigDto } from './dto/queryConfig.dto';
import { Request } from 'express';
export declare class GlobalConfigService implements OnModuleInit {
    private readonly configEntity;
    constructor(configEntity: Repository<ConfigEntity>);
    private globalConfigs;
    onModuleInit(): Promise<void>;
    getConfigs(configKey: string[]): Promise<any>;
    initGetAllConfig(): Promise<void>;
    queryAllConfig(req: Request): Promise<{}>;
    queryFrontConfig(): Promise<{}>;
    queryGptKeys(req: Request): Promise<ConfigEntity[]>;
    setGptKeys(body: any): Promise<string>;
    queryConfig(body: QueryConfigDto, req: Request): Promise<{}>;
    setConfig(body: SetConfigDto): Promise<string>;
    createOrUpdate(setting: any): Promise<void>;
}
