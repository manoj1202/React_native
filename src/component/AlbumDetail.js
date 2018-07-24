import React from "react"
import {View, Text, Image} from "react-native"
import Card from "./card"
import CardSection from "./CardSection"
import Button from "./Buttons"

const AlbumDetail= ({album}) => {
    const {title,artist,thumbnail_image,image} = album;
    return(
       <Card>
            <CardSection>
            <View style={styles.thumbnailContainerStyle}>
                <Image stye={styles.thumbnailStyle} 
                   source={{uri:thumbnail_image }} />
            </View>
            <View style={styles.headerContentStyle}>
                <Text style={styles.headerTextStyle}>{title}</Text>
                <Text>{artist}</Text>
            </View>
            </CardSection>
            
            <CardSection>
                <Image style={styles.imageStyle}
                        source={{uri:image}} />
            </CardSection>
            
            <CardSection>
                <Button onPress={() => console.log(title)} />
            </CardSection>
        </Card>
    )
}

const styles={
    headerContentStyle:{
        flexDirection:"column",
        justifyContent:"space-around"
    },
    headerTextStyle:{
        fontSize:18
    },
    thumbnailStyle:{
        height: 50,
        width : 50
    },
    thumbnailContainerStyle:{
        justifyContent:"center",
        alignItems:"center",
        marginLeft:10,
        marginRight:10
    },
    imageStyle:{
        height:300,
        flex:1,
        width: null,
    }
     
}

export default AlbumDetail
