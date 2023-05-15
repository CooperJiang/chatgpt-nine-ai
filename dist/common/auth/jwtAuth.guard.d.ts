declare const JwtAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtAuthGuard extends JwtAuthGuard_base {
    constructor();
    canActivate(context: any): Promise<boolean>;
    private extractToken;
    private validateToken;
    handleRequest(err: any, user: any, info: any): any;
}
export {};
