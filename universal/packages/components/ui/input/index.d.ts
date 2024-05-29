import React from 'react';
import { View } from 'react-native';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
declare const Input: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & React.RefAttributes<import("react-native").ViewProps & {
    context?: any;
} & React.RefAttributes<unknown>> & import("react-native").ViewProps & {
    context?: any;
} & React.RefAttributes<unknown> & import("@gluestack-ui/input/lib/typescript/types").IInputFieldProps & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
    size: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
    };
    variant: {
        underlined: string;
        outline: string;
        rounded: string;
    };
} | ({
    size: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
    };
    variant: {
        underlined: string;
        outline: string;
        rounded: string;
    };
} & {
    size: {
        xl: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        lg: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        md: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        sm: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
    variant: {
        underlined: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        outline: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        rounded: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
}), undefined, "border-background-300 flex-row overflow-hidden content-center data-[hover=true]:border-outline-400 data-[focus=true]:border-primary-700 data-[focus=true]:hover:border-primary-700 data-[disabled=true]:opacity-40 data-[disabled=true]:hover:border-background-300 items-center", import("tailwind-variants/dist/config").TVConfig<{
    size: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
    };
    variant: {
        underlined: string;
        outline: string;
        rounded: string;
    };
}, {
    size: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
    };
    variant: {
        underlined: string;
        outline: string;
        rounded: string;
    };
}>, {
    size: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
    };
    variant: {
        underlined: string;
        outline: string;
        rounded: string;
    };
}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
    size: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
    };
    variant: {
        underlined: string;
        outline: string;
        rounded: string;
    };
}, undefined, "border-background-300 flex-row overflow-hidden content-center data-[hover=true]:border-outline-400 data-[focus=true]:border-primary-700 data-[focus=true]:hover:border-primary-700 data-[disabled=true]:opacity-40 data-[disabled=true]:hover:border-background-300 items-center", import("tailwind-variants/dist/config").TVConfig<{
    size: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
    };
    variant: {
        underlined: string;
        outline: string;
        rounded: string;
    };
}, {
    size: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
    };
    variant: {
        underlined: string;
        outline: string;
        rounded: string;
    };
}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
declare const InputIcon: React.ForwardRefExoticComponent<Omit<{
    className?: any;
    fill?: string | undefined;
    color?: string | undefined;
    as?: any;
} & React.RefAttributes<Omit<any, "ref"> & React.RefAttributes<unknown>> & Omit<any, "ref"> & React.RefAttributes<unknown> & {
    as: any;
}, "ref"> & React.RefAttributes<unknown>>;
declare const InputSlot: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & React.RefAttributes<import("react-native").PressableProps & React.RefAttributes<View>> & import("react-native").PressableProps & React.RefAttributes<View> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "justify-center items-center web:disabled:cursor-not-allowed", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "justify-center items-center web:disabled:cursor-not-allowed", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
declare const InputField: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & React.RefAttributes<import("react-native").TextInputProps> & import("react-native").TextInputProps & import("@gluestack-ui/input/lib/typescript/types").IInputProps & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<({} | {} | {}) & {
    variant: {
        underlined: string;
        outline: string;
        rounded: string;
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
}, undefined, "flex-1 text-typography-900 py-auto px-3 placeholder:text-typography-500 h-full ios:leading-[0px] web:cursor-text web:data-[disabled=true]:cursor-not-allowed", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "flex-1 text-typography-900 py-auto px-3 placeholder:text-typography-500 h-full ios:leading-[0px] web:cursor-text web:data-[disabled=true]:cursor-not-allowed", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
export { Input, InputField, InputIcon, InputSlot };
