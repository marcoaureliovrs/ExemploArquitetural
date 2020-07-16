import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import { Text, Header, Right, Left, } from '@codler/native-base';
import { connect } from 'react-redux';

import {
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct,
} from '../../store/actions'

import InputText from '../../shared/inputs/input';

import IconButton from '../../shared/buttons/icon-button';

import { MaskService } from 'react-native-masked-text';

import styles from './products.styles';
//import { Header } from '../../shared/headers';

class ProductForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {
                _id: '',
                productName: '',
                price: '',
                description: '',
                img_url: '',
            }
        }
    }

    componentDidMount() {

        const { navigation } = this.props;
        const { params } = navigation.state;

        this.loadProducts();

        console.log(this.props.products)



        if (params && params.object) {

            this.setState({ product: params.object });

        }




    }

    componentWillUnmount() {
        this.loadProducts();
    }

    async loadProducts() {
        try {
            const response = this.props.getProducts();

            console.log(response);

        } catch (e) {

            console.log(e);

        }
    }


    onChangeHandler(field, value) {
        this.setState({ product: { ...this.state.product, [field]: value } });
    }

    async saveOrUpdate() {
        try {
            let response = {}
            if (this.state.product._id === '') {
                response = await this.props.saveProduct(this.state.product);
            } else {
                response = await this.props.updateProduct(this.state.product);
            }

            console.log(response);

        } catch (e) {
            console.log(e);
            if (e.response) {
                console.log(e.response);
            }
        } finally {
            this.props.navigation.goBack();
        }

    }

    async deleteProduct() {
        try {
            const resonse = await this.props.deleteProduct(this.state.product)
        } catch (e) {

        } finally {
            this.props.navigation.goBack();
        }

    }

    maskService(value) {
        if (value == null) { value = 0 }
        return MaskService.toMask(
            'money',
            value,
            {
                precision: 2,
                separator: ',',
                delimiter: '.',
                unit: 'R$ ',
                suffixUnit: ''
            });
    }

    renderTrash() {
        if (this.state.product._id !== '') {
            return (
                <IconButton
                    fontSize={25}
                    color='white'
                    name='trash'
                    onPress={() => this.deleteProduct()}
                />
            )
        }
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <Header>
                    <Left>
                        <Text>Formulário</Text>

                    </Left>
                    <Right>

                       {this.renderTrash()}

                        <IconButton
                            fontSize={25}
                            color='white'
                            name='person-add'
                            onPress={() => this.saveOrUpdate()}
                        />

                    </Right>
                </Header>

                <View style={styles.viewForm}>

                    <InputText
                        label='Nome do produto'
                        autoCapitalize='none'
                        returnKeyType='next'
                        value={this.state.product.productName}
                        onChangeText={value => this.onChangeHandler('productName', value)}


                        getRef={(input) => { this.productName = input; }}
                        onSubmitEditing={() => { this.price._root.focus(); }}
                    />

                    <InputText
                        label='Preço' f
                        autoCapitalize='none'
                        returnKeyType='next'
                        value={this.maskService(this.state.product.price)}
                        onChangeText={value => {
                            if (!value.trim().includes("R$"))
                                value = `0,00${value.trim()}`

                            this.onChangeHandler('price', MaskService.toRawValue('money', value))
                        }
                        }
                        getRef={(input) => { this.price = input; }}
                        onSubmitEditing={() => { this.cnpj._root.focus(); }}
                    />

                    <InputText
                        label='Descrição'
                        autoCapitalize='none'
                        returnKeyType='next'
                        value={this.state.product.description}
                        onChangeText={value => this.onChangeHandler('description', value)}

                        getRef={(input) => { this.cnpj = input; }}
                    //onSubmitEditing={() => { this.city._root.focus(); }}
                    />

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
    saveProduct,
    updateProduct,
    deleteProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);