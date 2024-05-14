import 'react';
import { gridStyle, gridItemStyle } from './styles';
const Grid = ({ className, numColumns = 12, ...props }) => {
    return (<div className={gridStyle({
            numColumns,
            class: className,
        })} {...props}/>);
};
const GridItem = ({ className, colSpan = 1, ...props }) => {
    return (<div className={gridItemStyle({ colSpan, class: className })} {...props}/>);
};
Grid.displayName = 'Grid';
GridItem.displayName = 'GridItem';
export { Grid, GridItem };