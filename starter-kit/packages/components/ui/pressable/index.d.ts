import React from 'react';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
declare const Pressable: React.ForwardRefExoticComponent<Omit<{
    className?: string | undefined;
} & Omit<Omit<Omit<import("react-native").PressableProps & React.RefAttributes<import("react-native").View> & {
    context?: any;
}, "ref"> & React.RefAttributes<unknown> & Omit<import("react-native").PressableProps, "children"> & {
    tabIndex?: 0 | -1 | undefined;
} & {
    children?: React.ReactNode | (({ hovered, pressed, focused, focusVisible, disabled, }: {
        hovered?: boolean | undefined;
        pressed?: boolean | undefined;
        focused?: boolean | undefined;
        focusVisible?: boolean | undefined;
        disabled?: boolean | undefined;
    }) => React.ReactNode);
}, "ref"> & React.RefAttributes<unknown>, "context"> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-primary-700 data-[focus-visible=true]:ring-2 data-[disabled=true]:opacity-40", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-primary-700 data-[focus-visible=true]:ring-2 data-[disabled=true]:opacity-40", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>>, "ref"> & React.RefAttributes<unknown>>;
export { Pressable };
