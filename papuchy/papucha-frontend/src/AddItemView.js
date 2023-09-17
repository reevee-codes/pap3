import { Text, TextInput, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { colors } from './colorscheme';
import Button from './Button';


export function AddItemView({onAdded}) {

    const [status, setStatus] = useState("");


    const [data, setData] = useState({
        name: "",
        type: "",
        color: ""
    });
    const dataChangeCallback = (propName) => (value) => {
        setStatus("");
        setData({
            ...data,
            [propName]: value
        })
    }

    // const [name, setName] = useState("");
    // const [type, setType] = useState("");
    // const [color, setColor] = useState("");

    const onAddPress = () => {
        try {
            onAdded({
                name: data.name,
                type: data.type,
                color: data.color
            })
            setStatus("success");
        } catch (e) {
            setStatus(`error:${e}`);
        }

    }

    // const onNameChange = (name) => {
    //     data.name = name;
    //     setData(data)
    // }

    return (
        <View style={styles.AddItemView}>
            <Text style={styles.text}>add item:</Text>
            <Text style={styles.text}>name:</Text>
            <TextInput
                style={styles.input}
                onChangeText={dataChangeCallback("name")}
                value={data.name}
                placeholder='PAPAYA'
            />
            <Text style={styles.text}>type:</Text>
            <TextInput
                style={styles.input}
                onChangeText={dataChangeCallback("type")}
                value={data.type}
                placeholder='MERCEDESS'
            />
            <Text style={styles.text}>color:</Text>
            <TextInput
                style={styles.input}
                onChangeText={dataChangeCallback("color")}
                value={data.color}
                placeholder='yellow'
            />
            
            {status && <Text style={styles.text}>{status}</Text>}
            <Button onPress={onAddPress} title="ADD"/>
        </View>
    );
}

export const styles = StyleSheet.create({
    AddItemView: {
        borderWidth: 1,
        flex: 1,
        backgroundColor: colors.background,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: colors.text
    },
    input: {
        color: colors.text
        // placeholderTextColor="#F00"
    }
});