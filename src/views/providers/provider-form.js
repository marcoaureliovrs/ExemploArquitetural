import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import { Text, Header, Right, Left, } from '@codler/native-base';
import { connect } from 'react-redux';

import {
    getProviders,
    saveProvider,
    updateProvider,
    deleteProvider,
} from '../../store/actions'

import InputText from '../../shared/inputs/input';

import IconButton from '../../shared/buttons/icon-button';

import { MaskService } from 'react-native-masked-text';

import styles from './providers.styles';
//import { Header } from '../../shared/headers';

class ProviderForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            provider: {
                id: '',
                fantasy_name: '',
                real_name: '',
                cnpj: '',
                address: '',
                city: '',
                create_date: '',
                update_date: '',
            }

        }
    }

    componentDidMount() {

        this.loadProviders();

        console.log(this.props.providers)

    }

    async loadProviders() {
        try {
            const response = this.props.getProviders();

            console.log(response);

        } catch (e) {

            console.log(e);

        }
    }


    onChangeHandler(field, value) {
        this.setState({ provider: { ...this.state.provider, [field]: value } });
    }

    async saveOrUpdate() {
        console.log(this.state.provider)
        console.log(this.props.providers)
        try {
            let response = {}
            if (this.state.provider.id === '') {
                response = await this.props.saveProvider(this.state.provider);
            } else {
                response = await this.props.updateProvider(this.state.provider);
            }

            console.log(response);

        } catch (e) {
            console.log(e);
            if (e.response) {
                console.log(e.response);
            }
        }
        //} finally {
          //  this.props.navigation.goBack();
        //}

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
                        label='Nome Fantasia'
                        autoCapitalize='none'
                        returnKeyType='next'
                        value={this.state.provider.fantasy_name}
                        onChangeText={value => this.onChangeHandler('fantasy_name', value)}


                        getRef={(input) => { this.fantasy_name = input; }}
                        onSubmitEditing={() => { this.real_name._root.focus(); }}
                    />

                    <InputText
                        label='Razão Social'
                        autoCapitalize='none'
                        returnKeyType='next'
                        value={this.state.provider.real_name}
                        onChangeText={value => this.onChangeHandler('real_name', value)}


                        getRef={(input) => { this.real_name = input; }}
                        onSubmitEditing={() => { this.cnpj._root.focus(); }}
                    />

                    <InputText
                        label='CNPJ'
                        autoCapitalize='none'
                        returnKeyType='next'
                        value={this.state.provider.cnpj}
                        onChangeText={value => this.onChangeHandler('cnpj', MaskService.toMask('cnpj', value))}


                        getRef={(input) => { this.cnpj = input; }}
                        onSubmitEditing={() => { this.city._root.focus(); }}
                    />

                    <InputText
                        label='Cidade'
                        autoCapitalize='none'
                        returnKeyType='next'
                        value={this.state.provider.city}
                        onChangeText={value => this.onChangeHandler('city', value)}


                        getRef={(input) => { this.city = input; }}
                        onSubmitEditing={() => { this.address._root.focus(); }}
                    />


                    <InputText
                        label='Endereço'
                        autoCapitalize='none'
                        returnKeyType='next'
                        value={this.state.provider.address}
                        onChangeText={value => this.onChangeHandler('address', value)}


                        getRef={(input) => { this.address = input; }}
                    //onSubmitEditing={() => { }}
                    />

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
    saveProvider,
    updateProvider,
    deleteProvider,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProviderForm);