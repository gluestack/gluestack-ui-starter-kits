import * as React from "react";
import { GestureResponderEvent } from "react-native";
export interface ButtonProps {
    text: string;
    onClick?: (event: GestureResponderEvent) => void;
}
export declare function Button({ text, onClick }: ButtonProps): React.JSX.Element;
