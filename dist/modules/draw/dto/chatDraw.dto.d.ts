export declare class TextPromptDto {
    readonly text: string;
    readonly weight: number;
}
export declare class StableDrawDto {
    engineId: string;
    text_prompts: TextPromptDto[];
    samples: number;
    width: number;
    height: number;
    cfg_scale: number;
    steps: number;
    style_preset: string;
    clip_guidance_preset: string;
}
