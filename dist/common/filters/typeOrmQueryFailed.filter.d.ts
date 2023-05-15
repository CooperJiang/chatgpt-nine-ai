import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
export declare class TypeOrmQueryFailedFilter implements ExceptionFilter {
    catch(exception: QueryFailedError, host: ArgumentsHost): void;
}
