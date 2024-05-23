import "react";
import { gridStyle, gridItemStyle } from "./styles";
const Grid = ({ className, _extra, ...props }) => {
    const gridClass = _extra?.className;
    const finalGridClass = gridClass ?? "";
    return (<div className={gridStyle({
            class: className + " " + finalGridClass,
        })} {...props}/>);
};
const GridItem = ({ className, _extra, ...props }) => {
    const gridItemClass = _extra?.className;
    const finalGridItemClass = gridItemClass ?? "";
    return (<div className={gridItemStyle({
            class: className + " " + finalGridItemClass,
        })} {...props}/>);
};
Grid.displayName = "Grid";
GridItem.displayName = "GridItem";
export { Grid, GridItem };
