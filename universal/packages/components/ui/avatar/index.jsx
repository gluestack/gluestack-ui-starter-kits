"use client";
import React from "react";
import { createAvatar } from "@gluestack-ui/avatar";
import { View, Text } from "react-native";
import Image from "@unitools/image";
import { tva } from "@gluestack-ui/nativewind-utils/tva";
import { withStyleContext, useStyleContext, } from "@gluestack-ui/nativewind-utils/withStyleContext";
import { cssInterop } from "@gluestack-ui/nativewind-utils/cssInterop";
const SCOPE = "AVATAR";
const UIAvatar = createAvatar({
    Root: withStyleContext(View, SCOPE),
    Badge: View,
    Group: View,
    Image: Image,
    FallbackText: Text,
});
cssInterop(UIAvatar, { className: "style" });
cssInterop(UIAvatar.Badge, { className: "style" });
cssInterop(UIAvatar.Group, { className: "style" });
cssInterop(UIAvatar.Image, 
//@ts-ignore
Image.displayName === "NextImage" ? {} : { className: "style" });
cssInterop(UIAvatar.FallbackText, { className: "style" });
const avatarStyle = tva({
    base: "rounded-full justify-center items-center relative bg-primary-600 group-[.avatar-group]/avatar-group:-ml-2.5",
    variants: {
        size: {
            xs: "w-6 h-6",
            sm: "w-8 h-8",
            md: "w-12 h-12",
            lg: "w-16 h-16",
            xl: "w-24 h-24",
            "2xl": "w-32 h-32",
        },
    },
});
const avatarFallbackTextStyle = tva({
    base: "text-typography-0 font-semibold overflow-hidden text-transform:uppercase web:cursor-default",
    parentVariants: {
        size: {
            xs: "text-2xs",
            sm: "text-xs",
            md: "text-base",
            lg: "text-xl",
            xl: "text-3xl",
            "2xl": "text-5xl",
        },
    },
});
const avatarGroupStyle = tva({
    base: "group/avatar-group flex-row-reverse relative avatar-group",
});
const avatarBadgeStyle = tva({
    base: "w-5 h-5 bg-success-500 rounded-full absolute right-0 bottom-0 border-white border-2",
    parentVariants: {
        size: {
            xs: "w-2 h-2",
            sm: "w-2 h-2",
            md: "w-3 h-3",
            lg: "w-4 h-4",
            xl: "w-6 h-6",
            "2xl": "w-8 h-8",
        },
    },
});
const avatarImageStyle = tva({
    base: "!h-full !w-full rounded-full absolute",
});
export const Avatar = React.forwardRef(({ className, size = "md", ...props }, ref) => {
    return (<UIAvatar ref={ref} {...props} className={avatarStyle({ size, class: className })} context={{ size }}/>);
});
export const AvatarBadge = React.forwardRef(({ className, size, ...props }, ref) => {
    const { size: parentSize } = useStyleContext(SCOPE);
    return (<UIAvatar.Badge ref={ref} {...props} className={avatarBadgeStyle({
            parentVariants: {
                size: parentSize,
            },
            size,
            class: className,
        })}/>);
});
export const AvatarFallbackText = React.forwardRef(({ className, size, ...props }, ref) => {
    const { size: parentSize } = useStyleContext(SCOPE);
    return (<UIAvatar.FallbackText ref={ref} {...props} className={avatarFallbackTextStyle({
            parentVariants: {
                size: parentSize,
            },
            size,
            class: className,
        })}/>);
});
export const AvatarImage = React.forwardRef(({ className, ...props }, ref) => {
    return (<UIAvatar.Image ref={ref} {...props} className={avatarImageStyle({
            class: className,
        })}/>);
});
export const AvatarGroup = React.forwardRef(({ className, ...props }, ref) => {
    return (<UIAvatar.Group ref={ref} {...props} className={avatarGroupStyle({
            class: className,
        })}/>);
});
