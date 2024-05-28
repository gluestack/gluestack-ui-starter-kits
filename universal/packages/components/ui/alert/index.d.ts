import React from 'react';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
export declare const UIAlert: import("@gluestack-ui/alert/lib/typescript/types").IAlertComponentType<import("react-native").ViewProps & {
    context?: any;
} & React.RefAttributes<unknown>, import("react-native").TextProps, Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const Alert: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & Omit<React.RefAttributes<import("react-native").ViewProps & {
    context?: any;
} & React.RefAttributes<unknown>> & import("react-native").ViewProps & {
    context?: any;
} & React.RefAttributes<unknown> & import("@gluestack-ui/alert/lib/typescript/types").InterfaceAlertProps, "context"> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
    action: {
        error: string;
        warning: string;
        success: string;
        info: string;
        muted: string;
    };
    variant: {
        solid: string;
        outline: string;
        accent: string;
    };
} | ({
    action: {
        error: string;
        warning: string;
        success: string;
        info: string;
        muted: string;
    };
    variant: {
        solid: string;
        outline: string;
        accent: string;
    };
} & {
    action: {
        error: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        warning: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        success: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        info: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        muted: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
    variant: {
        solid: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        outline: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        accent: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
}), undefined, "items-center p-3 rounded flex-row", import("tailwind-variants/dist/config").TVConfig<{
    action: {
        error: string;
        warning: string;
        success: string;
        info: string;
        muted: string;
    };
    variant: {
        solid: string;
        outline: string;
        accent: string;
    };
}, {
    action: {
        error: string;
        warning: string;
        success: string;
        info: string;
        muted: string;
    };
    variant: {
        solid: string;
        outline: string;
        accent: string;
    };
}>, {
    action: {
        error: string;
        warning: string;
        success: string;
        info: string;
        muted: string;
    };
    variant: {
        solid: string;
        outline: string;
        accent: string;
    };
}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
    action: {
        error: string;
        warning: string;
        success: string;
        info: string;
        muted: string;
    };
    variant: {
        solid: string;
        outline: string;
        accent: string;
    };
}, undefined, "items-center p-3 rounded flex-row", import("tailwind-variants/dist/config").TVConfig<{
    action: {
        error: string;
        warning: string;
        success: string;
        info: string;
        muted: string;
    };
    variant: {
        solid: string;
        outline: string;
        accent: string;
    };
}, {
    action: {
        error: string;
        warning: string;
        success: string;
        info: string;
        muted: string;
    };
    variant: {
        solid: string;
        outline: string;
        accent: string;
    };
}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
declare const AlertText: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & React.RefAttributes<import("react-native").TextProps> & import("react-native").TextProps & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
    isTruncated: {
        true: string;
    };
    bold: {
        true: string;
    };
    underline: {
        true: string;
    };
    strikeThrough: {
        true: string;
    };
    size: {
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
    };
    sub: {
        true: string;
    };
    italic: {
        true: string;
    };
    highlight: {
        true: string;
    };
} | ({
    isTruncated: {
        true: string;
    };
    bold: {
        true: string;
    };
    underline: {
        true: string;
    };
    strikeThrough: {
        true: string;
    };
    size: {
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
    };
    sub: {
        true: string;
    };
    italic: {
        true: string;
    };
    highlight: {
        true: string;
    };
} & {
    isTruncated: {
        true: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
    bold: {
        true: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
    underline: {
        true: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
    strikeThrough: {
        true: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
    size: {
        '2xs': import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
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
        '3xl': import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        '4xl': import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        '5xl': import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        '6xl': import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
    sub: {
        true: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
    italic: {
        true: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
    highlight: {
        true: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
}), undefined, "text-typography-700 flex-1 font-normal font-body", import("tailwind-variants/dist/config").TVConfig<{
    isTruncated: {
        true: string;
    };
    bold: {
        true: string;
    };
    underline: {
        true: string;
    };
    strikeThrough: {
        true: string;
    };
    size: {
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
    };
    sub: {
        true: string;
    };
    italic: {
        true: string;
    };
    highlight: {
        true: string;
    };
}, {
    isTruncated: {
        true: string;
    };
    bold: {
        true: string;
    };
    underline: {
        true: string;
    };
    strikeThrough: {
        true: string;
    };
    size: {
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
    };
    sub: {
        true: string;
    };
    italic: {
        true: string;
    };
    highlight: {
        true: string;
    };
}>, {
    isTruncated: {
        true: string;
    };
    bold: {
        true: string;
    };
    underline: {
        true: string;
    };
    strikeThrough: {
        true: string;
    };
    size: {
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
    };
    sub: {
        true: string;
    };
    italic: {
        true: string;
    };
    highlight: {
        true: string;
    };
}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
    isTruncated: {
        true: string;
    };
    bold: {
        true: string;
    };
    underline: {
        true: string;
    };
    strikeThrough: {
        true: string;
    };
    size: {
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
    };
    sub: {
        true: string;
    };
    italic: {
        true: string;
    };
    highlight: {
        true: string;
    };
}, undefined, "text-typography-700 flex-1 font-normal font-body", import("tailwind-variants/dist/config").TVConfig<{
    isTruncated: {
        true: string;
    };
    bold: {
        true: string;
    };
    underline: {
        true: string;
    };
    strikeThrough: {
        true: string;
    };
    size: {
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
    };
    sub: {
        true: string;
    };
    italic: {
        true: string;
    };
    highlight: {
        true: string;
    };
}, {
    isTruncated: {
        true: string;
    };
    bold: {
        true: string;
    };
    underline: {
        true: string;
    };
    strikeThrough: {
        true: string;
    };
    size: {
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
    };
    sub: {
        true: string;
    };
    italic: {
        true: string;
    };
    highlight: {
        true: string;
    };
}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
declare const AlertIcon: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
    color?: string | undefined;
} & React.RefAttributes<Omit<any, "ref"> & React.RefAttributes<unknown>> & Omit<any, "ref"> & React.RefAttributes<unknown> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
    size: {
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
} | ({
    size: {
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
} & {
    size: {
        '2xs': import("tailwind-merge").ClassNameValue | {};
        xs: import("tailwind-merge").ClassNameValue | {};
        sm: import("tailwind-merge").ClassNameValue | {};
        md: import("tailwind-merge").ClassNameValue | {};
        lg: import("tailwind-merge").ClassNameValue | {};
        xl: import("tailwind-merge").ClassNameValue | {};
    };
}), undefined, undefined, import("tailwind-variants/dist/config").TVConfig<{
    size: {
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, {
    size: {
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}>, {
    size: {
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
    size: {
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, undefined, undefined, import("tailwind-variants/dist/config").TVConfig<{
    size: {
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, {
    size: {
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
export { Alert, AlertText, AlertIcon };
