import { BaseEntity } from 'src/common/entity/baseEntity';
export declare class AppEntity extends BaseEntity {
    name: string;
    catId: number;
    des: string;
    preset: string;
    coverImg: string;
    order: number;
    status: number;
}
