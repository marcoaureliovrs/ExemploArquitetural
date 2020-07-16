import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import { Text, Header, } from '@codler/native-base';
import { connect } from 'react-redux';

import {
    getProducts,
} from '../../store/actions'

import IconButton from '../../shared/buttons/icon-button';
import SampleList from './providers-list';


import styles from './products.styles';
//import { Header } from '../../shared/headers';



class Products extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFetching:false,

        }
    }

    componentDidMount() {

        this.loadProducts();

        console.log(this.props.products)

    }

    async loadProducts() {
        try {
            const response = await this.props.getProducts();

            console.log(response);

        } catch (e) {

            console.log(e);

        }
    }

    async onRefresh() {
        this.setState({ isFetching: true });
    
        await this.loadProducts();
    
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
                        onPress={() => this.props.navigation.navigate('ProductForm')}
                    />

                    <View style={{flex:1}}>

                    <SampleList
                        data={this.props.products}
                        refreshing={this.state.isFetching}
                        shimmerEfect={true}
                        onRefresh={() => this.onRefresh()}
                        onPressObject={pageParams => {
                            this.props.navigation.navigate('ProductForm', pageParams);
                        }}
                    />

                    </View>

                </View>
            </View>
        );
    }

}

const mapStateToProps = state => {
    const { products } = state;
    return { products }
}

const mapDispatchToProps = {
    getProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);