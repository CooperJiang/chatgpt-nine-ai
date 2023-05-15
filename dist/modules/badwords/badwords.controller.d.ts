import { BadwordsService } from './badwords.service';
import { QueryBadWordsDto } from './dto/queryBadWords.dto';
import { UpdateBadWordsDto } from './dto/updateBadWords.dto';
import { DelBadWordsDto } from './dto/delBadWords.dto';
import { AddBadWordDto } from './dto/addBadWords.dto';
export declare class BadwordsController {
    private readonly badwordsService;
    constructor(badwordsService: BadwordsService);
    queryBadWords(query: QueryBadWordsDto): Promise<{
        rows: import("./badwords.entity").BadWordsEntity[];
        count: number;
    }>;
    delBadWords(body: DelBadWordsDto): Promise<string>;
    updateBadWords(body: UpdateBadWordsDto): Promise<string>;
    addBadWord(body: AddBadWordDto): Promise<string>;
}
