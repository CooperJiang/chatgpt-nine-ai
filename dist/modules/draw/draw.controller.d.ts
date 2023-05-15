import { DrawService } from './draw.service';
import { StableDrawDto } from './dto/chatDraw.dto';
export declare class DrawController {
    private readonly drawService;
    constructor(drawService: DrawService);
    getEngines(): Promise<any>;
    textToImage(body: StableDrawDto): Promise<any[]>;
}
