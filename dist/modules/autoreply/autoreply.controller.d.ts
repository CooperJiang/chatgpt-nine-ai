import { AutoreplyService } from './autoreply.service';
import { QueryAutoReplyDto } from './dto/queryAutoReply.dto';
import { AddAutoReplyDto } from './dto/addAutoReply.dto';
import { UpdateAutpReplyDto } from './dto/updateAutoReply.dto';
import { DelAutoReplyDto } from './dto/delBadWords.dto';
export declare class AutoreplyController {
    private readonly autoreplyService;
    constructor(autoreplyService: AutoreplyService);
    queryAutoreply(query: QueryAutoReplyDto): Promise<{
        rows: import("./autoreplay.entity").AutoReplyEntity[];
        count: number;
    }>;
    addAutoreply(body: AddAutoReplyDto): Promise<string>;
    updateAutoreply(body: UpdateAutpReplyDto): Promise<string>;
    delAutoreply(body: DelAutoReplyDto): Promise<string>;
}
