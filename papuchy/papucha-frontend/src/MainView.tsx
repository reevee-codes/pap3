import { Platform,  StyleSheet,  View } from 'react-native';
import { useState } from 'react';

import { ItemListView } from './ItemListView';
import { AddItemView } from './AddItemView';
import { colors } from './styles/colorscheme';

import data from "../mockups/mockup_data.json"

import { ItemData } from './ItemData';
import * as zod from 'zod';


export function MainView() {
    const [items, setItems] = useState(data.items satisfies ItemData[])



    const schema = zod.object({
        name: zod.string().min(3).max(16),
        type: zod.string().min(3).max(16),
        color: zod.string().min(3).max(16),
        created: zod.number()
    })

    const addItem = (newItem: ItemData) => {
        // if (!newItem.name || !newItem.type || !newItem.color) {
        //     throw new Error("some fields are empty");
        // }
        try {
            schema.parse(newItem);
        } catch(e) {
            throw("invalid data");
        }

        const itemExists = items.some(item => {
            return item.name === newItem.name 
                && item.type === newItem.type
                && item.color === newItem.color
        })
        if (itemExists) {
            throw("item already exists");
        }
        setItems([...items, newItem]);
    }

    return (
        <View style={styles.main}>
            <AddItemView onAdded={addItem}/>
            <ItemListView items={items}/>
        </View>
    );
}

Platform
  
export const styles = StyleSheet.create({
    main: {
        flex: 1
    }
});