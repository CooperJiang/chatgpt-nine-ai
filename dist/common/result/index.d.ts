export declare class Result<T> {
    code: number;
    data?: T;
    success: boolean;
    message?: string;
    constructor(code: number, success: boolean, data?: T, message?: string);
    static success<T>(data?: T, message?: string): Result<T>;
    static fail<T>(code: number, message?: string, data?: T): Result<T>;
}
