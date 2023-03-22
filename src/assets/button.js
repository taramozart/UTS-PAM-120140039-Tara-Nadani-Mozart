import * as React from 'react';
import { Text,TouchableOpacity,StyleSheet } from 'react-native';
import {Entypo} from '@expo/vector-icons'

export default function Button ({tittle,onPress,icon,color}){
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Entypo name={icon} size = {28} color={color ? color : '#f1f1f1'}></Entypo>
            <Text style={styles.text}>{tittle}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        height:40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontWeight:'bold',
        fontSize:10,
        color:'#f1f1f1',
        marginLeft:10
    }
})