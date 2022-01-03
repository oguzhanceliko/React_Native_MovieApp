import React, { useState,useEffect } from 'react'
import { SafeAreaView,FlatList,ActivityIndicator,Text} from 'react-native'
import MovieCard from '../../../components/Cards/MovieCard/';
import SearchButton from '../../../components/SearchButton/';
import useFetch from '../../../hooks/useFetch';
import ModalCard from '../../../components/Cards/ModalCard/';


const URL='http://10.0.3.2:3000/movies';

export default function Movies({navigation}) {

    const [visible,setVisible]=useState(false);
    const [genre,setGenre]=useState();

    const {loading,data,error}=useFetch(URL);

    if(loading){
        return <ActivityIndicator size="large"/>;
    }

    if(error){
        return <Text>{error}</Text>;
    }

    const handleMovieSelect=(id)=>{
        navigation.navigate("MovieDetailPage",{id});
    };
    
    const renderMovie=({item})=><MovieCard movie={item} onSelect={()=>handleMovieSelect(item)}/>;
    
    const handleModalVisible=()=>{
        setVisible(!visible);
    }
 
    const handleSearch=name=>{
        console.log('search çalıştı',name);
      };
      
    return (
        <SafeAreaView>
            <FlatList data={data} renderItem={renderMovie} />
            <SearchButton iconName="plus" onPress={handleModalVisible} />
            <ModalCard
                visible={visible}
                onClose={handleModalVisible}
                onSelect={setGenre}
                onSearch={handleSearch}
            />
        </SafeAreaView>
    )
}
