import React from 'react';
import { hstackStyle } from './styles';
const HStack = React.forwardRef(({ className, space, reversed, ...props }, ref) => {
    return (<div className={hstackStyle({ space, reversed, class: className })} {...props} ref={ref}/>);
});
HStack.displayName = 'HStack';
export { HStack };
