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
        fontSize:40,
    },
    viewStyle:{
        backgroundColor:"#F8F8F8"
    }
}


export default Header;