import * as React from "react";
import { TouchableOpacity, StyleSheet, Text, } from "react-native";
export function Button({ text, onClick }) {
    return (React.createElement(TouchableOpacity, { style: styles.button, onPress: onClick },
        React.createElement(Text, { style: styles.text }, text)));
}
const styles = StyleSheet.create({
    button: {
        maxWidth: 200,
        textAlign: "center",
        borderRadius: 10,
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: 15,
        backgroundColor: "#2f80ed",
    },
    text: {
        color: "white",
    },
});
