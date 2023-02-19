import React from "react";
import { Text } from 'react-native';
import styles from '../../styles/navStyle';

export function Post(props) {
    return (
        <Text style={styles.text}>
            {props.name}
        </Text>
    )
}