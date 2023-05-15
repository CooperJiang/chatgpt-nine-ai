import { ExecutionContext } from '@nestjs/common';
import { JwtAuthGuard } from './jwtAuth.guard';
export declare class SuperAuthGuard extends JwtAuthGuard {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
