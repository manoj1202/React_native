import React from "react"
import {View, Text, Image} from "react-native"
import Card from "./card"
import CardSection from "./CardSection"

const AlbumDetail= ({album}) => {
    const {title,artist,thumbnail_image} = album;
    return(
       <Card>
            <CardSection>
            <View>
                <Image source={{uri:thumbnail_image }} />
            </View>
            <View style={style.headerContentStyle}>
                <Text>{title}</Text>
                <Text>{artist}</Text>
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
