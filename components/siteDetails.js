import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';



const OtherContacts = props => {
    const othercontacts = props.contacts;
    return (
    <View style={styles.othercontacts}>
        <CustomText>Other Contacts</CustomText>
        {othercontacts.map((person,index) => 
            <View key={index} style={styles.contactInfo}>
                <CustomText style={{flex:0.4}}>{person['name']}</CustomText>
                <CustomText style={{flex:0.3}}>{person['phone']}</CustomText>
            </View>            
            )}        
    </View>
    );
}

const CustomText = (props) => {
    var style = Object.assign({}, styles.text, props.style);

    return (<Text style={style}>{props.children}</Text>);
};



export default SiteDetails = (props) => {
    const { id,image,name,address,contacts } = props.route.params || "" ;
    const mainContact = contacts[0] || [];
    return (
        <>
            <View style={styles.container}  testID={`site-detail-`+id}>
                <View style={styles.header}>
                    <View style={styles.imageContainer}>
                        <Image source={{uri:image}}  style={{height:"100%",width:"100%"}} />
                    </View>
                    <View style={styles.headerText}>
                        <View>
                            <CustomText >Name:</CustomText>                                
                            <CustomText>{name}</CustomText>                            
                        </View>
                        <View>
                            <CustomText>Main Contact:</CustomText>
                            <CustomText>{mainContact['name']}</CustomText>
                        </View>                      
                    </View>
                </View>
                <View style={{height:"10%"}}>
                    <CustomText>Address:</CustomText>
                    <CustomText>{address}</CustomText>
                </View>
                <View style={{height:"20%"}}>
                    <CustomText>Phone:</CustomText>
                    <View style={styles.contactInfo}>
                        <CustomText style={{flex:0.5}}>{mainContact['phone'] || 'Not Available'}</CustomText>
                        <CustomText style={{flex:0.2}}>Work</CustomText>
                    </View>
                    <View style={styles.contactInfo}>
                        <CustomText style={{flex:0.5}}>{mainContact['phone_home'] || 'Not Available'}</CustomText>
                        <CustomText style={{flex:0.2}}>Home</CustomText>
                    </View>
                </View>
                <View style={{height:"10%"}}>
                    <CustomText>Email:</CustomText>
                    <View style={styles.contactInfo}>
                        <CustomText style={{flex:0.5}}>{mainContact['email'] || 'Not Available'}</CustomText>
                        <CustomText style={{flex:0.2}}>Work</CustomText>
                    </View>                    
                </View>
                <OtherContacts contacts={contacts.slice(1)} />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        width:"90%",
        marginLeft: "5%",
        marginTop: "5%", 
       
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: "40%",
        fontFamily: 'Roboto'

    },
    imageContainer: {
        flex: 0.45,
        height: 150,
        borderColor: 'black',
        borderWidth: 1
    },
    headerText: {
        flex: 0.45,
        height: 120,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    contactInfo: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    othercontacts: {
        height: "20%",
    },
    text: {
        fontFamily: 'serif'
    }
    
})