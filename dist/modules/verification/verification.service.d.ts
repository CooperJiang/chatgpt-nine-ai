import { VerifyCodeDto } from './dto/verifyCode.dto';
import { Repository } from 'typeorm';
import { VerifycationEntity } from './verifycation.entity';
import { UserEntity } from './../user/user.entity';
import { VerificationEnum } from './../../common/constants/verification.constant';
export declare class VerificationService {
    private readonly verifycationEntity;
    constructor(verifycationEntity: Repository<VerifycationEntity>);
    createVerification(user: UserEntity, type: VerificationEnum, expir?: number): Promise<VerifycationEntity>;
    verifyCode({ code, id }: VerifyCodeDto): Promise<VerifycationEntity>;
}
