import { View, Text } from 'react-native';
import React from 'react';
import styles from './Header.styles';

const Header = ({ title, count }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.count}>{count}</Text>
        </View>
    )
}

export default Header;