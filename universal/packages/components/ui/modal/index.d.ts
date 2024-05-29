import React from 'react';
import { View } from 'react-native';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
declare const Modal: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & import("react-native").ViewProps & {
    context?: any;
} & React.RefAttributes<unknown> & import("@gluestack-ui/modal/lib/typescript/types").InterfaceModalProps & React.RefAttributes<import("react-native").ViewProps & {
    context?: any;
} & React.RefAttributes<unknown>> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        full: string;
    };
} | ({
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        full: string;
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
        full: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
}), undefined, "group/modal w-full h-full justify-center items-center web:pointer-events-none", import("tailwind-variants/dist/config").TVConfig<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        full: string;
    };
}, {
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        full: string;
    };
}>, {
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        full: string;
    };
}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        full: string;
    };
}, undefined, "group/modal w-full h-full justify-center items-center web:pointer-events-none", import("tailwind-variants/dist/config").TVConfig<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        full: string;
    };
}, {
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        full: string;
    };
}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
declare const ModalBackdrop: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & import("react-native").Animated.AnimatedProps<import("react-native").PressableProps & React.RefAttributes<View>> & import("@legendapp/motion").MotionComponentProps<React.ForwardRefExoticComponent<import("react-native").PressableProps & React.RefAttributes<View>>, import("react-native").ViewStyle | ((state: import("react-native").PressableStateCallbackType) => import("react-native").StyleProp<import("react-native").ViewStyle>), unknown, unknown, unknown> & React.RefAttributes<import("react-native").Animated.AnimatedProps<import("react-native").PressableProps & React.RefAttributes<View>> & import("@legendapp/motion").MotionComponentProps<React.ForwardRefExoticComponent<import("react-native").PressableProps & React.RefAttributes<View>>, import("react-native").ViewStyle | ((state: import("react-native").PressableStateCallbackType) => import("react-native").StyleProp<import("react-native").ViewStyle>), unknown, unknown, unknown>> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "absolute left-0 top-0 right-0 bottom-0 bg-background-dark web:cursor-default", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "absolute left-0 top-0 right-0 bottom-0 bg-background-dark web:cursor-default", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
declare const ModalContent: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & import("react-native").Animated.AnimatedProps<import("react-native").ViewProps & React.RefAttributes<View>> & import("@legendapp/motion").MotionComponentProps<typeof View, import("react-native").ViewStyle, unknown, unknown, unknown> & import("@gluestack-ui/modal/lib/typescript/types").IModalContentProps & React.RefAttributes<import("react-native").Animated.AnimatedProps<import("react-native").ViewProps & React.RefAttributes<View>> & import("@legendapp/motion").MotionComponentProps<typeof View, import("react-native").ViewStyle, unknown, unknown, unknown>> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<({} | {} | {}) & {
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        full: string;
    };
}, undefined, "bg-background-50 rounded-lg overflow-hidden", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "bg-background-50 rounded-lg overflow-hidden", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
declare const ModalHeader: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & import("react-native").ViewProps & React.RefAttributes<import("react-native").ViewProps> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "px-4 pt-4 pb-2 justify-between items-center flex-row", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "px-4 pt-4 pb-2 justify-between items-center flex-row", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
declare const ModalBody: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & import("react-native").ScrollViewProps & React.RefAttributes<import("react-native").ScrollViewProps> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "px-4 pb-2 pt-0", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "px-4 pb-2 pt-0", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
declare const ModalFooter: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & import("react-native").ViewProps & React.RefAttributes<import("react-native").ViewProps> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "p-4 flex-row justify-end items-center flex-wrap", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "p-4 flex-row justify-end items-center flex-wrap", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
declare const ModalCloseButton: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & import("react-native").PressableProps & React.RefAttributes<View> & React.RefAttributes<import("react-native").PressableProps & React.RefAttributes<View>> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "group/modal-close-button z-10 p-2 rounded data-[focus-visible=true]:web:bg-background-100 web:outline-0 cursor-pointer", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "group/modal-close-button z-10 p-2 rounded data-[focus-visible=true]:web:bg-background-100 web:outline-0 cursor-pointer", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
export { Modal, ModalBackdrop, ModalContent, ModalCloseButton, ModalHeader, ModalBody, ModalFooter, };
