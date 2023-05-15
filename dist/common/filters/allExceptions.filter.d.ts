import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class AllExceptionsFilter<T> implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
