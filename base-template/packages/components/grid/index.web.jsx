import "react";
import { gridStyle, gridItemStyle } from "./styles";
const Grid = ({ className, _extra, ...props }) => {
    const gridClass = _extra?.className;
    const finalGridClass = gridClass ?? "grid-cols-12";
    return (<div className={gridStyle({
            class: className + " " + finalGridClass,
        })} {...props}/>);
};
const GridItem = ({ className, _extra, ...props }) => {
    const gridItemClass = _extra?.className;
    const finalGridItemClass = gridItemClass ?? "col-span-1";
    return (<div className={gridItemStyle({
            class: className + " " + finalGridItemClass,
        })} {...props}/>);
};
Grid.displayName = "Grid";
GridItem.displayName = "GridItem";
export { Grid, GridItem };
