import React from 'react';
import { View } from 'react-native';
import { boxStyle } from './styles';
const Box = React.forwardRef(({ className, ...props }, ref) => {
    return (<View ref={ref} {...props} className={boxStyle({ class: className })}/>);
});
Box.displayName = 'Box';
export { Box };
