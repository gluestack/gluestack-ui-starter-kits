import React from 'react';
import { View } from 'react-native';
import { vstackStyle } from './styles';
const VStack = React.forwardRef(({ className, space, reversed, ...props }, ref) => {
    return (<View className={vstackStyle({ space, reversed, class: className })} {...props} ref={ref}/>);
});
VStack.displayName = 'VStack';
export { VStack };
