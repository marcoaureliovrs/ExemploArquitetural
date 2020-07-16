import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    button: {
        borderColor: 'white',
        borderRadius: 50,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteButton: {
        height: 52,
        width: '95%',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 10, height: 18 },
        shadowOpacity: 0.2,
        shadowRadius: 30,
        elevation: 2,
    },
    textButton: {
        color: 'white',
        margin: 10,
        fontWeight: 'bold'
    },
    textButtonBlue: {
        color: 'blue',
        margin: 10,
        fontWeight: 'bold'
    },
    icon: {
        color: 'white',
        alignSelf: 'center'
    },
    touchSpace: {
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 45,
        minHeight: 40
    },
    blueButton: {
        marginBottom: 10,
        marginTop: 10,
        height: 52,
        width: '100%',
        borderRadius: 10,
        shadowOffset: { width: 10, height: 18 },
        shadowOpacity: 0.3,
        shadowRadius: 30,
        elevation: 1,
    },
    textBlueButton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    blueShadowButton: {
        marginBottom: 10,
        marginTop: 10,
        height: 52,
        width: '100%',
        backgroundColor: '#134ca1',
        borderRadius: 10,
        shadowColor: '#005DFF',
        shadowOffset: { width: 10, height: 18 },
        shadowOpacity: 0.3,
        shadowRadius: 30,
        elevation: 1,
    },
    textBlueShadowButton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    iconPointNotification: {
        width: 5,
        height: 5,
        borderRadius: 2.5,
        position: 'absolute',
        right: 8,
        top: 3,
        backgroundColor: '#f53939'
    },
    textWhiteButton: {
        fontWeight: 'bold',
        fontSize: 16
    },
});