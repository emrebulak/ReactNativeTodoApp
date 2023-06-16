import { FlatList, Keyboard } from 'react-native';
import React, { useEffect } from 'react';
import styles from './Todos.styles';

//Componenets
import Todo from '../Todo';

const Todos = ({ todos, setTodos }: any) => {

    const renderItem = ({ item }: any) => <Todo todos={todos} setTodos={setTodos} todo={item}></Todo>

    return (

        <FlatList onScrollBeginDrag={Keyboard.dismiss} keyExtractor={(item) => item.id} data={todos} renderItem={renderItem} />


    )
}

export default Todos;