import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';



export default SiteLink = props => {
    //console.log(props.navigation);
    const  { id, name, address, image } = props.siteData ;
    return (
        <TouchableOpacity testID={`site-link-` + id} onPress={() => props.navigation.navigate('Site Details', props.siteData )} >
            <View style={styles.container}  >
                <Image source={{uri: image}} style={{width: 70, height: 70}} />
                <View style >
                    <Text style >{name}</Text>
                    <Text style >{address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        height: 100,
        width: "90%",     
        marginLeft: "5%",   
        marginTop: 20,
        padding: "3%",
        borderColor: 'black',
        borderWidth: 1,
    },
    imageContainer: {
        flex : 0.3,
        height: 70,
        
    },
    infoContainer: {
        flex: 0.7,

    }
});