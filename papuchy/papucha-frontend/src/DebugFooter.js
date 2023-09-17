import { Appearance, Platform, StyleSheet, Text, View } from 'react-native';

import { colors } from './colorscheme';

const startupDate = new Date();
const API_URL = process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:8080";


export function DebugFooter() {
    return (
        <View style={styles.debugFooter}>
          <View style={{width: "50%"}}>
            <Text style={styles.debugText}>color scheme: {Appearance.getColorScheme()}</Text>
            <Text style={styles.debugText}>system: {Platform.OS}</Text>
          </View>
          <View style={{width: "50%"}}>
            <Text style={styles.debugText}>
              started: {startupDate.getHours()}:{startupDate.getMinutes()}:{startupDate.getSeconds()}
            </Text>
            <Text style={styles.debugText}>api url: {API_URL}</Text>
          </View>
        </View>
    )
}
export const styles = StyleSheet.create({
    debugFooter: {
        alignItems: 'center',
        justifyContent: "flex-end",
        position: "absolute",
        flexDirection: 'row',
        left: 0,
        right: 0,
        bottom: 0,
        padding: 10,
        backgroundColor: "#ccc",
        opacity: 0.8
    },
    debugText: {
        color: colors.text,
        fontSize: 12
    }
});