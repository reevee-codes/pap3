import { Appearance, StyleSheet, Text, View } from 'react-native';

export const colors = {
    background: Appearance.getColorScheme() === "dark" ? "#222" : "#fff",
    backgroundDarker: Appearance.getColorScheme() === "dark" ? "#060606" : "#ccc",
    // background: "#fff",
    button: Appearance.getColorScheme() === "dark" ? "#203457" : "#48F",
    // button: "#48F",
    text: Appearance.getColorScheme() === "dark" ? "#ddd" : "#111",
    // text: "#111",
    inputPlaceholder: Appearance.getColorScheme() === "dark" ? "#444" : "#999",
    // inputPlaceholder: "#999"
};
