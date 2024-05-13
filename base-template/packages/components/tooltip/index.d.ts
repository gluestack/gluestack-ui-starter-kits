import React from 'react';
import { View } from 'react-native';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
export declare const UITooltip: import("@gluestack-ui/tooltip/lib/typescript/types").IToolTipComponentType<import("react-native").ViewProps & {
    context?: any;
} & React.RefAttributes<unknown>, import("react-native").Animated.AnimatedProps<import("react-native").ViewProps & React.RefAttributes<View>> & import("@legendapp/motion").MotionComponentProps<typeof View, import("react-native").ViewStyle, unknown, unknown, unknown>, import("react-native").TextProps>;
export declare const Tooltip: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & import("react-native").ViewProps & {
    context?: any;
} & React.RefAttributes<unknown> & React.RefAttributes<import("react-native").ViewProps & {
    context?: any;
} & React.RefAttributes<unknown>> & import("@gluestack-ui/tooltip/lib/typescript/types").InterfaceTooltipProps & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "w-full h-full web:pointer-events-none", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "w-full h-full web:pointer-events-none", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
export declare const TooltipContent: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & import("react-native").Animated.AnimatedProps<import("react-native").ViewProps & React.RefAttributes<View>> & import("@legendapp/motion").MotionComponentProps<typeof View, import("react-native").ViewStyle, unknown, unknown, unknown> & React.RefAttributes<import("react-native").Animated.AnimatedProps<import("react-native").ViewProps & React.RefAttributes<View>> & import("@legendapp/motion").MotionComponentProps<typeof View, import("react-native").ViewStyle, unknown, unknown, unknown>> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "py-1 px-3 rounded-sm bg-background-900 web:pointer-events-auto", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "py-1 px-3 rounded-sm bg-background-900 web:pointer-events-auto", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
export declare const TooltipText: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & import("react-native").TextProps & React.RefAttributes<import("react-native").TextProps> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
    isTruncated: {
        true: {
            props: string;
        };
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
        true: {
            props: string;
        };
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
}), undefined, "font-normal tracking-normal text-red-400 web:select-none text-xs text-typography-50", import("tailwind-variants/dist/config").TVConfig<{
    isTruncated: {
        true: {
            props: string;
        };
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
        true: {
            props: string;
        };
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
        true: {
            props: string;
        };
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
        true: {
            props: string;
        };
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
}, undefined, "font-normal tracking-normal text-red-400 web:select-none text-xs text-typography-50", import("tailwind-variants/dist/config").TVConfig<{
    isTruncated: {
        true: {
            props: string;
        };
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
        true: {
            props: string;
        };
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
