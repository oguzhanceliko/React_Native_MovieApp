import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import styles from "./SearchButton.styles"

export default function SearchButton({ onPress, iconName }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
        <Text style={styles.title}>Filter</Text>
        </TouchableOpacity>
    )
}
