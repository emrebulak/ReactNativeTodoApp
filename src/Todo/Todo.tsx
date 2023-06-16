import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './Todo.styles';

const Todo = ({ todos, setTodos, todo }: any) => {

    const onPress = (todo: any) => {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id == todo.id) {
                todos[i].done = (!todo.done)
            }

        }
        setTodos([...todos]);

    }

    const deleteTodo = (todo: any) => {

        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id == todo.id) {
                todos.splice(i, 1);
            }

        }

        setTodos([...todos]);

    }

    return (

        <TouchableOpacity onLongPress={() => deleteTodo(todo)} onPress={() => onPress(todo)} style={[styles.button, todo.done ? styles.active : styles.passive]}>
            <Text style={todo.done ? styles.active_text : styles.passive_text}>{todo.title}</Text>
        </TouchableOpacity>

    )
}

export default Todo;