export interface KeyItem {
    id: number;
    key: string;
    weight: number;
    model: string;
}
export declare function selectKeyWithWeight(data: KeyItem[]): KeyItem | undefined;
