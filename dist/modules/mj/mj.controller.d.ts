import { MjService } from './mj.service';
import { MjDrawDto } from './dto/mjDraw.dto';
import { Request } from 'express';
import { MjEnlargeImgDto } from './dto/mjEnlargeImg.dto';
import { MjTransformImgDto } from './dto/mjTransform.dto';
export declare class MjController {
    private readonly mjService;
    constructor(mjService: MjService);
    draw(body: MjDrawDto, req: Request): Promise<unknown>;
    upscaleSingleImg(body: MjEnlargeImgDto, req: Request): Promise<unknown>;
    variationSingleImg(body: MjTransformImgDto, req: Request): Promise<unknown>;
}
