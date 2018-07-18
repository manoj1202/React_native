import React from "react"
import {Text,View} from "react-native"

//class Header extends React.Component{
//    render(){
//        return(
//            <Text>
//               Albums!!
//            </Text>
//        )
//    }
//}

const Header = () => {
 const {textStyle, viewStyle} = styles
            return(
              <View style={viewStyle}>
                <Text style={textStyle}>
                   Albums !
                </Text>
              </View>
            )
}

const styles = {
    textStyle:{
        fontSize:20,
    },
    viewStyle:{
        backgroundColor: "#F8F8F8",
        justifyContent: "center",
        alignItems: "center",
        height : 60,
        paddingTop: 15
    }
}


export default Header;