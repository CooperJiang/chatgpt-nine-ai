import { RedisDto } from './dto/redis.dto';
import { RedisCacheService } from './redisCache.service';
export declare class RedisCacheController {
    private readonly redisCacheService;
    constructor(redisCacheService: RedisCacheService);
    set(body: RedisDto): Promise<string>;
    get(body: RedisDto): Promise<string>;
}
