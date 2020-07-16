import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import { Text, Header, ListItem, } from '@codler/native-base';
import { connect } from 'react-redux';

import {
    getProviders,
} from '../../store/actions'

import IconButton from '../../shared/buttons/icon-button';


import styles from './providers.styles';
//import { Header } from '../../shared/headers';





class Providers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFetching:false,

        }
    }

    componentDidMount() {

        //this.loadProviders();

        console.log(this.props.providers)

    }

    async loadProviders() {
        try {
            const response = await this.props.getProviders();

            console.log(response);

        } catch (e) {

            console.log(e);

        }
    }

    async onRefresh() {
        this.setState({ isFetching: true });
    
        await this.loadProviders();
    
        this.setState({ isFetching: false });
      }


    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <Header />

                <View style={styles.viewForm}>

                    <IconButton
                        fontSize={30}
                        name='person'
                        onPress={() => this.props.navigation.navigate('ProviderForm')}
                    />

                    <View style={{flex:1}}>

                    <ListItem
                        data={this.props.providers}
                        refreshing={this.state.isFetching}
                        onRefresh={() => this.onRefresh()}
                        onPressObject={pageParams => {
                            this.props.navigation.navigate('ProviderForm', pageParams);
                        }}
                    />

                    </View>

                </View>
            </View>
        );
    }

}

const mapStateToProps = state => {
    const { providers } = state;
    return { providers }
}

const mapDispatchToProps = {
    getProviders,
}

export default connect(mapStateToProps, mapDispatchToProps)(Providers);