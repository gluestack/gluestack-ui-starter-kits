import React from 'react';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
declare const menuItemStyle: import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "p-3 flex-row items-center data-[hover=true]:bg-background-100 data-[active=true]:bg-background-200 data-[focus=true]:bg-background-100 data-[focus=true]:web:outline-noe data-[focus=true]:web:outline-0 data-[disabled=true]:opacity-40 data-[disabled=true]:web:cursor-not-allowed data-[focus-visible=true]:web:outline-2 data-[focus-visible=true]:web:outline-primary-700 data-[focus-visible=true]:web:outline data-[focus-visible=true]:web:cursor-pointer  data-[disabled=true]:data-[focus=true]:bg-transparent ", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "p-3 flex-row items-center data-[hover=true]:bg-background-100 data-[active=true]:bg-background-200 data-[focus=true]:bg-background-100 data-[focus=true]:web:outline-noe data-[focus=true]:web:outline-0 data-[disabled=true]:opacity-40 data-[disabled=true]:web:cursor-not-allowed data-[focus-visible=true]:web:outline-2 data-[focus-visible=true]:web:outline-primary-700 data-[focus-visible=true]:web:outline data-[focus-visible=true]:web:cursor-pointer  data-[disabled=true]:data-[focus=true]:bg-transparent ", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
type IMenuItemProps = VariantProps<typeof menuItemStyle>;
export declare const UIMenu: import("@gluestack-ui/menu/lib/typescript/types").IMenuComponentType<import("react-native").Animated.AnimatedProps<import("react-native").ViewProps & React.RefAttributes<import("react-native").View>> & import("@legendapp/motion").MotionComponentProps<typeof import("react-native").View, import("react-native").ViewStyle, unknown, unknown, unknown>, {
    className?: string | undefined;
} & IMenuItemProps & React.RefAttributes<unknown>, import("react-native").TextProps>;
declare const Menu: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & React.RefAttributes<import("react-native").Animated.AnimatedProps<import("react-native").ViewProps & React.RefAttributes<import("react-native").View>> & import("@legendapp/motion").MotionComponentProps<typeof import("react-native").View, import("react-native").ViewStyle, unknown, unknown, unknown>> & import("react-native").Animated.AnimatedProps<import("react-native").ViewProps & React.RefAttributes<import("react-native").View>> & import("@legendapp/motion").MotionComponentProps<typeof import("react-native").View, import("react-native").ViewStyle, unknown, unknown, unknown> & import("@gluestack-ui/menu/lib/typescript/types").InterfaceMenuProps & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "min-w-[200px] py-2 rounded-sm bg-background-0", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "min-w-[200px] py-2 rounded-sm bg-background-0", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
declare const MenuItem: React.ForwardRefExoticComponent<React.RefAttributes<{
    className?: string | undefined;
} & IMenuItemProps & React.RefAttributes<unknown>> & {
    className?: string | undefined;
} & IMenuItemProps & React.RefAttributes<unknown> & import("react-stately").ItemProps<{
    className?: string | undefined;
} & IMenuItemProps & React.RefAttributes<unknown>> & import("@gluestack-ui/menu/lib/typescript/types").IItemProp>;
declare const MenuItemLabel: React.ForwardRefExoticComponent<Omit<{
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
}), undefined, "text-typography-700 font-normal font-body", import("tailwind-variants/dist/config").TVConfig<{
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
}, undefined, "text-typography-700 font-normal font-body", import("tailwind-variants/dist/config").TVConfig<{
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
export { Menu, MenuItem, MenuItemLabel };
