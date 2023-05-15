import { CramiService } from './crami.service';
import { CreatePackageDto } from './dto/createPackage.dto';
import { UpdatePackageDto } from './dto/updatePackage.dto';
import { CreatCramiDto } from './dto/createCrami.dto';
import { Request } from 'express';
import { UseCramiDto } from './dto/useCrami.dto';
import { QuerAllPackageDto } from './dto/queryAllPackage.dto';
import { DeletePackageDto } from './dto/deletePackage.dto';
import { QuerAllCramiDto } from './dto/queryAllCrami.dto';
import { BatchDelCramiDto } from './dto/batchDelCrami.dto';
export declare class CramiController {
    private readonly cramiService;
    constructor(cramiService: CramiService);
    queryOnePackage(id: number): Promise<import("./cramiPackage.entity").CramiPackageEntity>;
    queryAllPackage(query: QuerAllPackageDto): Promise<{
        rows: import("./cramiPackage.entity").CramiPackageEntity[];
        count: number;
    }>;
    createPackage(body: CreatePackageDto): Promise<CreatePackageDto & import("./cramiPackage.entity").CramiPackageEntity>;
    updatePackage(body: UpdatePackageDto): Promise<string>;
    delPackage(body: DeletePackageDto): Promise<import("typeorm").DeleteResult>;
    createCrami(body: CreatCramiDto): Promise<any[]>;
    useCrami(req: Request, body: UseCramiDto): Promise<string>;
    queryAllCrami(params: QuerAllCramiDto, req: Request): Promise<{
        rows: import("./crami.entity").CramiEntity[];
        count: number;
    }>;
    delCrami(id: number): Promise<import("typeorm").DeleteResult>;
    batchDelCrami(body: BatchDelCramiDto): Promise<string>;
}
