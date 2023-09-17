import { registerRootComponent } from 'expo';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { Appearance, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import { ItemListView } from './ItemListView';
import { AddItemView } from './AddItemView';
import { colors } from './colorscheme';

import data from "../mockups/mockup_data.json"
import { DebugFooter } from './DebugFooter';

const API_URL = process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:8080";

function App() {
  const [items, setItems] = useState(data.items)

  const addItem = (newItem) => {
    const itemExists = items.some(item => {
      return item.name === newItem.name 
          && item.type === newItem.type
          && item.color === newItem.color
    })
    if (itemExists) {
      throw new Error("item already exists")
    }
    setItems([...items, newItem]);
    // return "success"
  }

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>BIRD IS THE WORD</Text>
        </View>

        <ItemListView items={items}/>
        <AddItemView onAdded={addItem}/>
        
        <StatusBar style="auto" />
        <DebugFooter/>
      </View>
    </View>

  );
}

  
export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    // flexGrow: 1,
    // flexDirection: "column"
  },
  container: {
      flex: 1,
      backgroundColor: colors.background,
      // alignItems: 'center',
      // justifyContent: 'center',
      // flexGrow: 1,
      // flexDirection: "column"


      // width: "100%"
  },
  text: {
      color: colors.text,
  },
  header: {
    alignItems: 'center',
    justifyContent: "flex-start",
    // position: "absolute",
    // left: 0,
    // right: 0,
    // top: 0,
    // flexShrink: 0,
    width: "100%",
    padding: 10,
    backgroundColor: "#ccc",
  },
});

export default registerRootComponent(App);