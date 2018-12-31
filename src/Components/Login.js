import React, {Component} from 'react';

import {
    Text,
    View,
    Image,
    TextInput,
    Button, 
    ToastAndroid
} from 'react-native';

import styles from '../styles';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            pass: ''
        }
    }

    render() {
        return (
            <View style={ styles.container}>
                <View style={styles.login}>
                    <View style={styles.loginLogo}>
                        <Image
                            style={{width: 100, height: 100}}
                            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png'}} />
                    </View>
                    <TextInput value={this.state.displayName} onChangeText={ (displayName) => this.setState({displayName})} style={styles.textInput} placeholder={'Kullanıcı Adı'}/>
                    <TextInput value={this.state.pass} onChangeText={ (pass) => this.setState({pass})} onChangeText={ (pass) => this.setState({pass})} style={styles.textInput} placeholder={'Şifre'}/>
                    <Button onPress={onClickListiner} style={styles.btnRadius} title={'Giriş Yap'}/>
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
    let displayName = this.state.displayName;
    let pass = this.state.pass;
    if (displayName == 'ahmet' && pass == '123') {
        ToastAndroid.show('Giriş başarılı', ToastAndroid.SHORT);
    }else {
        ToastAndroid.show('Giriş BAŞARISIZ!!', ToastAndroid.SHORT);
    }
};

const btnRegister = () => {
    ToastAndroid.show('Kayıt Ekranını Açacak', ToastAndroid.SHORT);
};

const btnTry = () => {
    ToastAndroid.show('Uygulamanın Ekranını Açacak', ToastAndroid.SHORT);
};

