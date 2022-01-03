import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        padding:10,
    },
    top_container:{
        marginLeft:7,
        flex:1,
    },
    inner_container:{
        flexDirection:'row',
    },
    name_rate_container:{
        flexDirection:'row',
        justifyContent:'space-between', 
        alignItems:'center'
    },
    bottom_container:{
        
    },
    name:{
        fontSize:20,
        fontWeight:'bold'
    },
    rate:{
        fontWeight:'bold',
        fontSize:15,
        marginLeft:50,
    },
    genre:{
       fontSize:13,
    },
    brief:{
        marginTop:10
    },
    cast:{
    },
    director:{
        fontSize:15,
        fontStyle:'italic',
        fontWeight:'bold'
    },
    text:{
       marginTop:15,
       fontWeight:'bold'

    },
    image:{
        width:160,
        height:260,
    },
    
})