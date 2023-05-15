import { ChatgptService } from './chatgpt.service';
import { ChatProcessDto } from './dto/chatProcess.dto';
import { Request, Response } from 'express';
import { ChatDrawDto } from './dto/chatDraw.dto';
import { AddKeyDto } from './dto/addKey.dto';
import { GetKeyListDto } from './dto/getKeyList.dto';
import { UpdateKeyDto } from './dto/updateKey.dto';
import { AddWhiteUserDto } from './dto/addWhiteUser.dto';
import { GetWhiteUserListDto } from './dto/getWhiteUserList.dto';
import { UpdateWhiteUserDto } from './dto/updateWhiteUser.dto';
export declare class ChatgptController {
    private readonly chatgptService;
    constructor(chatgptService: ChatgptService);
    chatProcess(body: ChatProcessDto, req: Request, res: Response): Promise<boolean>;
    draw(body: ChatDrawDto, req: Request): Promise<any[]>;
    getConfig(): Promise<{
        apiModel: string;
        reverseProxy: string;
        socksProxy: string;
        httpsProxy: string;
        balance: any;
    }>;
    getKeyDetail(key: string): Promise<number>;
    getKeyList(params: GetKeyListDto, req: Request): Promise<{
        rows: import("./gptkeys.entity").GptKeysEntity[];
        count: number;
    }>;
    getGptModelList(key: string): Promise<string[]>;
    addKey(body: AddKeyDto): Promise<AddKeyDto & import("./gptkeys.entity").GptKeysEntity>;
    updateKey(body: UpdateKeyDto): Promise<string>;
    addWhiteUser(body: AddWhiteUserDto): Promise<AddWhiteUserDto & import("./whiteList.entity").WhiteListEntity>;
    updateWhiteUser(body: UpdateWhiteUserDto): Promise<string>;
    getWhiteListUser(query: GetWhiteUserListDto, req: Request): Promise<{
        rows: import("./whiteList.entity").WhiteListEntity[];
        count: number;
    }>;
}
