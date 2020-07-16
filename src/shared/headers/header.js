import React, { Component } from 'react';
import {
    Header,
    Left,
    Right,
    Text,
} from '@codler/native-base';

import {
    Platform,
    StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './headers.styles.js';
import IconButton from '../buttons/icon-button';


const HeaderComponent = props => {
    const {
        navigateTo = null,
        title = '',
        goBack,
        menu,
        navigation,

    } = props;

    const renderTypeRightContent = () => {
        return (
            <Right>
                {props.children}
            </Right>
        )
    }

    const renderMenuOrBackButton = () => {
        if (goBack) {
            return (
                <IconButton
                    fontSize={30}
                    color='white'
                    name='md-arrow-back'
                    onPress={() => goBack() }
                />
            )
        } else {
            return (
                <View>

                </View>
            )
        }
    }


    const renderLogo = () => {
        return(
            <Text style={styles.titleHeader}> {title} </Text>
        )
    }

    if (Platform.OS === 'android') {
        StatusBar.setTranslucent(true);
    }

    return (
        <Header transparent androidStatusBarColor="transparent" >
            <Left style={styles.leftSide}>
                {renderMenuOrBackButton()}
                {renderLogo()}
            </Left>

            {renderTypeRightContent()}
        </Header >
    );

}

HeaderComponent.propTypes = {
    navigateTo: PropTypes.func,
    title: PropTypes.string,
    goBack: PropTypes.func,
    menu: PropTypes.any,
    navigation: PropTypes.object,
}

export default HeaderComponent;