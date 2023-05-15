import { UserEntity } from '../user/user.entity';
import { Repository } from 'typeorm';
import { ChatLogEntity } from '../chatLog/chatLog.entity';
import { ConfigEntity } from '../globalConfig/config.entity';
export declare class StatisticService {
    private readonly userEntity;
    private readonly chatLogEntity;
    private readonly configEntity;
    constructor(userEntity: Repository<UserEntity>, chatLogEntity: Repository<ChatLogEntity>, configEntity: Repository<ConfigEntity>);
    getBaseStatistic(): Promise<{
        userCount: number;
        newUserCount: number;
        chatCount: number;
        newChatCount: number;
        drawCount: number;
        newDrawCount: number;
    }>;
    getChatStatistic({ days }: {
        days?: number;
    }): Promise<{
        date: string[];
        chat: any[];
        draw: any[];
    }>;
    getBaiduVisit({ days }: {
        days?: number;
    }): Promise<{
        date: string;
        count: number;
    }[]>;
    countUsers(): Promise<number>;
    countNewUsersToday(): Promise<number>;
    countChats(): Promise<number>;
    countNewChatsToday(): Promise<number>;
    countDraws(): Promise<number>;
    countNewDrawsToday(): Promise<number>;
    countChatsByTimeRange(days: number): Promise<{
        date: string;
        count: number;
    }[]>;
    countDrawsByTimeRange(days: number): Promise<{
        date: string;
        count: number;
    }[]>;
    getBaiduStatistics(days: any): Promise<{
        date: string;
        count: number;
    }[]>;
}
