import React, {Component} from 'react';

import {
    Text,
    View,
    Image,
    TextInput,
    Button, 
    StyleSheet, 
    ToastAndroid
} from 'react-native';

export default class Home extends Component {
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
                    <Button onPress={btnRegister} color={'#369'} title={'Kaydol'}/>
                    <Text style={styles.footerText}>ya da </Text>
                    <Button onPress={btnTry} color={'#123'} title={'Dene'}/>
                </View>
            </View>
        );
    }
}

const onClickListiner = () => {
    ToastAndroid.show('Giriş Mesajı', ToastAndroid.SHORT);
};

const btnRegister = () => {
    ToastAndroid.show('Kayıt Ekranını Açacak', ToastAndroid.SHORT);
};

const btnTry = () => {
    ToastAndroid.show('Uygulamanın Ekranını Açacak', ToastAndroid.SHORT);
};

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