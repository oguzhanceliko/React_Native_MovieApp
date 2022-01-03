import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import styles from './CommentCard.styles';

export default function CommentCard({movie}) {
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{movie.comment}</Text>
        </View>
    )
}
