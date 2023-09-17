import { Text, View, StyleSheet, FlatList } from 'react-native';
import { colors } from './colorscheme';

const ListItem = function({data}) {
    return <View style={styles.ListItem}>
        <View style={styles.Item}>
            <Text style={styles.text}>name: {data.name}</Text>
            <Text style={styles.text}>type: {data.type}</Text>
            <Text style={styles.text}>color: {data.color}</Text>
        </View>
    </View>
}

export function ItemListView({items}) {

    const small = false; // enable when shrinking to show add form
    return (
        <View style={styles.ItemListView}>
            {/* {items?.length
                ? items.map(item => 
                    (<View key={item.name+item.type+item.color}>
                        <Text style={styles.text}>name: {item.name}</Text>
                        <Text style={styles.text}>type: {item.type}</Text>
                        <Text style={styles.text}>color: {item.color}</Text>
                    </View>))
                : <Text>no items yet</Text>} */}
            <FlatList
                // style={styles.List}
                horizontal={small}
                numColumns={!small ? 2: undefined}
                data={items}
                keyExtractor={(item) => item.name+item.type+item.color}
                renderItem={({item}) => <ListItem data={item}/>}
            />
        </View>
    );
}

export const styles = StyleSheet.create({
    ItemListView: {
        borderWidth: 1,
        flex: 1,
        padding: 16,
    },
    ListItem: {
        flex: 1/2,
        padding: 4,
        height: 100,
        aspectRatio: 1
    },
    Item: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: colors.text
    }
});