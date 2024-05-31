"use client";
import "react";
import { createImage } from "@gluestack-ui/image";
import { Platform } from "react-native";
import UnitoolsImage from "@unitools/image";
import { tva } from "@gluestack-ui/nativewind-utils/tva";
import { cssInterop } from "@gluestack-ui/nativewind-utils/cssInterop";
const imageStyle = tva({
    base: "max-w-full",
    variants: {
        size: {
            "2xs": "h-6 w-6",
            xs: "h-10 w-10",
            sm: "h-16 w-16",
            md: "h-20 w-20",
            lg: "h-24 w-24",
            xl: "h-32 w-32",
            "2xl": "h-64 w-64",
            full: "h-full w-full",
        },
    },
});
const UIImage = createImage({ Root: UnitoolsImage });
cssInterop(UIImage, 
//@ts-ignore
UnitoolsImage.displayName === "NextImage" ? {} : { className: "style" });
const Image = ({ size = "md", className, ...props }) => {
    return (<UIImage className={imageStyle({ size, class: className })} {...props} 
    //@ts-ignore
    style={Platform.OS === "web"
            ? { height: "revert-layer", width: "revert-layer" }
            : undefined}/>);
};
Image.displayName = "Image";
export { Image };
