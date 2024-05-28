import React from "react";
import type { VariantProps } from "@gluestack-ui/nativewind-utils";
declare const Grid: React.ForwardRefExoticComponent<import("react-native").ViewProps & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "w-full box-border flex-row flex-wrap justify-start grid grid-cols-12", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "w-full box-border flex-row flex-wrap justify-start grid grid-cols-12", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>> & {
    gap?: number | undefined;
    rowGap?: number | undefined;
    columnGap?: number | undefined;
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse" | undefined;
    padding?: number | undefined;
    paddingLeft?: number | undefined;
    paddingRight?: number | undefined;
    paddingStart?: number | undefined;
    paddingEnd?: number | undefined;
    _extra: {
        className: string;
    };
} & React.RefAttributes<unknown>>;
declare const GridItem: React.ForwardRefExoticComponent<import("react-native").ViewProps & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "w-full col-span-1 " | "w-full col-span-1 w-auto", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "w-full col-span-1 " | "w-full col-span-1 w-auto", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>> & {
    index?: number | undefined;
    _extra: {
        className: string;
    };
} & React.RefAttributes<unknown>>;
export { Grid, GridItem };
