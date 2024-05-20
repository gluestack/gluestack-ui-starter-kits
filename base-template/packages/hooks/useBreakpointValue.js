import { Dimensions, useWindowDimensions } from 'react-native';
import DefaultTheme from 'tailwindcss/defaultConfig';
import resolveConfig from 'tailwindcss/resolveConfig';
const TailwindTheme = resolveConfig(DefaultTheme);
const screenSize = TailwindTheme.theme.screens;
let resolveScreenWidth = {
    base: 0,
};
Object.entries(screenSize).forEach(([key, value]) => {
    resolveScreenWidth[key] = parseInt(value.replace('px', ''));
});
export function useBreakpointValue(values) {
    let { width } = useWindowDimensions();
    let mediaQueriesBreakpoints = [];
    Object.keys(resolveScreenWidth).forEach((key) => {
        const isValid = isValidBreakpoint(resolveScreenWidth[key], width);
        mediaQueriesBreakpoints.push({
            key: key,
            breakpoint: resolveScreenWidth[key],
            isValid: isValid,
        });
    });
    mediaQueriesBreakpoints.sort((a, b) => a.breakpoint - b.breakpoint);
    mediaQueriesBreakpoints.forEach((breakpoint, index) => {
        breakpoint.value = values.hasOwnProperty(breakpoint.key)
            ? // @ts-ignore
                values[breakpoint.key]
            : mediaQueriesBreakpoints[index - 1].value;
    });
    const lastValidObject = getLastValidObject(mediaQueriesBreakpoints);
    if (!lastValidObject) {
        return values;
    }
    return lastValidObject.value;
}
export function isValidBreakpoint(breakPointWidth, width = Dimensions.get('window')?.width) {
    const windowWidth = width;
    if (windowWidth >= breakPointWidth) {
        return true;
    }
    return false;
}
function getLastValidObject(mediaQueries) {
    for (let i = mediaQueries.length - 1; i >= 0; i--) {
        if (mediaQueries[i].isValid) {
            return mediaQueries[i];
        }
    }
    return null; // No valid object found
}
