import { OnModuleInit } from '@nestjs/common';
import { UploadService } from '../upload/upload.service';
import { StableDrawDto } from './dto/chatDraw.dto';
export declare class DrawService implements OnModuleInit {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    private apiHost;
    private apiKey;
    private Authorization;
    onModuleInit(): Promise<void>;
    getEngines(): Promise<any>;
    drawTextToImage(body: StableDrawDto): Promise<any[]>;
}
