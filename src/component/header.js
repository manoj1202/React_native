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
 const {textStyle} = styles
            return(
              <View>
                <Text style={textStyle}>
                   Albums !
                </Text>
              </View>
            )
}

const styles = {
    textStyle:{
        fontSize:40,
    }
}


export default Header;