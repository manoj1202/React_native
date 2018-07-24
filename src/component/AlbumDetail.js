import React from "react"
import {View, Text} from "react-native"
import Card from "./card"
import CardSection from "./CardSection"

const AlbumDetail= (props) => {
    return(
       <Card>
            <CardSection>
            <View></View>
            <View style={style.headerContentStyle}>
                <Text>{props.album.title}</Text>
                <Text>{props.album.artist}</Text>
            </View>
            </CardSection>
        </Card>
    )
}

const style={
    headerContentStyle:{
        flexDirection:"column",
        justifyContent:"space-around"
    }
}

export default AlbumDetail
