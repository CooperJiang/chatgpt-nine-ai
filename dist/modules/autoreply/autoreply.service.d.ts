import { OnModuleInit } from '@nestjs/common';
import { QueryAutoReplyDto } from './dto/queryAutoReply.dto';
import { AutoReplyEntity } from './autoreplay.entity';
import { Repository } from 'typeorm';
import { AddAutoReplyDto } from './dto/addAutoReply.dto';
import { UpdateAutpReplyDto } from './dto/updateAutoReply.dto';
import { DelAutoReplyDto } from './dto/delBadWords.dto';
export declare class AutoreplyService implements OnModuleInit {
    private readonly autoReplyEntity;
    private autoReplyKes;
    private autoReplyMap;
    private autoReplyFuzzyMatch;
    constructor(autoReplyEntity: Repository<AutoReplyEntity>);
    onModuleInit(): Promise<void>;
    loadAutoReplyList(): Promise<void>;
    checkAutoReply(prompt: string): Promise<any>;
    queryAutoreply(query: QueryAutoReplyDto): Promise<{
        rows: AutoReplyEntity[];
        count: number;
    }>;
    addAutoreply(body: AddAutoReplyDto): Promise<string>;
    updateAutoreply(body: UpdateAutpReplyDto): Promise<string>;
    delAutoreply(body: DelAutoReplyDto): Promise<string>;
}
