import React from 'react';
import { Animated, Easing } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Providers from './views/providers/providers-list';
import ProviderForm from './views/providers/provider-form';


import Products from './views/products/products-list';
import ProductForm from './views/products/product-form';


let SlideFromRight = (index, position, width) => {
    const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
        outputRange: [0, 1, 1, 0.3, 0]
    });

    const translateX = position.interpolate({
        inputRange: [index - 1, index,],
        outputRange: [width, 0],
    })

    return { opacity: opacity, transform: [{ translateX }] }
};

let SlideFromBottom = (index, position, height) => {
    const opacity = position.interpolate({
        inputRange: [index - 1, index, index + 0.99, index + 1],
        outputRange: [0, 1, 1, 0]
    });

    /**const opacity = position.interpolate({
      inputRange: [index - 1, index - 0.99, index],
      outputRange: [0, 1, 1],
    });**/

    const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0],
    });

    /**const translateY = position.interpolate({
      inputRange: [index - 1, index, index + 0.99, index + 1],
      outputRange: [50, 0, 0, 0]
    });*/

    return { opacity: opacity, transform: [{ translateY }] }
};

let CollapseTransition = (index, position) => {
    const opacity = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [0, 1, 0]
    });

    const scaleY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [0, 1, 1]
    });

    return {
        opacity,
        transform: [{ scaleY }]
    }
}

const TransitionConfiguration = () => {
    return {
        transitionSpec: {
            duration: 450,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: (sceneProps) => {
            const { layout, position, scene } = sceneProps;
            const width = layout.initWidth;
            const height = layout.initHeight;
            const { index, route } = scene
            const params = route.params || {}; // <- That's new
            const transition = params.transition || 'default'; // <- That's new
            return {
                //default: SlideFromRight(index, position, width),
                default: SlideFromBottom(index, position, height),
                slideFromRight: SlideFromRight(index, position, width),
                bottomTransition: SlideFromBottom(index, position, height),
                collapseTransition: CollapseTransition(index, position)
            }[transition];
        },
    }
}

const HomeStack = createStackNavigator({
    Products: {
        screen: Products,
        navigationOptions: {
            header: null,
        },
    },
    ProductForm: {
        screen: ProductForm,
        navigationOptions: {
            header: null,
        },
    }

}, {
    transitionConfig: TransitionConfiguration,
});

const Router = createAppContainer(HomeStack);

export default Router

