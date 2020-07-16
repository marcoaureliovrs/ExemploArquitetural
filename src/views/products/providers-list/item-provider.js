import React from 'react';
import {
    View,
    Image,
    Platform,
    TouchableNativeFeedback,
    TouchableHighlight,
} from 'react-native';
import { Text } from "@codler/native-base";
import PropTypes from 'prop-types';
import styles from './item-provider.styles';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const ListItem = props => {
    const { object, navigateTo, isEditable = false, onDeleteItem } = props;
    const { productName } = object;

    const Touchable = Platform.select({
        android: TouchableNativeFeedback,
        ios: TouchableHighlight,
        default: TouchableHighlight,
    });

    


    return (
        <Touchable
            underlayColor='rgba(0, 0, 0, 0.2)'
            useForeground
            background={TouchableNativeFeedback.Ripple()}
            onPress={() => navigateTo({ object })}>
            <View style={styles.line} shouldRasterizeIOS={true} renderToHardwareTextureAndroid={true}>

                <ShimmerPlaceHolder
                    style={{ width: 52, height: 52 }}
                    autoRun={true}
                    visible={props.shimmerEfect}>

                </ShimmerPlaceHolder>


                <View style={styles.contentLine}>
                    <ShimmerPlaceHolder
                        style={{borderRadius: 20 }}
                        width={150}
                        autoRun={true}
                        visible={props.shimmerEfect}>

                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.lineText}>
                            {productName}
                        </Text>

                    </ShimmerPlaceHolder>
                </View>
            </View>
        </Touchable>
    );
}

ListItem.propTypes = {
    object: PropTypes.object, 
    navigateTo: PropTypes.func, 
    isEditable: PropTypes.bool, 
    onDeleteItem: PropTypes.func,
}

export default ListItem;