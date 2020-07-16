import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    viewSearchInput: {
        //flex: 1,
        flexDirection: 'row',
        maxHeight: 45,
        justifyContent: 'center',
        borderRadius: 25,
        borderColor: '#fff',
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        backgroundColor: 'white',
        //width: '100%',
        //zIndex: 0,
        // position: 'absolute',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
    },
    colorShowIconSearch: {
        color: '#999999',
    },
    viewShowErrorMessageEmail: {
        flexDirection: 'row',
        flex: 0,
        marginTop: 6,
        paddingLeft: 3,
        paddingRight: 3
    },
    viewTextErroMessageEmail: {
        flex: 3
    },
    textErroMessageEmail: {
        color: '#FF6E6E'
    },
    viewShowErrorMessage: {
        flexDirection: 'row',
        flex: 0,
        marginTop: 6,
        paddingLeft: 3,
        paddingRight: 3
    },
    viewTextErrorMessage: {
        flex: 3
    },
    textErrorMessage: {
        color: '#FF6E6E'
    },
    viewIconExclamationcircle: {
        flex: 0,
        marginTop:3
    },
    iconErrorMessage: {
        color: '#FF6E6E',
        fontSize: 15
    },
    viewOrderInputMask: {
        flexDirection: 'row',
        width: '100%',
        flex: 0,
        alignItems: 'center',
        padding: 5,
        backgroundColor: "#134ca1"
    },
    touchableIconMdClose: {
        width: 50,
        height: 50,
        alignItems: 'center'
    },
    iconMdClose: {
        margin: 10,
        fontSize: 25,
        color: 'white',
        alignSelf: 'center'
    },
    viewInputText: { 
        flex: 1 
    },
    touchableIconAttachMoney: { 
        width: 40, 
        height: 40, 
        borderRadius: 20, 
        margin: 5, 
        justifyContent: 'center' 
    },
    iconAttachMoney: { 
        margin: 10, 
        fontSize: 25, 
        color: 'white', 
        alignSelf: 'center' 
    },
    touchableIconPercent: { 
        width: 40, 
        height: 40, 
        borderRadius: 20, 
        margin: 5, 
        justifyContent: 'center' 
    },
    iconPercent: { 
        margin: 10, 
        fontSize: 25, 
        color: 'white', 
        alignSelf: 'center' 
    },
    viewShowErrorMessage: { 
        flexDirection: 'row', 
        flex: 0, 
        marginTop: 6, 
        paddingLeft: 3, 
        paddingRight: 3 
    },
    viewTextErrorMessage: { 
        flex: 3 
    },
    textErrorMessage: { 
        color: '#FF6E6E' 
    },
    iconExclamationcircle: { 
        color: '#FF6E6E', 
        fontSize: 15 
    },

    //input-mask
    textInputMask: {
        fontSize:16, 
        width:'100%',
        borderColor:'#6e9ed3', 
        padding:15
    },

    //input-email
    viewContentInputEmail: { 
        width:  '100%' 
    },
    
});
