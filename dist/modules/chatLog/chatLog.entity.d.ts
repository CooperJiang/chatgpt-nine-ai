import { BaseEntity } from 'src/common/entity/baseEntity';
export declare class ChatLogEntity extends BaseEntity {
    userId: number;
    type: string;
    prompt: string;
    answer: string;
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
    model: string;
    curIp: string;
    rec: number;
    extend: string;
    message_id: string;
    orderId: number;
    action: string;
    group: number;
    upscaleId: string;
    variationId: string;
    fileInfo: string;
}
