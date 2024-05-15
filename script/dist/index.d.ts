#!/usr/bin/env node
export interface Config {
    config: Array<{
        source: string;
        target: string;
    }>;
}
