import { ExportExcelChatlogDto } from './dto/exportExcelChatlog.dto';
import { ChatLogEntity } from './chatLog.entity';
import { Repository } from 'typeorm';
import { Request, Response } from 'express';
import { QuerAllDrawLogDto } from './dto/queryAllDrawLog.dto';
import { QuerAllChatLogDto } from './dto/queryAllChatLog.dto';
import { recDrawImgDto } from './dto/recDrawImg.dto';
import { UserEntity } from '../user/user.entity';
import { QuerMyChatLogDto } from './dto/queryMyChatLog.dto';
export declare class ChatLogService {
    private readonly chatLogEntity;
    private readonly userEntity;
    constructor(chatLogEntity: Repository<ChatLogEntity>, userEntity: Repository<UserEntity>);
    saveChatLog(logInfo: any): Promise<any>;
    querDrawLog(req: Request, query: QuerMyChatLogDto): Promise<ChatLogEntity[]>;
    querAllDrawLog(params: QuerAllDrawLogDto): Promise<{
        rows: ChatLogEntity[];
        count: number;
    }>;
    recDrawImg(body: recDrawImgDto): Promise<string>;
    exportExcel(body: ExportExcelChatlogDto, res: Response): Promise<void>;
    querAllChatLog(params: QuerAllChatLogDto, req: Request): Promise<{
        rows: ChatLogEntity[];
        count: number;
    }>;
}
