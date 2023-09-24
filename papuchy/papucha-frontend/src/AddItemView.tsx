import { Text, TextInput, View, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { useState, useRef } from 'react';
import { colors } from './styles/colorscheme';
import Button from './commonViews/Button';
import { ItemData } from './ItemData';


// const FormField(({description, placeholder, value, callback, ref, nextRef, onChangeText}) => {
//     return (
//         <>
//             <Text style={styles.label}>description:</Text>
//             <TextInput
//                 style={styles.input}
//                 onChangeText={onChangeText}
//                 value={value}
//                 placeholder={placeholder}
//                 placeholderTextColor={colors.inputPlaceholder}
        
//                 enterKeyHint="next"
//                 onSubmitEditing={() => nextRef?.current?.focus() }
//                 blurOnSubmit={!nextRef}
//                 ref={ref}
//             />
//         </>
//     )
// })

export function AddItemView({onAdded}: {onAdded:(ItemData)=>void}) {

    const [status, setStatus] = useState("");


    const [data, setData] = useState({
        name: "",
        type: "",
        color: ""
    });

    const dataChangeCallback = (propName: keyof ItemData) => (value) => {
        setStatus("");
        setData({
            ...data,
            [propName]: value
        })
    }


    const onAddPress = () => {
        try {
            onAdded({
                name: data.name,
                type: data.type,
                color: data.color,
                created: Date.now()
            })
            setStatus("success");
        } catch (e) {
            setStatus(`error:${e}`);
        }


    }

    const refs = {
        // name: useRef<TextInput>(),
        color: useRef<TextInput>(),
        type: useRef<TextInput>(),
    }

    return (
        // <KeyboardAvoidingView style={styles.AddItemView}>
        <View style={styles.AddItemView}>
            <View style={styles.inputsWrapper}>
                <Text style={styles.label}>name:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={dataChangeCallback("name")}
                    value={data.name}
                    // placeholder=''
                    // placeholderTextColor={colors.inputPlaceholder}

                    enterKeyHint="next"
                    onSubmitEditing={() => refs.type.current?.focus() }
                    blurOnSubmit={false}
                    // ref={refs.name}
                />
                <Text style={styles.label}>type:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={dataChangeCallback("type")}
                    value={data.type}
                    // placeholder=''
                    // placeholderTextColor={colors.inputPlaceholder}

                    enterKeyHint="next"
                    onSubmitEditing={() => refs.color.current?.focus()}
                    blurOnSubmit={false}
                    ref={refs.type}
                />
                <Text style={styles.label}>color:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={dataChangeCallback("color")}
                    value={data.color}
                    // placeholder=''
                    // placeholderTextColor={colors.inputPlaceholder}

                    enterKeyHint="done"
                    // onSubmitEditing={}
                    // blurOnSubmit={false}
                    ref={refs.color}
                />
                <View style={styles.formFooter}>
                    {status && <Text style={styles.text}>{status}</Text>}
                    <Button onPress={onAddPress} title="Add item"/>
                </View>
            </View>


        {/* </KeyboardAvoidingView> */}
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
    inputsWrapper: {
        flex: 1,
        padding: 20,
        alignItems: "flex-start",
        flexWrap: "wrap",
        flexDirection: 'row'
    },
    label: {
        color: colors.text,
        width: "30%",
        marginVertical: 5,
        lineHeight: 40,
        textAlign: "center",
        height: 40,
        textTransform: 'uppercase'
    },
    input: {
        width: "70%",
        marginVertical: 5,
        height: 40,
        borderWidth: 0.5,
        borderRadius: 4,
        paddingLeft: 12,
        paddingRight: 12,
        color: colors.text
    },
    formFooter: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
});