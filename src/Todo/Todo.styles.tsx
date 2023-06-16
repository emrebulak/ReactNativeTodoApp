import { StyleSheet } from "react-native";

export default StyleSheet.create({

    button: {
        margin: 10,
        padding: 10,
        borderRadius: 10
    },
    active_text: {
        color: 'white',
        fontSize: 18,
        textDecorationLine: 'line-through',
    },
    passive_text: {
        color: 'white',
        fontSize: 18,
        textDecorationLine: 'none'

    },
    active: {
        backgroundColor: '#3498db',


    },
    passive: {
        backgroundColor: '#e67e22',

    }
});