'use client';
import React from 'react';
import { createPressable } from '@gluestack-ui/pressable';
import { Pressable as RNPressable, Platform } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { withStyleContext } from '@gluestack-ui/nativewind-utils/withStyleContext';
import { withStyleContextAndStates } from '@gluestack-ui/nativewind-utils/withStyleContextAndStates';
import { cssInterop } from '@gluestack-ui/nativewind-utils/cssInterop';
const UIPressable = createPressable({
    Root: Platform.OS === 'web'
        ? withStyleContext(RNPressable)
        : withStyleContextAndStates(RNPressable),
});
const pressableStyle = tva({
    base: 'data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-primary-700 data-[focus-visible=true]:ring-2 data-[disabled=true]:opacity-40',
});
cssInterop(UIPressable, { className: 'style' });
const Pressable = React.forwardRef(({ className, ...props }, ref) => {
    return (<UIPressable {...props} ref={ref} className={pressableStyle({
            class: className,
        })}/>);
});
Pressable.displayName = 'Pressable';
export { Pressable };
