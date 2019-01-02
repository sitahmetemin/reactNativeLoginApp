import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DCEFFF'
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
        margin: 5,
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
        flex: 1,
        backgroundColor: '#852'
    },
    body: {
        flex: 9,
        backgroundColor: '#258'
    },
    card: {},
    cardImage: {
        width: '100%'
    },
    cardBody: {
        padding: '15px'
    },
    btnPrimary: {
        margin: 8,
        padding: 10,
        borderColor: 'black',
        backgroundColor: '#1194f6',
        textAlign: 'center',
        color: '#fff',
        borderRadius: 50
    },
    btnSecondary: {
        margin: 8,
        padding: 10,
        borderColor: 'black',
        backgroundColor: '#00bcd4',
        textAlign: 'center',
        color: '#fff',
        borderRadius: 50
    },
    btnDefault: {
        borderWidth: 1,
        margin: 8,
        padding: 10,
        borderColor: 'black',
        backgroundColor: '#e3f2fd',
        textAlign: 'center',
        color: '#000',
        borderRadius: 50
    },
    btnSucces: {
        margin: 8,
        padding: 10,
        borderColor: 'black',
        backgroundColor: '#4caf50',
        textAlign: 'center',
        color: '#fff',
        borderRadius: 50
    },
    btnWarning: {
        margin: 8,
        padding: 10,
        borderColor: 'black',
        backgroundColor: '#fb8c00',
        textAlign: 'center',
        color: '#000',
        borderRadius: 50
    },
    btnDanger: {
        margin: 8,
        padding: 10,
        borderColor: 'black',
        backgroundColor: '#f44336',
        textAlign: 'center',
        color: '#fff',
        borderRadius: 50
    },
    btnDark: {
        margin: 8,
        padding: 10,
        borderColor: 'black',
        backgroundColor: '#263238',
        textAlign: 'center',
        color: '#fff',
        borderRadius: 50
    },
});

export default styles;