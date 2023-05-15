import { AppService } from './app.service';
import { CreateCatsDto } from './dto/createCats.dto';
import { UpdateCatsDto } from './dto/updateCats.dto';
import { DeleteCatsDto } from './dto/deleteCats.dto';
import { QuerCatsDto } from './dto/queryCats.dto';
import { CreateAppDto } from './dto/createApp.dto';
import { UpdateAppDto } from './dto/updateApp.dto';
import { DeleteAppDto } from './dto/deleteApp.dto';
import { QuerAppDto } from './dto/queryApp.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    appCatsList(query: QuerCatsDto): Promise<{
        rows: import("./appCats.entity").AppCatsEntity[];
        count: number;
    }>;
    createAppCat(body: CreateCatsDto): Promise<CreateCatsDto & import("./appCats.entity").AppCatsEntity>;
    updateAppCats(body: UpdateCatsDto): Promise<string>;
    delAppCat(body: DeleteCatsDto): Promise<string>;
    appList(query: QuerAppDto): Promise<{
        rows: import("./app.entity").AppEntity[];
        count: number;
    }>;
    createApp(body: CreateAppDto): Promise<CreateAppDto & import("./app.entity").AppEntity>;
    updateApp(body: UpdateAppDto): Promise<string>;
    delApp(body: DeleteAppDto): Promise<string>;
}
