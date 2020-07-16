import React, { PureComponent } from 'react';
import {
    TouchableNativeFeedback,
    TouchableHighlight,
    Platform,
    View,
} from 'react-native';
import {
    Icon, Text,
} from '@codler/native-base';
import styles from './button.styles';
import PropTypes from 'prop-types';

class IconButton extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            shadowSet: {
                //borderColor: '#ddd',
                //shadowColor: '#000000',
                textShadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.4,
                textShadowRadius: 2,
                elevation: 3,
            }
        }
    }

    renderTextBottom = () => {
        const { color = 'grey', text, textBottomSize = 12 } = this.props;
        if (text) {
            return (
                <Text style={{ color: color, fontSize: textBottomSize }}>
                    {text}
                </Text>
            );
        }
    }

    renderPointNotification() {
        const { backgroundColorPointNotification = '#f53939' } = this.props;
        if (this.props.pointNotification) {
            return (
                <View style={[
                    styles.iconPointNotification,
                    { backgroundColor: backgroundColorPointNotification }
                ]} />
            )
        }
    }
    

    /**
     * Gambiarra gerada por causa do preuiçoso do designer
     */
    renderBackground() {
        if (this.props.backgroundColor) {
            return (
                <View style={
                    {
                        backgroundColor: this.props.backgroundColor,
                        position: 'absolute',
                        top: 13,
                        bottom: 15,
                        right: 15,
                        left: 15,
                        borderRadius: 10

                    }} />

            )
        }
    }

    render() {
        const {
            name,
            theme = 'Ionicons',
            color = 'grey',
            fontSize = 25,
            onPress = () => { },
            onPressedHadled = () => { },
            shadow = false,


        } = this.props;

        const Touchable = Platform.select({
            android: TouchableNativeFeedback,
            ios: TouchableHighlight,
            default: TouchableHighlight,
        });

        return (
            <Touchable
                useForeground
                onPress={() => {
                    onPress()
                    onPressedHadled();
                }}
                underlayColor='rgba(0, 0, 0, 0.2)'
                background={TouchableNativeFeedback.Ripple()}>

                <View style={styles.touchSpace}>
                    {this.renderPointNotification()}
                    {this.renderBackground()}
                    <Icon
                        type={theme}
                        name={name}
                        style={[
                            styles.icon,
                            {
                                color: color,
                                fontSize: fontSize,
                            },
                            shadow ? this.state.shadowSet : {}]} />
                    
                    {this.renderTextBottom()}
                </View>
            </Touchable>
        );
    }
}

IconButton.propTypes = {
    name: PropTypes.string,
    theme: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.number,
    onPress: PropTypes.func,
    onPressedHadled: PropTypes.func,
    shadow: PropTypes.bool,
}

export default IconButton;