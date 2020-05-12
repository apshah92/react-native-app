import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';



const OtherContacts = props => {
    const othercontacts = props.contacts;
    return (
    <View style={styles.othercontacts}>
        <Text>Other Contacts</Text>
        {othercontacts.map((person,index) => 
            <View key={index} style={styles.contactInfo}>
                <Text style={{flex:0.4}}>{person['name']}</Text>
                <Text style={{flex:0.3}}>{person['phone']}</Text>
            </View>            
            )}        
    </View>
    );
}

export default SiteDetails = (props) => {
    const { image,name,address,contacts } = props.route.params || "" ;
    const mainContact = contacts[0] || [];
    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.imageContainer}>
                        <Image source={{uri:image}}  style={{height:"100%",width:"100%"}} />
                    </View>
                    <View style={styles.headerText}>
                        <View>
                            <Text >Name:</Text>                                
                            <Text>{name}</Text>
                            <Text>Main Contact:</Text>
                            <Text>{mainContact['name']}</Text>
                        </View>                        
                    </View>
                </View>
                <View style={{height:"10%"}}>
                    <Text>Address:</Text>
                    <Text>{address}</Text>
                </View>
                <View style={{height:"20%"}}>
                    <Text>Phone:</Text>
                    <View style={styles.contactInfo}>
                        <Text style={{flex:0.5}}>{mainContact['phone'] || 'Not Available'}</Text>
                        <Text style={{flex:0.2}}>Work</Text>
                    </View>
                    <View style={styles.contactInfo}>
                        <Text style={{flex:0.5}}>{mainContact['phone_home'] || 'Not Available'}</Text>
                        <Text style={{flex:0.2}}>Home</Text>
                    </View>
                </View>
                <View style={{height:"10%"}}>
                    <Text>Email:</Text>
                    <View style={styles.contactInfo}>
                        <Text style={{flex:0.5}}>{mainContact['email'] || 'Not Available'}</Text>
                        <Text style={{flex:0.2}}>Work</Text>
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
        height: "40%"
    },
    imageContainer: {
        flex: 0.45,
        height: 150,
        borderColor: 'black',
        borderWidth: 1
    },
    headerText: {
        flex: 0.45, 
    },
    contactInfo: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    othercontacts: {
        height: "20%",
    }
    
})