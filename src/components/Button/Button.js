import React from 'react'
import { View,Text,TouchableHighlight,TouchableOpacity} from 'react-native'
import styles from './Button.styles'



const Button = ({onPress}) => {
    return (
    <View style={styles.container}>
        <TouchableOpacity 
            style={styles.Button}
            onPress={onPress}>
            <Text style={styles.text} onPress={onPress}>Add</Text>
        </TouchableOpacity>
    </View>  
    )}

export default Button
