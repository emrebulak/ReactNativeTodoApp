import { View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import styles from './Footer.styles';

const Footer = ({ add, onadd, placeholder, butonTitle }: any) => {


    const [todo, setTodo] = useState('');


    const addToList = () => {
        let data = {
            id: add.length == 0 ? 0 : add[add.length - 1].id + 1,
            title: todo,
            done: false
        }

        onadd([...add, data]);
        setTodo('');
    }


    return (
        <View style={styles.container}>
            <TextInput inputMode='text' value={todo} onChangeText={(item) => setTodo(item)} placeholder={placeholder} style={styles.input} />
            <View style={styles.inner_container}>
                <Button disabled={todo == ''} onPress={addToList} title={butonTitle}></Button>
            </View>
        </View>
    )
}

export default Footer;