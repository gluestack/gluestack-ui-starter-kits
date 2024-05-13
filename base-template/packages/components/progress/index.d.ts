import React from 'react';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
export declare const UIProgress: import("@gluestack-ui/progress/lib/typescript/types").IProgressComponentType<import("react-native").ViewProps & {
    context?: any;
} & React.RefAttributes<unknown>, import("react-native").ViewProps>;
declare const progressStyle: import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
} | ({
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
} & {
    size: {
        xs: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        sm: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        md: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        lg: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        xl: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        '2xl': import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
}), undefined, "bg-background-300 rounded-full w-full", import("tailwind-variants/dist/config").TVConfig<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, {
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}>, {
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, undefined, "bg-background-300 rounded-full w-full", import("tailwind-variants/dist/config").TVConfig<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, {
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}>, unknown, unknown, undefined>>;
declare const progressFilledTrackStyle: import("@gluestack-ui/nativewind-utils/types").TVReturnType<({} | {} | {}) & {
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, undefined, "bg-primary-500 rounded-full", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "bg-primary-500 rounded-full", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
type IProgressProps = VariantProps<typeof progressStyle> & React.ComponentProps<typeof UIProgress>;
type IProgressFilledTrackProps = VariantProps<typeof progressFilledTrackStyle> & React.ComponentProps<typeof UIProgress.FilledTrack>;
export declare const Progress: React.ForwardRefExoticComponent<Omit<IProgressProps, "ref"> & React.RefAttributes<unknown>>;
export declare const ProgressFilledTrack: React.ForwardRefExoticComponent<Omit<IProgressFilledTrackProps, "ref"> & React.RefAttributes<unknown>>;
export {};
