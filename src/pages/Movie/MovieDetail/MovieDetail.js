import React from 'react';
import {View, Text ,ActivityIndicator,TouchableOpacity,Image,scro, ScrollView} from 'react-native';
import CommentCard from '../../../components/Cards/CommentCard/';
import MovieCard from '../../../components/Cards/MovieCard';
import useFetch from '../../../hooks/useFetch';
import styles from './MovieDetail.styles';

const URL='http://10.0.3.2:3000/movies';

export default function MovieDetail({route,navigation,movie}) {

    const {id}=route.params;


    const{loading,
            error,
        data:movieData,}=useFetch(`${URL}/${route.params.id.id}`);
    

    const{data:movieFilterData}=useFetch(`${URL}?genre_like=${route.params.id.genre}`);


    if(loading){
        return <ActivityIndicator size="large"/>;
    }
    if(error){
        return <Text>{error}</Text>;
    }

    const handleMovieCommentSelect=(id)=>{
        
        navigation.navigate("MovieCommentPage",{id});
    };

    console.log(id.genre);
    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
            <Image style={styles.image} source={{uri:movieData.image}} />
            <View style={styles.top_container}>
                <View style={styles.name_rate_container}>
                    <Text style={styles.name}>{movieData.name}</Text>
                    <Text style={styles.rate}>{movieData.rate}</Text>
                </View>
                <Text style={styles.genre}>{movieData.genre}</Text>
                <Text style={styles.director}>Director: {movieData.director}</Text>
                <Text style={styles.cast}>Cast: {movieData.cast}</Text>
            </View>
            </View>       
            <View style={styles.bottom_container}>
                <Text style={styles.brief}>{movieData.brief}</Text>
                <TouchableOpacity onPress={()=>handleMovieCommentSelect(movieData.id)}>
                <Text style={styles.text}>See Reviews</Text>  
                </TouchableOpacity >
            </View>
            <View>
                <ScrollView horizontal>
                   {movieFilterData.slice(-4).map((item)=>{
                    return <MovieCard succest={true} movie={item}/>;
                })}
                </ScrollView>
            </View>
        </View> 
    )
}

