import React from 'react';
import { textStyle } from './styles';
const Text = React.forwardRef(({ className, isTruncated, bold, underline, strikeThrough, size = 'md', sub, italic, highlight, ...props }, ref) => {
    return (<span className={textStyle({
            isTruncated,
            bold,
            underline,
            strikeThrough,
            size,
            sub,
            italic,
            highlight,
            class: className,
        })} {...props} ref={ref}/>);
});
Text.displayName = 'Text';
export { Text };
