import {  StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'#bdbdbd',
        margin:10,
        flexDirection:'row',
        flex:1,
    },
    inner_container:{
        margin:7,
        flex:1,
    },
    name_rate_container:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    image:{
        width:100,
        height:150,
    },
    b:{
        flexDirection:'row',
        flex:1,
    },
    name:{
        fontSize:15,
        fontWeight:'bold',
    },
    rate:{
        fontSize:15,
        fontWeight:'bold',
        
    },
    genre:{
        fontStyle:'italic',
        fontSize:12,
    },
    brief:{
        marginTop:13,
    },
})