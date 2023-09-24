import { registerRootComponent } from 'expo';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { colors } from './styles/colorscheme';

import { DebugFooter } from './DebugFooter';
import { MainView } from './MainView';

const API_URL = process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:8080";

function App() {

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>BIRD IS THE WORD</Text>
        </View>

        <MainView/>
        
        <StatusBar style="auto" />
        <DebugFooter/>
      </View>
    </SafeAreaView>

  );
}

Platform
  
export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    backgroundColor: colors.backgroundDarker,
  },
  container: {
      backgroundColor: colors.background,
      flex: 1,
  },
  text: {
      color: colors.text,
  },
  header: {
    alignItems: 'center',
    justifyContent: "flex-start",
    width: "100%",
    padding: 10,
    backgroundColor: colors.backgroundDarker,
  },
});

export default registerRootComponent(App);