import React, { useEffect, useState, createContext, useContext, useMemo, forwardRef, } from "react";
import { View, Dimensions } from "react-native";
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
const Grid = forwardRef(({ className, numColumns = 12, children, ...props }, ref) => {
    let updatedNumColumns = numColumns;
    if (typeof updatedNumColumns === "object") {
        updatedNumColumns = {
            default: 12,
            //@ts-ignore
            ...updatedNumColumns,
        };
    }
    const numColumns1 = useBreakpointValue(updatedNumColumns);
    const generateClassNamesBasedOnNumColumns = () => {
        let generatedClassNames = " ";
        if (typeof numColumns === "object" && numColumns) {
            Object.keys(numColumns).forEach((key) => {
                if (key === "default") {
                    generatedClassNames += `grid-cols-${numColumns[key]} `;
                }
                else {
                    generatedClassNames += `${key}:grid-cols-${numColumns[key]} `;
                }
            });
        }
        else {
            generatedClassNames += `grid-cols-${numColumns} `;
        }
        return generatedClassNames;
    };
    const generatedClassNames = generateClassNamesBasedOnNumColumns();
    const [calculatedWidth, setCalculatedWidth] = useState(null);
    const itemsPerRow = useMemo(() => {
        // get the colSpan of each child
        const colSpanArr = React.Children.map(children, (child) => {
            let updatedColSpan = child?.props?.colSpan;
            // if (typeof updatedColSpan === "object") {
            //   updatedColSpan = {
            //     default: 1,
            //     ...updatedColSpan,
            //   };
            // }
            const colSpan2 = getBreakPointValue(updatedColSpan, width);
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
        console.log(rowItemsCount, "rowItemsCount");
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
    return (<GridContext.Provider value={contextValue}>
        <View ref={ref} className={gridStyle({
            // numColumns1,
            class: className + generatedClassNames,
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
const GridItem = forwardRef(({ className, colSpan = 1, ...props }, ref) => {
    let updatedColSpan = colSpan;
    if (typeof updatedColSpan === "object") {
        updatedColSpan = {
            default: 1,
            //@ts-ignore
            ...updatedColSpan,
        };
    }
    const colSpan1 = useBreakpointValue(updatedColSpan);
    const generateClassNamesBasedOnColSpan = () => {
        let generatedClassNames = " ";
        if (typeof colSpan === "object") {
            Object.keys(colSpan).forEach((key) => {
                if (key === "default") {
                    generatedClassNames += `col-span-${colSpan[key]} `;
                }
                else {
                    generatedClassNames += `${key}:col-span-${colSpan[key]} `;
                }
            });
        }
        else {
            generatedClassNames += `col-span-${colSpan} `;
        }
        console.log(generatedClassNames, "gc");
        return generatedClassNames;
    };
    const generatedClassNames = generateClassNamesBasedOnColSpan();
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
            console.log(columnGap, "gap");
            const space = columnGap || gap || 0;
            console.log(colSpan1, "cs1");
            const gutterOffset = space *
                (rowColsCount === 1 && colSpan1 < numColumns ? 2 : rowColsCount - 1);
            console.log(rowColsCount === 1 && colSpan1 < numColumns ? 2 : rowColsCount - 1, "space");
            console.log(gutterOffset, "go");
            const flexBasisValue = Math.min((((calculatedWidth - gutterOffset) * colSpan1) /
                numColumns /
                calculatedWidth) *
                100, 100) + "%";
            console.log(flexBasisValue, "flexBasis");
            setFlexBasisValue(flexBasisValue);
        }
    }, [calculatedWidth, colSpan1, numColumns, columnGap, gap, flexDirection]); // eslint-disable-line react-hooks/exhaustive-deps
    return (<View ref={ref} className={gridItemStyle({
            // colSpan,
            class: className + generatedClassNames,
        })} 
    //@ts-ignore
    style={{
            flexBasis: flexBasisValue,
        }} {...props}/>);
});
Grid.displayName = "Grid";
GridItem.displayName = "GridItem";
export { Grid, GridItem };
