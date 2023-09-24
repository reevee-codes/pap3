import { Text, View, StyleSheet, FlatList } from 'react-native';
import { colors } from './styles/colorscheme';

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

    const collapsed = false; // enable when shrinking to show add form
    return (
        <View style={styles.ItemListView}>
            <FlatList
                // style={styles.List}
                horizontal={collapsed}
                numColumns={!collapsed ? 2: undefined}
                data={[...items].sort((a, b)=> b.created - a.created)}
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
        // padding: 16,
    },
    ListItem: {
        // flex: 1/2,
        // maxWidth: 300,
        width: "50%",
        padding: 8,
        // height: 100,
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