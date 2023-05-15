import { UploadService } from './../upload/upload.service';
import { UserService } from './../user/user.service';
import { ConfigService } from 'nestjs-config';
import { OnModuleInit } from '@nestjs/common';
import { ChatProcessDto } from './dto/chatProcess.dto';
import { Request, Response } from 'express';
import { UserBalanceService } from '../userBalance/userBalance.service';
import { ChatLogService } from '../chatLog/chatLog.service';
import { ChatDrawDto } from './dto/chatDraw.dto';
import { ConfigEntity } from '../globalConfig/config.entity';
import { Repository } from 'typeorm';
import { BadwordsService } from '../badwords/badwords.service';
import { AutoreplyService } from '../autoreply/autoreply.service';
import { GptKeysEntity } from './gptkeys.entity';
import { GlobalConfigService } from '../globalConfig/globalConfig.service';
import { AddKeyDto } from './dto/addKey.dto';
import { GetKeyListDto } from './dto/getKeyList.dto';
import { UpdateKeyDto } from './dto/updateKey.dto';
import { WhiteListEntity } from './whiteList.entity';
import { AddWhiteUserDto } from './dto/addWhiteUser.dto';
import { UserEntity } from '../user/user.entity';
import { UpdateWhiteUserDto } from './dto/updateWhiteUser.dto';
export declare class ChatgptService implements OnModuleInit {
    private readonly userEntity;
    private readonly gptKeysEntity;
    private readonly configEntity;
    private readonly whiteListEntity;
    private readonly configService;
    private readonly userBalanceService;
    private readonly chatLogService;
    private readonly userService;
    private readonly uploadService;
    private readonly badwordsService;
    private readonly autoreplyService;
    private readonly globalConfigService;
    constructor(userEntity: Repository<UserEntity>, gptKeysEntity: Repository<GptKeysEntity>, configEntity: Repository<ConfigEntity>, whiteListEntity: Repository<WhiteListEntity>, configService: ConfigService, userBalanceService: UserBalanceService, chatLogService: ChatLogService, userService: UserService, uploadService: UploadService, badwordsService: BadwordsService, autoreplyService: AutoreplyService, globalConfigService: GlobalConfigService);
    private api;
    private whiteListUser;
    private keyPool;
    onModuleInit(): Promise<void>;
    getRandomGptKeyDetail(type: any): Promise<import("@/common/utils").KeyItem>;
    getGptParams(userId: any, inputOpt: any): Promise<{
        options: any;
        key: any;
    }>;
    chatProcess(body: ChatProcessDto, req: Request, res: Response): Promise<boolean>;
    draw(body: ChatDrawDto, req: Request): Promise<any[]>;
    getBalance(): Promise<any>;
    chatConfig(): Promise<{
        apiModel: string;
        reverseProxy: string;
        socksProxy: string;
        httpsProxy: string;
        balance: any;
    }>;
    getModelAndKeyFromUser(userId: any): Promise<{
        model: any;
        key: any;
    }>;
    getGptModelList(key: string): Promise<string[]>;
    getKeyList(prams: GetKeyListDto, req: Request): Promise<{
        rows: GptKeysEntity[];
        count: number;
    }>;
    getKeyDetail(key: string): Promise<number>;
    addKey(body: AddKeyDto): Promise<AddKeyDto & GptKeysEntity>;
    updateKey(body: UpdateKeyDto): Promise<string>;
    getAllKeyList(): Promise<void>;
    getUserWhiteList(): Promise<void>;
    addWhiteUser(body: AddWhiteUserDto): Promise<AddWhiteUserDto & WhiteListEntity>;
    updateWhiteUser(body: UpdateWhiteUserDto): Promise<string>;
    getWhiteListUser(query: any, req: any): Promise<{
        rows: WhiteListEntity[];
        count: number;
    }>;
}
