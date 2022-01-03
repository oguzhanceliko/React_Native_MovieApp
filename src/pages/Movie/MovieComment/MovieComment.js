import React,{useState,useEffect} from 'react'
import { View, Text,ActivityIndicator,StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import CommentCard from '../../../components/Cards/CommentCard/';
import CommentInput from '../../../components/CommentInput/';
import useFetch from '../../../hooks/useFetch';

const URL='http://10.0.3.2:3000/comments';

export default function MovieComment({route}) {

    const[commentList,setCommentList]=useState();

    const {id}=route.params;
    
    const{loading,error,data}=useFetch(`${URL}?movieId=${id}`);

    //useFetchten gelen datayı state atma işlemi.
    useEffect(()=>{
        setCommentList(data);

    },[data])

    const renderComment=({item})=><CommentCard movie={item} />;

    if(loading){
        return <ActivityIndicator size="large"/>;
    }

    if(error){
        return <Text>{error}</Text>;
    }


    const sendList=(comment)=>{
        const sendData={comment:comment,id:Math.random()}
        setCommentList([...commentList,sendData])
        console.log(commentList);
    }

    return (
        <View style={styles.container}>
            <FlatList data={commentList} renderItem={renderComment}/> 
            <CommentInput sendlist={sendList}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    inner_container: {
      flex: 1,
    },
  });