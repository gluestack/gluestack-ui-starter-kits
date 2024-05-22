import React, { useEffect, useState, createContext, useContext, useMemo, forwardRef, } from "react";
import { View, Dimensions, Platform } from "react-native";
import { gridStyle, gridItemStyle } from "./styles";
import { cssInterop } from "nativewind";
import { useBreakpointValue, getBreakPointValue, } from "@base-template/hooks/useMediaQuery";
const { width } = Dimensions.get("window");
const GridContext = createContext({});
function arrangeChildrenIntoRows({ childrenArray, colSpanArr, numColumns, }) {
    let currentRow = 1;
    let currentRowTotalColSpan = 0;
    // store how many items in each row
    const rowItemsCount = {};
    for (let i = 0; i < childrenArray.length; i++) {
        const colSpan = colSpanArr[i];
        // if current row is full, go to next row
        if (currentRowTotalColSpan + colSpan > numColumns) {
            currentRow++;
            currentRowTotalColSpan = colSpan;
        }
        else {
            // if current row is not full, add colSpan to current row
            currentRowTotalColSpan += colSpan;
        }
        rowItemsCount[currentRow] = rowItemsCount[currentRow]
            ? [...rowItemsCount[currentRow], i]
            : [i];
    }
    return rowItemsCount;
}
const Grid = forwardRef(({ className, _extra, children, ...props }, ref) => {
    const gridClassNamePattern = /\b(?:\w+:)?grid-cols-?\d+\b/g;
    const gridClass = _extra?.className;
    /*
    if (Array.isArray(interpolatedStyles)) {
      interpolatedClassName = interpolatedStyles.reduce(
        (acc: any, style: any) => {
          if (style["$$css"]) {
            // delete style["$$css"];
            acc += ` ${Object.keys(style)[1]}`;
          }
          return acc;
        },
        interpolatedClassName
      );
    } else {
      if (interpolatedStyles && interpolatedStyles["$$css"]) {
        // delete interpolatedStyles["$$css"];
        interpolatedClassName = Object.keys(interpolatedStyles["$$css"])[1];
      }
    }
    */
    const generateResponsiveNumColumns = () => {
        const numColumns = gridClass?.match(gridClassNamePattern);
        if (!numColumns) {
            return 12;
        }
        const regex = /^(?:(\w+):)?grid-cols-?(\d+)$/;
        const result = {};
        numColumns.forEach((className) => {
            const match = className.match(regex);
            if (match) {
                const prefix = match[1] || "default";
                const value = parseInt(match[2], 10);
                result[prefix] = value;
            }
        });
        return result;
    };
    const obj = generateResponsiveNumColumns();
    const numColumns1 = useBreakpointValue(obj);
    const [calculatedWidth, setCalculatedWidth] = useState(null);
    const itemsPerRow = useMemo(() => {
        // get the colSpan of each child
        const colSpanArr = React.Children.map(children, (child) => {
            let gridItemClassName = child?.props?._extra?.className;
            const gridClassNamePattern = /\b(?:\w+:)?col-span-?\d+\b/g;
            const generateResponsiveNumColumns = () => {
                const numColumns = gridItemClassName?.match(gridClassNamePattern);
                if (!numColumns) {
                    return 12;
                }
                const regex = /^(?:(\w+):)?grid-cols-?(\d+)$/;
                const result = {};
                numColumns.forEach((className) => {
                    const match = className.match(regex);
                    if (match) {
                        const prefix = match[1] || "default";
                        const value = parseInt(match[2], 10);
                        result[prefix] = value;
                    }
                });
                return result;
            };
            const colSpan2 = getBreakPointValue(generateResponsiveNumColumns(), width);
            const colSpan = colSpan2 ? colSpan2 : 1;
            if (colSpan > numColumns1) {
                return numColumns1;
            }
            return colSpan;
        });
        const childrenArray = React.Children.toArray(children);
        const rowItemsCount = arrangeChildrenIntoRows({
            childrenArray,
            colSpanArr,
            numColumns: numColumns1,
        });
        return rowItemsCount;
    }, [numColumns1, children]);
    const contextValue = useMemo(() => {
        return {
            calculatedWidth,
            numColumns: numColumns1,
            itemsPerRow,
            flexDirection: props?.flexDirection || "row",
            gap: props?.gap || 0,
            columnGap: props?.columnGap || 0,
        };
    }, [calculatedWidth, itemsPerRow, numColumns1, props]);
    const childrenWithProps = React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { index });
        }
        return child;
    });
    const gridClassMerged = `${Platform.select({
        web: gridClass ?? "grid-cols-12",
    })}`;
    return (<GridContext.Provider value={contextValue}>
        <View ref={ref} className={gridStyle({
            class: className + " " + gridClassMerged,
        })} onLayout={(event) => {
            const paddingLeftToSubtract = props?.paddingStart || props?.paddingLeft || props?.padding || 0;
            const paddingRightToSubtract = props?.paddingEnd || props?.paddingRight || props?.padding || 0;
            const width = event.nativeEvent.layout.width -
                paddingLeftToSubtract -
                paddingRightToSubtract;
            setCalculatedWidth(width);
        }} {...props}>
          {calculatedWidth && childrenWithProps}
        </View>
      </GridContext.Provider>);
});
//@ts-ignore
cssInterop(Grid, {
    className: {
        target: "style",
        nativeStyleToProp: {
            gap: "gap",
            rowGap: "rowGap",
            columnGap: "columnGap",
            flexDirection: "flexDirection",
            padding: "padding",
            paddingLeft: "paddingLeft",
            paddingRight: "paddingRight",
            paddingStart: "paddingStart",
            paddingEnd: "paddingEnd",
        },
    },
});
const GridItem = forwardRef(({ className, _extra, ...props }, ref) => {
    const gridClassNamePattern = /\b(?:\w+:)?col-span-?\d+\b/g;
    const gridItemClass = _extra?.className;
    const generateResponsiveNumColumns = () => {
        console.log("generateResponsiveNumColumns", gridItemClass);
        const numColumns = gridItemClass?.match(gridClassNamePattern);
        if (!numColumns) {
            return 1;
        }
        const regex = /^(?:(\w+):)?col-span-?(\d+)$/;
        const result = {};
        numColumns.forEach((className) => {
            const match = className.match(regex);
            if (match) {
                const prefix = match[1] || "default";
                const value = parseInt(match[2], 10);
                result[prefix] = value;
            }
        });
        return result;
    };
    const colSpan1 = useBreakpointValue(generateResponsiveNumColumns());
    const [flexBasisValue, setFlexBasisValue] = useState("auto");
    const { calculatedWidth, numColumns, itemsPerRow, flexDirection, gap, columnGap, } = useContext(GridContext);
    useEffect(() => {
        if (!flexDirection?.includes("column") &&
            calculatedWidth &&
            numColumns > 0 &&
            colSpan1 > 0) {
            // find out in which row of itemsPerRow the current item's index is
            const row = Object.keys(itemsPerRow).find((key) => {
                return itemsPerRow[key].includes(props?.index);
            });
            const rowColsCount = itemsPerRow[row].length;
            const space = columnGap || gap || 0;
            const gutterOffset = space *
                (rowColsCount === 1 && colSpan1 < numColumns ? 2 : rowColsCount - 1);
            const flexBasisValue = Math.min((((calculatedWidth - gutterOffset) * colSpan1) /
                numColumns /
                calculatedWidth) *
                100, 100) + "%";
            setFlexBasisValue(flexBasisValue);
        }
    }, [calculatedWidth, colSpan1, numColumns, columnGap, gap, flexDirection]); // eslint-disable-line react-hooks/exhaustive-deps
    return (<View ref={ref} gridItemClass={gridItemClass} className={gridItemStyle({
            class: className +
                " " +
                Platform.select({ web: gridItemClass ?? "col-span-1" }) ?? "",
        })} 
    //@ts-ignore
    style={{
            flexBasis: flexBasisValue,
        }} {...props}/>);
});
Grid.displayName = "Grid";
GridItem.displayName = "GridItem";
export { Grid, GridItem };
