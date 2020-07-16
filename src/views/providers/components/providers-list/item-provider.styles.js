import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	line: {
		height: 86,
		borderBottomWidth: 1,
		borderBottomColor: "#e9e9e9",
		alignItems: 'center',
		flexDirection: 'row',
	},
	lineText: {
		fontSize: 20,
		color: '#666',
	},
	label: {
		marginTop: 4,
		fontSize: 13,
		color: 'grey',
		textAlign: 'left',
		width: '100%'
	},
	viewAvatar: {
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.4,
		shadowRadius: 2,
		elevation: 5,
		width: 53,
		height: 53,
	},
	avatar: {
		aspectRatio: 1,
		width: 52,
		height: 52,
		borderRadius:10,
	},
	value: {
		padding: 10,
		color: 'grey'
	},
	sale_value: {
		padding: 15,
		fontSize: 15,
		color: 'grey'
	},
	contentLine: {
		justifyContent: 'center',
		paddingLeft: 15,
		flex: 7
	},
	amountStock: {
		color: '#999999',
	},
	flatListProductsToEditStyle: {
		paddingTop:30,
		marginTop:-45,
		paddingLeft: 5,
		paddingRight: 5,		
	},
	flatListContentContainerStyle: {
		paddingBottom: 85,
		borderBottomColor: '#e9e9e9'
	},
	viewRenderAvatar: {
		aspectRatio: 1,
		width: 52,
		height: 52,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.4,
		shadowRadius: 2,
		elevation: 5,
	},
	textRenderAvatar: {
		fontSize: 28,
		textAlign: 'center',
		flex: 0
	},
});