import React from 'react';


export const AppContext = React.createContext();


export class AppContextProvider extends React.Component {
    constructor(props){
        super(props);

        this.updateAppContext = this.updateAppContext.bind(this);
        this.state = {
            allSites : [{
                "id": "0001",
                "name": "Building #1",
                "image": "https://s3.amazonaws.com/decom_uploads/external/building1.jpg",
                "address": "120 Broadway, New York, NY 10271",
                "contacts": [{
                        "name": "Mark Doe",
                        "phone": "212-312-3100",
                        "email": "mark@building1.com"
                    },
                    {
                        "name": "John Smith",
                        "phone": "212-312-3123",
                        "phone_home": "212-312-0047",
                        "email": "john@building1.com"
                    }
                ]
            },
            {
                "id": "0002",
                "name": "Hub @ Moore",
                "image": "https://s3.amazonaws.com/decom_uploads/external/building2.jpg",
                "address": "71 N Moore St, New York, NY 10013",
                "contacts": [{
                        "name": "Drew Ortiz",
                        "phone": "212-741-3100",
                        "email": "drew@hub.com"
                    },
                    {
                        "name": "David Wayne",
                        "phone": "512-312-3123",
                        "email": "david@hub.com"
                    },
                    {
                        "name": "Mark Twain",
                        "phone": "312-757-0078",
                        "email": "mark@hub.com"
                    }
                ]
            },
            {
                "id": "0003",
                "name": "Restaurant",
                "image": "https://s3.amazonaws.com/decom_uploads/external/building3.jpg",
                "address": "146 Essex St, New York, NY 10002",
                "contacts": [{
                        "name": "Brian Martin",
                        "phone": "512-369-3100",
                        "phone_home": "512-369-3100",
                        "email": "brian@restaurant.com"
                    },
                    {
                        "name": "Peter Center",
                        "phone": "773-852-8504",
                        "email": "peter@restaurant.com"
                    }
                ]
            },
            {
                "id":"0004",
                "name":"Bar on Buena",
                "image": "https://s3.amazonaws.com/decom_uploads/external/building1.jpg",
                "address":"910 W Buena Ave, Chicago, IL 60613",
                "contacts":[]
            },
            {
                "id":"0005",
                "name":"Hotel",
                "image": "https://s3.amazonaws.com/decom_uploads/external/building2.jpg",
                "address":"75 Wall St, New York, NY 10005",
                "contacts":[
                    {
                        "name": "David Wayne",
                        "phone": "512-312-3123",
                        "email": "david@hotel.com"
                    }
                ]
            }
        ],
            loadingError : ''
        };
    }


    updateAppContext(siteData,errorMesage=''){
        this.setState( { allSites: siteData, loadingError: errorMesage });
    }

    render() {
        return (
            <AppContext.Provider value={{
                allSites:this.state.allSites,
                loadingError: this.state.loadingError,
                updateAppContext: this.updateAppContext,
            }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

