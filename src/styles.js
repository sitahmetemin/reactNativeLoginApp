import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    login: {
        display: 'flex',
        flex: 6,
        justifyContent: 'center',
        width: '75%',
        textAlign: 'center'
    },
    loginLogo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 50,
        textAlign: 'center'
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    footerText: {
        color: '#789',
    },
    header: {
		flex:1,
		backgroundColor: '#852'
	},
	body: {
		flex: 9,
		backgroundColor: '#258'
	},
	card:{

	},
    cardImage: {
        width: '100%'
	},
	cardBody: {
		padding: '15px'
    },
    btnRadius: {
        borderRadius: 50
    }
});

export default styles;