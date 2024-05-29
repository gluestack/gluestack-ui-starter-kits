import React from 'react';
import { View, Text } from 'react-native';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
/** Components */
declare const Accordion: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & import("react-native").ViewProps & {
    context?: any;
} & React.RefAttributes<unknown> & React.RefAttributes<import("react-native").ViewProps & {
    context?: any;
} & React.RefAttributes<unknown>> & import("@gluestack-ui/accordion/lib/typescript/types").IAccordionProps & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
    variant: {
        filled: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
} | ({
    variant: {
        filled: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
} & {
    variant: {
        filled: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
    size: {
        sm: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        md: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        lg: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
}), undefined, "w-full", import("tailwind-variants/dist/config").TVConfig<{
    variant: {
        filled: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    variant: {
        filled: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}>, {
    variant: {
        filled: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
    variant: {
        filled: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "w-full", import("tailwind-variants/dist/config").TVConfig<{
    variant: {
        filled: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    variant: {
        filled: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
declare const AccordionItem: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & import("react-native").ViewProps & React.RefAttributes<import("react-native").ViewProps> & import("@gluestack-ui/accordion/lib/typescript/types").IAccordionItemProps & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<({} | {} | {}) & {
    variant: {
        filled: string;
        unfilled: string;
    };
}, undefined, undefined, import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, undefined, import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
declare const AccordionContent: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & import("react-native").ViewProps & React.RefAttributes<import("react-native").ViewProps> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "px-5 mt-2 pb-5", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "px-5 mt-2 pb-5", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
declare const AccordionContentText: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & import("react-native").TextProps & React.RefAttributes<import("react-native").TextProps> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<({} | {} | {}) & {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "text-typography-700 font-normal", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "text-typography-700 font-normal", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
declare const AccordionIcon: React.ForwardRefExoticComponent<Omit<VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<({} | {} | {}) & {
    size: {
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, undefined, "", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>> & Omit<any, "ref"> & React.RefAttributes<unknown> & React.RefAttributes<Omit<any, "ref"> & React.RefAttributes<unknown>> & {
    as?: any;
} & {
    className?: any;
    fill?: string | undefined;
    as?: any;
    color?: string | undefined;
}, "ref"> & React.RefAttributes<unknown>>;
declare const AccordionHeader: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & Omit<import("react-native").TextProps & React.ClassAttributes<typeof Text>, "style"> & import("@expo/html-elements/build/primitives/Text").WebTextProps & React.RefAttributes<import("@expo/html-elements/build/primitives/Text").TextProps> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "mx-0 my-0", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "mx-0 my-0", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
declare const AccordionTrigger: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & Omit<import("react-native").PressableProps & React.RefAttributes<View>, "children"> & import("@gluestack-ui/accordion/lib/typescript/types").IAccordionTriggerProps & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "w-full py-5 px-5 flex-row justify-between items-center web:outline-none focus:outline-none data-[disabled=true]:opacity-40 data-[disabled=true]:cursor-not-allowed data-[focus-visible=true]:bg-background-50", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "w-full py-5 px-5 flex-row justify-between items-center web:outline-none focus:outline-none data-[disabled=true]:opacity-40 data-[disabled=true]:cursor-not-allowed data-[focus-visible=true]:bg-background-50", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
declare const AccordionTitleText: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & import("react-native").TextProps & React.RefAttributes<import("react-native").TextProps> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<({} | {} | {}) & {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "text-typography-900 font-bold flex-1 text-left", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "text-typography-900 font-bold flex-1 text-left", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
export { Accordion, AccordionItem, AccordionHeader, AccordionTrigger, AccordionTitleText, AccordionContentText, AccordionIcon, AccordionContent, };
