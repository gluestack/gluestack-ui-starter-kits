import { Dimensions, useWindowDimensions } from 'react-native';
type BreakPointValue = Partial<{
  // @ts-ignore
  [key]: any;
}>;

import DefaultTheme from 'tailwindcss/defaultConfig';
import resolveConfig from 'tailwindcss/resolveConfig';

const TailwindTheme = resolveConfig(DefaultTheme);
const screenSize = TailwindTheme.theme.screens;

let resolveScreenWidth: any = {
  base: 0,
};

Object.entries(screenSize).forEach(([key, value]) => {
  resolveScreenWidth[key] = parseInt(value.replace('px', ''));
});

export function useBreakpointValue(values: BreakPointValue) {
  let { width } = useWindowDimensions();

  let mediaQueriesBreakpoints: any = [];
  Object.keys(resolveScreenWidth).forEach((key) => {
    const isValid = isValidBreakpoint(resolveScreenWidth[key], width);

    mediaQueriesBreakpoints.push({
      key: key,
      breakpoint: resolveScreenWidth[key],
      isValid: isValid,
    });
  });

  mediaQueriesBreakpoints.sort((a: any, b: any) => a.breakpoint - b.breakpoint);

  mediaQueriesBreakpoints.forEach((breakpoint: any, index: any) => {
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

export function isValidBreakpoint(
  breakPointWidth: any,
  width: any = Dimensions.get('window')?.width
) {
  const windowWidth = width;

  if (windowWidth >= breakPointWidth) {
    return true;
  }
  return false;
}

function getLastValidObject(mediaQueries: any) {
  for (let i = mediaQueries.length - 1; i >= 0; i--) {
    if (mediaQueries[i].isValid) {
      return mediaQueries[i];
    }
  }
  return null; // No valid object found
}
