import { MailerService as MService, ISendMailOptions } from '@nestjs-modules/mailer';
export declare class MailerService {
    private mailerService;
    constructor(mailerService: MService);
    sendMail(options: ISendMailOptions): Promise<void>;
}
