import { AppCatsEntity } from './appCats.entity';
import { Repository } from 'typeorm';
import { CreateCatsDto } from './dto/createCats.dto';
import { DeleteCatsDto } from './dto/deleteCats.dto';
import { UpdateCatsDto } from './dto/updateCats.dto';
import { QuerCatsDto } from './dto/queryCats.dto';
import { CreateAppDto } from './dto/createApp.dto';
import { UpdateAppDto } from './dto/updateApp.dto';
import { DeleteAppDto } from './dto/deleteApp.dto';
import { QuerAppDto } from './dto/queryApp.dto';
import { AppEntity } from './app.entity';
export declare class AppService {
    private readonly appCatsEntity;
    private readonly appEntity;
    constructor(appCatsEntity: Repository<AppCatsEntity>, appEntity: Repository<AppEntity>);
    createAppCat(body: CreateCatsDto): Promise<CreateCatsDto & AppCatsEntity>;
    delAppCat(body: DeleteCatsDto): Promise<string>;
    updateAppCats(body: UpdateCatsDto): Promise<string>;
    appCatsList(query: QuerCatsDto): Promise<{
        rows: AppCatsEntity[];
        count: number;
    }>;
    appList(query: QuerAppDto): Promise<{
        rows: AppEntity[];
        count: number;
    }>;
    createApp(body: CreateAppDto): Promise<CreateAppDto & AppEntity>;
    updateApp(body: UpdateAppDto): Promise<string>;
    delApp(body: DeleteAppDto): Promise<string>;
}
