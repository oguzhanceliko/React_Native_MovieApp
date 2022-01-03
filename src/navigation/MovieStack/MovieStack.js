import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MovieDetail from '../../pages/Movie/MovieDetail'
import Movies from '../../pages/Movie/Movies'
import MovieComment from '../../pages/Movie/MovieComment'

const Stack = createNativeStackNavigator();

export default function MovieStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="MoviesPage"
            component={Movies}
            />
            <Stack.Screen
            name="MovieDetailPage"
            component={MovieDetail}
            />
            <Stack.Screen
            name="MovieCommentPage"
            component={MovieComment}
            />
            
        </Stack.Navigator>
    )
}
