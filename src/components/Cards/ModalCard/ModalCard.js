import React from 'react'
import { View, Text, FlatList,TouchableOpacity } from 'react-native'
import Modal from "react-native-modal";
import styles from './ModalCard.styles';
import useFetch from '../../../hooks/useFetch';

const URL='http://10.0.3.2:3000/genres';

export default function ModalCard({visible,onClose,onSelect,onSearch}) {

    
    const array=["HORROR","COMEDY","DRAMA"];

    const handleCategory=(name)=>{
        onClose();
        onSelect(name);
        onSearch(name);
    }

    const renderMovie=({item})=><TouchableOpacity onPress={()=>handleCategory(item)}><Text>{item}</Text></TouchableOpacity>


    return (
        <Modal
        style={styles.modal}
        isVisible={visible}
        onSwipeComplete={onClose}
        onBackdropPress={onClose}
        onBackButtonPress={onClose}
        swipeDirection="down"
    >
        <View style={styles.container}>
        <FlatList data={array} renderItem={renderMovie}/>
        </View>
    </Modal>
    )
}
