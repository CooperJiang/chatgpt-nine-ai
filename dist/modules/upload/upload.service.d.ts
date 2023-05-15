import { OnModuleInit } from '@nestjs/common';
import { GlobalConfigService } from '../globalConfig/globalConfig.service';
export declare class UploadService implements OnModuleInit {
    private readonly globalConfigService;
    constructor(globalConfigService: GlobalConfigService);
    private cos;
    onModuleInit(): Promise<void>;
    uploadFile({ filename, buffer, dir }: {
        filename: any;
        buffer: any;
        dir?: string;
    }): Promise<unknown>;
    uploadFileFromUrl({ filename, url, dir }: {
        filename: any;
        url: any;
        dir?: string;
    }): Promise<unknown>;
    getBufferFromUrl(url: any): Promise<any>;
    test(): Promise<void>;
}
