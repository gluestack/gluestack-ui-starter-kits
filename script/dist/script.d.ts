export interface EjectConfig {
    screens: string;
    components: string;
    paths: Record<string, string>;
}
export declare class EjectScript {
    config: EjectConfig;
    constructor(config: EjectConfig);
    copyComponents(): Promise<void>;
    copyScreens(): Promise<void>;
    updateTsConfig(): Promise<void>;
    run(): Promise<void>;
}
