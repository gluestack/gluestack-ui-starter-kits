import React from 'react';
import { Text as RNText } from 'react-native';
import { textStyle } from './styles';
const Text = React.forwardRef(({ className, isTruncated, bold, underline, strikeThrough, size = 'md', sub, italic, highlight, ...props }, ref) => {
    return (<RNText className={textStyle({
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
