import React from "react"
import {Text, TouchableOpacity} from "react-native"

const Button =({onPress}) => {
    const {buttonStyle, textStyle} = styles

    return(
        <TouchableOpacity onPress={onPress } 
            style={buttonStyle}>
            <Text style={textStyle}>
                Click Me!!
            </Text>
        </TouchableOpacity>
    )
}

const styles ={
    buttonStyle:{
        flex:1,
        alignSelf: 'stretch',
        backgroundColor:"#fff",
        borderWidth: 1,
        boerderColor: "#007aff",
        marginLeft:5,
        marginRight:5
    },
    textStyle:{
        alignSelf:"center",
        color:"#007aff",
        fontSize:16,
        fontWeight:"600",
        paddingTop:10,
        paddingBottom:10


    }
}
export default Button;