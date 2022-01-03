import React from 'react'
import { View,TextInput,Text} from 'react-native'
import styles from './Input.styles'


const Input = ({onChangeText,label,placeholder,keyboardType}) => {
    return (
        <View style={styles.container}>
        <View style={styles.upper_container}>
            <Text>{label}</Text>
            <TextInput style={styles.name_input}
                onChangeText={onChangeText}
                placeholder={placeholder}
                keyboardType={keyboardType}
            />
        </View>
        
    </View>
    )
}

export default Input

