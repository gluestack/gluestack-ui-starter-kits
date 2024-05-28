import React from 'react';
import { View } from 'react-native';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
export declare const UIActionsheet: import("@gluestack-ui/actionsheet/lib/typescript/types").IActionsheetComponentType<import("react-native").ViewProps, import("react-native").Animated.AnimatedProps<import("react-native").PressableProps & React.RefAttributes<View>> & import("@legendapp/motion").MotionComponentProps<React.ForwardRefExoticComponent<import("react-native").PressableProps & React.RefAttributes<View>>, import("react-native").ViewStyle | ((state: import("react-native").PressableStateCallbackType) => import("react-native").StyleProp<import("react-native").ViewStyle>), unknown, unknown, unknown>, Omit<import("react-native").PressableProps & React.RefAttributes<View> & {
    context?: any;
}, "ref"> & React.RefAttributes<unknown>, import("react-native").TextProps, import("react-native").ViewProps, import("react-native").ViewProps, Omit<import("react-native").Animated.AnimatedProps<import("react-native").ViewProps & React.RefAttributes<View>> & import("@legendapp/motion").MotionComponentProps<typeof View, import("react-native").ViewStyle, unknown, unknown, unknown> & {
    context?: any;
}, "ref"> & React.RefAttributes<unknown>, import("react-native").ScrollViewProps, import("react-native").VirtualizedListProps<unknown>, import("react-native").FlatListProps<unknown>, import("react-native").SectionListProps<unknown, unknown>, import("@expo/html-elements/build/primitives/Text").TextProps, Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const actionsheetStyle: import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "w-full h-full web:pointer-events-none", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "w-full h-full web:pointer-events-none", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
declare const actionsheetItemStyle: import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "w-full flex-row items-center p-3 rounded-sm disabled:opacity-40 disabled:web:pointer-events-auto disabled:web:cursor-not-allowed hover:bg-background-50 active:bg-background-100 focus:bg-background-100 web:focus-visible:bg-background-100", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "w-full flex-row items-center p-3 rounded-sm disabled:opacity-40 disabled:web:pointer-events-auto disabled:web:cursor-not-allowed hover:bg-background-50 active:bg-background-100 focus:bg-background-100 web:focus-visible:bg-background-100", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
declare const actionsheetItemTextStyle: import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
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
}), undefined, "text-typography-700 font-normal font-body tracking-md text-left mx-2", import("tailwind-variants/dist/config").TVConfig<{
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
}, undefined, "text-typography-700 font-normal font-body tracking-md text-left mx-2", import("tailwind-variants/dist/config").TVConfig<{
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
}>, unknown, unknown, undefined>>;
declare const actionsheetDragIndicatorStyle: import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "w-16 h-1 bg-background-400 rounded-full", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "w-16 h-1 bg-background-400 rounded-full", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
declare const actionsheetDragIndicatorWrapperStyle: import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "w-full py-1 items-center", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "w-full py-1 items-center", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
declare const actionsheetScrollViewStyle: import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "w-full h-auto", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "w-full h-auto", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
declare const actionsheetVirtualizedListStyle: import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "w-full h-auto", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "w-full h-auto", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
declare const actionsheetFlatListStyle: import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "w-full h-auto", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "w-full h-auto", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
declare const actionsheetSectionListStyle: import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "w-full h-auto", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "w-full h-auto", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
declare const actionsheetSectionHeaderTextStyle: import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
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
        '5xl': string;
        '4xl': string;
        '3xl': string;
        '2xl': string;
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
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
        '5xl': string;
        '4xl': string;
        '3xl': string;
        '2xl': string;
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
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
        '5xl': import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        '4xl': import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        '3xl': import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        '2xl': import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
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
        xs: import("tailwind-merge").ClassNameValue | {
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
}), undefined, "leading-5 font-bold font-heading my-0 text-typography-500 p-3 uppercase", import("tailwind-variants/dist/config").TVConfig<{
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
        '5xl': string;
        '4xl': string;
        '3xl': string;
        '2xl': string;
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
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
        '5xl': string;
        '4xl': string;
        '3xl': string;
        '2xl': string;
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
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
        '5xl': string;
        '4xl': string;
        '3xl': string;
        '2xl': string;
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
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
        '5xl': string;
        '4xl': string;
        '3xl': string;
        '2xl': string;
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
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
}, undefined, "leading-5 font-bold font-heading my-0 text-typography-500 p-3 uppercase", import("tailwind-variants/dist/config").TVConfig<{
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
        '5xl': string;
        '4xl': string;
        '3xl': string;
        '2xl': string;
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
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
        '5xl': string;
        '4xl': string;
        '3xl': string;
        '2xl': string;
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
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
}>, unknown, unknown, undefined>>;
type IActionsheetProps = VariantProps<typeof actionsheetStyle> & React.ComponentProps<typeof UIActionsheet>;
type IActionsheetItemProps = VariantProps<typeof actionsheetItemStyle> & React.ComponentProps<typeof UIActionsheet.Item>;
type IActionsheetItemTextProps = VariantProps<typeof actionsheetItemTextStyle> & React.ComponentProps<typeof UIActionsheet.ItemText>;
type IActionsheetDragIndicatorProps = VariantProps<typeof actionsheetDragIndicatorStyle> & React.ComponentProps<typeof UIActionsheet.DragIndicator>;
type IActionsheetDragIndicatorWrapperProps = VariantProps<typeof actionsheetDragIndicatorWrapperStyle> & React.ComponentProps<typeof UIActionsheet.DragIndicatorWrapper>;
type IActionsheetScrollViewProps = VariantProps<typeof actionsheetScrollViewStyle> & React.ComponentProps<typeof UIActionsheet.ScrollView>;
type IActionsheetVirtualizedListProps = VariantProps<typeof actionsheetVirtualizedListStyle> & React.ComponentProps<typeof UIActionsheet.VirtualizedList>;
type IActionsheetFlatListProps = VariantProps<typeof actionsheetFlatListStyle> & React.ComponentProps<typeof UIActionsheet.FlatList>;
type IActionsheetSectionListProps = VariantProps<typeof actionsheetSectionListStyle> & React.ComponentProps<typeof UIActionsheet.SectionList>;
type IActionsheetSectionHeaderTextProps = VariantProps<typeof actionsheetSectionHeaderTextStyle> & React.ComponentProps<typeof UIActionsheet.SectionHeaderText>;
declare const Actionsheet: React.ForwardRefExoticComponent<Omit<IActionsheetProps, "ref"> & React.RefAttributes<unknown>>;
declare const ActionsheetContent: React.ForwardRefExoticComponent<Omit<VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "items-center rounded-tl-3xl rounded-tr-3xl p-2 bg-background-0 web:pointer-events-auto web:select-none shadow-lg", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "items-center rounded-tl-3xl rounded-tr-3xl p-2 bg-background-0 web:pointer-events-auto web:select-none shadow-lg", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>> & Omit<import("react-native").Animated.AnimatedProps<import("react-native").ViewProps & React.RefAttributes<View>> & import("@legendapp/motion").MotionComponentProps<typeof View, import("react-native").ViewStyle, unknown, unknown, unknown> & {
    context?: any;
}, "ref"> & React.RefAttributes<unknown> & React.RefAttributes<Omit<import("react-native").Animated.AnimatedProps<import("react-native").ViewProps & React.RefAttributes<View>> & import("@legendapp/motion").MotionComponentProps<typeof View, import("react-native").ViewStyle, unknown, unknown, unknown> & {
    context?: any;
}, "ref"> & React.RefAttributes<unknown>> & import("@gluestack-ui/actionsheet/lib/typescript/types").InterfaceActionsheetContentProps & {
    className?: string | undefined;
}, "ref"> & React.RefAttributes<unknown>>;
declare const ActionsheetItem: React.ForwardRefExoticComponent<Omit<IActionsheetItemProps, "ref"> & React.RefAttributes<unknown>>;
declare const ActionsheetItemText: React.ForwardRefExoticComponent<Omit<IActionsheetItemTextProps, "ref"> & React.RefAttributes<unknown>>;
declare const ActionsheetDragIndicator: React.ForwardRefExoticComponent<Omit<IActionsheetDragIndicatorProps, "ref"> & React.RefAttributes<unknown>>;
declare const ActionsheetDragIndicatorWrapper: React.ForwardRefExoticComponent<Omit<IActionsheetDragIndicatorWrapperProps, "ref"> & React.RefAttributes<unknown>>;
declare const ActionsheetBackdrop: React.ForwardRefExoticComponent<Omit<VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "absolute left-0 top-0 right-0 bottom-0 bg-background-dark web:cursor-default web:pointer-events-auto", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "absolute left-0 top-0 right-0 bottom-0 bg-background-dark web:cursor-default web:pointer-events-auto", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>> & React.RefAttributes<import("react-native").Animated.AnimatedProps<import("react-native").PressableProps & React.RefAttributes<View>> & import("@legendapp/motion").MotionComponentProps<React.ForwardRefExoticComponent<import("react-native").PressableProps & React.RefAttributes<View>>, import("react-native").ViewStyle | ((state: import("react-native").PressableStateCallbackType) => import("react-native").StyleProp<import("react-native").ViewStyle>), unknown, unknown, unknown>> & import("react-native").Animated.AnimatedProps<import("react-native").PressableProps & React.RefAttributes<View>> & import("@legendapp/motion").MotionComponentProps<React.ForwardRefExoticComponent<import("react-native").PressableProps & React.RefAttributes<View>>, import("react-native").ViewStyle | ((state: import("react-native").PressableStateCallbackType) => import("react-native").StyleProp<import("react-native").ViewStyle>), unknown, unknown, unknown> & {
    className?: string | undefined;
}, "ref"> & React.RefAttributes<unknown>>;
declare const ActionsheetScrollView: React.ForwardRefExoticComponent<Omit<IActionsheetScrollViewProps, "ref"> & React.RefAttributes<unknown>>;
declare const ActionsheetVirtualizedList: React.ForwardRefExoticComponent<Omit<IActionsheetVirtualizedListProps, "ref"> & React.RefAttributes<unknown>>;
declare const ActionsheetFlatList: React.ForwardRefExoticComponent<Omit<IActionsheetFlatListProps, "ref"> & React.RefAttributes<unknown>>;
declare const ActionsheetSectionList: React.ForwardRefExoticComponent<Omit<IActionsheetSectionListProps, "ref"> & React.RefAttributes<unknown>>;
declare const ActionsheetSectionHeaderText: React.ForwardRefExoticComponent<Omit<IActionsheetSectionHeaderTextProps, "ref"> & React.RefAttributes<unknown>>;
declare const ActionsheetIcon: React.ForwardRefExoticComponent<Omit<VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
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
    };
}), undefined, "", import("tailwind-variants/dist/config").TVConfig<{
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
}, undefined, "", import("tailwind-variants/dist/config").TVConfig<{
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
}>, unknown, unknown, undefined>>> & React.RefAttributes<Omit<any, "ref"> & React.RefAttributes<unknown>> & Omit<any, "ref"> & React.RefAttributes<unknown> & {
    as?: any;
    fill?: string | undefined;
    color?: string | undefined;
    className?: any;
}, "ref"> & React.RefAttributes<unknown>>;
export { Actionsheet, ActionsheetContent, ActionsheetItem, ActionsheetItemText, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetBackdrop, ActionsheetScrollView, ActionsheetVirtualizedList, ActionsheetFlatList, ActionsheetSectionList, ActionsheetSectionHeaderText, ActionsheetIcon, };
