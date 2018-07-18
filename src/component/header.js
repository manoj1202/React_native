import React from "react"
import {Text} from "react-native"

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

                <Text style={textStyle}>
                   Albums !
                </Text>
            )
}

const styles = {
    textStyle:{
        fontSize:40,
    }
}


export default Header;