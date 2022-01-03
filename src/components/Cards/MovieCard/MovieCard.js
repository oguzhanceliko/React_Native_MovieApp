import React from 'react'
import { View, Text,TouchableWithoutFeedback ,FlatList,Image} from 'react-native'

import styles from './MovieCard.styles';

export default function MovieCard({movie,onSelect,succest}) {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:movie.image}} />
            <View style={styles.inner_container}>
                <View style={styles.name_rate_container}>
                <Text style={styles.name}>{movie.name} </Text>
                <Text style={styles.rate}>{movie.rate}</Text>
                </View>
          
            <FlatList numColumns={3} data={movie.genre} renderItem={({item,index}) =><Text style={styles.genre} key={index}>{item}</Text>}/>
            {
               succest ? null: <Text numberOfLines={2} style={styles.brief}>{movie.brief}</Text>    
            }
      
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}


