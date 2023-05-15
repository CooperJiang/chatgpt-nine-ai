import { StatisticService } from './statistic.service';
import { QueryStatisticDto } from './dto/queryStatisticDto.dto';
export declare class StatisticController {
    private readonly statisticService;
    constructor(statisticService: StatisticService);
    getBaseStatistic(): Promise<{
        userCount: number;
        newUserCount: number;
        chatCount: number;
        newChatCount: number;
        drawCount: number;
        newDrawCount: number;
    }>;
    getChatStatistic(params: QueryStatisticDto): Promise<{
        date: string[];
        chat: any[];
        draw: any[];
    }>;
    getBaiduStatistics(params: QueryStatisticDto): Promise<{
        date: string;
        count: number;
    }[]>;
}
