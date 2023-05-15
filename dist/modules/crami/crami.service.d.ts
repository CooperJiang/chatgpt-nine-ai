import { CramiEntity } from './crami.entity';
import { Repository } from 'typeorm';
import { CramiPackageEntity } from './cramiPackage.entity';
import { CreatePackageDto } from './dto/createPackage.dto';
import { CreatCramiDto } from './dto/createCrami.dto';
import { Request } from 'express';
import { UseCramiDto } from './dto/useCrami.dto';
import { UserEntity } from '../user/user.entity';
import { UserBalanceService } from '../userBalance/userBalance.service';
import { QuerAllPackageDto } from './dto/queryAllPackage.dto';
import { DeletePackageDto } from './dto/deletePackage.dto';
import { QuerAllCramiDto } from './dto/queryAllCrami.dto';
import { BatchDelCramiDto } from './dto/batchDelCrami.dto';
export declare class CramiService {
    private readonly cramiEntity;
    private readonly cramiPackageEntity;
    private readonly userEntity;
    private readonly userBalanceService;
    constructor(cramiEntity: Repository<CramiEntity>, cramiPackageEntity: Repository<CramiPackageEntity>, userEntity: Repository<UserEntity>, userBalanceService: UserBalanceService);
    queryOnePackage(id: any): Promise<CramiPackageEntity>;
    queryAllPackage(query: QuerAllPackageDto): Promise<{
        rows: CramiPackageEntity[];
        count: number;
    }>;
    createPackage(body: CreatePackageDto): Promise<CreatePackageDto & CramiPackageEntity>;
    updatePackage(body: any): Promise<string>;
    delPackage(body: DeletePackageDto): Promise<import("typeorm").DeleteResult>;
    createCrami(body: CreatCramiDto): Promise<any[]>;
    generateCrami(cramiInfo: any, count: number): Promise<any[]>;
    useCrami(req: Request, body: UseCramiDto): Promise<string>;
    queryAllCrami(params: QuerAllCramiDto, req: Request): Promise<{
        rows: CramiEntity[];
        count: number;
    }>;
    delCrami(id: any): Promise<import("typeorm").DeleteResult>;
    batchDelCrami(body: BatchDelCramiDto): Promise<string>;
}
