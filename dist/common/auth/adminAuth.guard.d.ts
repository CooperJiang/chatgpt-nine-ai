import { ExecutionContext } from '@nestjs/common';
import { JwtAuthGuard } from './jwtAuth.guard';
export declare class AdminAuthGuard extends JwtAuthGuard {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
