import React from "react";
import { gridStyle, gridItemStyle } from "./styles";

const Grid = ({ className, _extra, ...props }: any) => {
  const gridClass = _extra?.className;
  const finalGridClass = gridClass ?? "grid-cols-12";
  return (
    <div
      className={gridStyle({
        class: className + " " + finalGridClass,
      })}
      {...props}
    />
  );
};

const GridItem = ({ className, _extra, ...props }: any) => {
  const gridItemClass = _extra?.className;

  const finalGridItemClass = gridItemClass ?? "col-span-1";
  return (
    <div
      className={gridItemStyle({
        class: className + " " + finalGridItemClass,
      })}
      {...props}
    />
  );
};
Grid.displayName = "Grid";
GridItem.displayName = "GridItem";
export { Grid, GridItem };
