import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, ToastAndroid, TextInput, Image} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.login}>
                    <View style={styles.loginLogo}>
                        <Image
                            style={{width: 100, height: 100}}
                            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png'}}
                        />
                    </View>
                    <Text>Kullanıcı Adı:</Text>
                    <TextInput style={styles.textInput} placeholder={'Adı:'}/>
                    <Text>Kullanıcı Şifre:</Text>
                    <TextInput style={styles.textInput} placeholder={'Şifre:'}/>
                    <Button onPress={onClickListiner} title={'Giriş Yap'}/>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Kaydol </Text>
                    <Text style={styles.footerText}>ya da </Text>
                    <Text style={styles.footerText}>Dene </Text>
                </View>
            </View>
        );
    }
}

const onClickListiner = () => {
    ToastAndroid.show('Toast Mesajı aktif', ToastAndroid.LONG);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
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
});
