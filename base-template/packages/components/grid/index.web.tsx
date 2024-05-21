import React from "react";
import { gridStyle, gridItemStyle } from "./styles";

const Grid = ({ className, numColumns = 12, ...props }: any) => {
  const generateClassNamesBasedOnNumColumns = () => {
    let generatedClassNames = " ";
    if (typeof numColumns === "object") {
      Object.keys(numColumns).forEach((key) => {
        if (key === "default") {
          generatedClassNames += `grid-cols-${numColumns[key]} `;
        } else {
          generatedClassNames += `${key}:grid-cols-${numColumns[key]} `;
        }
      });
    } else {
      generatedClassNames += `grid-cols-${numColumns} `;
    }
    return generatedClassNames;
  };

  const generatedClassNames = generateClassNamesBasedOnNumColumns();

  return (
    <div
      className={gridStyle({
        class: className + generatedClassNames,
      })}
      {...props}
    />
  );
};

const GridItem = ({ className, colSpan = 1, ...props }: any) => {
  const generateClassNamesBasedOnColSpan = () => {
    let generatedClassNames = " ";
    if (typeof colSpan === "object") {
      Object.keys(colSpan).forEach((key) => {
        if (key === "default") {
          generatedClassNames += `col-span-${colSpan[key]} `;
        } else {
          generatedClassNames += `${key}:col-span-${colSpan[key]} `;
        }
      });
    } else {
      generatedClassNames += `col-span-${colSpan} `;
    }
    return generatedClassNames;
  };

  const generatedClassNames = generateClassNamesBasedOnColSpan();
  return (
    <div
      className={gridItemStyle({
        colSpan,
        class: className + generatedClassNames,
      })}
      {...props}
    />
  );
};
Grid.displayName = "Grid";
GridItem.displayName = "GridItem";
export { Grid, GridItem };
