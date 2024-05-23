"use client";

import "../styles/global.css";
import React, { useRef, useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { StyleRegistry, createStyleRegistry } from "styled-jsx";
// eslint-disable-next-line @next/next/no-document-import-in-page
import { Main } from "next/document";
import { flush } from "@gluestack-ui/nativewind-utils/flush";
// @ts-ignore
import { AppRegistry } from "react-native-web";

export default function StyledJsxRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [jsxStyleRegistry] = useState(() => createStyleRegistry());
  const isServerInserted = useRef(false);

  useServerInsertedHTML(() => {
    AppRegistry.registerComponent("Main", () => Main);
    const { getStyleElement } = AppRegistry.getApplication("Main");
    if (!isServerInserted.current) {
      isServerInserted.current = true;
      const styles = [getStyleElement(), jsxStyleRegistry.styles(), flush()];
      jsxStyleRegistry.flush();
      return <>{styles}</>;
    }
  });

  return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>;
}
