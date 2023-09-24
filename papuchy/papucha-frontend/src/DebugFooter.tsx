import { Keyboard, Appearance, Platform, StyleSheet, Text, View } from 'react-native';
import {useState, useEffect} from 'react';

import { colors } from './styles/colorscheme';
import { KeyboardHiddenView } from './commonViews/KeyboardHiddenView';

const startupDate = new Date();
const API_URL = process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:8080";


export function DebugFooter() {
    return (
      <KeyboardHiddenView>
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
      </KeyboardHiddenView>
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
        backgroundColor: colors.backgroundDarker,
        opacity: 0.8,
        pointerEvents: "none"
    },
    debugText: {
        color: colors.text,
        fontSize: 12
    }
});