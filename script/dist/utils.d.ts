type ConfigInternal = Array<{
    source: string;
    target: string;
}>;
export declare function copyDirectoryFromSourceToTarget({ sourceDirectory, copyDestination, options, shouldTransform, depthLevel, }: {
    sourceDirectory: string;
    copyDestination: string;
    depthLevel?: number;
    options?: any;
    shouldTransform?: boolean;
}): Promise<void>;
export declare function copyDirectoriesFromSourceToTarget(configs: ConfigInternal, options?: any): Promise<void>;
export {};
