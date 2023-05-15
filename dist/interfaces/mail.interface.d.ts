export interface SendMailerOptions {
    to: string;
    subject: string;
    html?: string;
    content?: Record<string, unknown>;
}
