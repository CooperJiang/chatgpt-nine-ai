import { SetConfigDto } from './dto/setConfig.dto';
import { GlobalConfigService } from './globalConfig.service';
import { QueryConfigDto } from './dto/queryConfig.dto';
import { Request } from 'express';
export declare class GlobalConfigController {
    private readonly globalConfigService;
    constructor(globalConfigService: GlobalConfigService);
    queryAllConfig(req: Request): Promise<{}>;
    queryFrontConfig(): Promise<{}>;
    queryGptKeys(req: Request): Promise<import("./config.entity").ConfigEntity[]>;
    setGptKeys(body: any): Promise<string>;
    queryConfig(body: QueryConfigDto, req: Request): Promise<{}>;
    setConfig(body: SetConfigDto): Promise<string>;
}
