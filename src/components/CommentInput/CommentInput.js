import React,{useState} from 'react'
import { View, Text, Alert} from 'react-native'
import Input from '../Input';
import Button from '../Button';

export default function CommentInput({sendlist}) {

    const [comment,setComment]=useState(null);

    const handleSubmit=()=>{
        sendlist(comment);
    }

    
    return (
        <View>
            <Input onChangeText={setComment} placeholder='Add Comment' label='Comment' />
            <Button onPress={handleSubmit}/>
        </View>
    )
}
