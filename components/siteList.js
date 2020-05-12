import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {AppContext} from '../store';
import SiteLink from './siteLink';
import API_URL from '../config/constants';

class SiteList extends React.Component {
    constructor(props){
        super(props);
    }

    /* componentDidMount(){
        fetch(API_URL).then(res => this.props.updateAppContext(res.data.sites)).catch(err => this.props.updateAppContext(err.message));
    } */



    render() {
        const {allSites} = this.props ;
        //console.log(this.props.navigation);
        return (
            <> 
                <ScrollView  style={styles.container}>
                    {allSites.map( siteData => <SiteLink  key={siteData.id} siteData={siteData} navigation={this.props.navigation}/>)}
                </ScrollView>        
            </>
        );        
    }
}

export default (props) => (
    <AppContext.Consumer>
        {
            ({allSites,updateAppContext,loadingError}) => (
                <SiteList  {...props} allSites={allSites} updateAppContext={updateAppContext} loadingError={loadingError} />
            )
        }
    </AppContext.Consumer>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:  'column',        
    }
})