import React from 'react';
import { View } from 'react-native';
import { hstackStyle } from './styles';
const HStack = React.forwardRef(({ className, space, reversed, ...props }, ref) => {
    return (<View className={hstackStyle({ space, reversed, class: className })} {...props} ref={ref}/>);
});
HStack.displayName = 'HStack';
export { HStack };
