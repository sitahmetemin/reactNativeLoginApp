import React, {Component} from 'react';

import {
    Text,
    View,
    Image,
    TextInput,
    ToastAndroid,
    TouchableOpacity
} from 'react-native';

import styles from '../styles';

import Login from './Login';
//import {StackNavigator,} from 'react-navigation';

// const AppRouter = StackNavigator({
//     Home: {screen: Home},
//     Login: {screen: Login},
//});

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nick: 'ahmet',
            pass: '123'
        }
    }

    btnRegister = () => {
        ToastAndroid.show('Kayıt Ekranını Açacak', ToastAndroid.SHORT);
    };

    onClickLogin = () => {

        if (this.state.nick === 'ahmet' && this.state.pass === '123') {

            ToastAndroid.show('Giriş başarılı', ToastAndroid.SHORT);

            //const { navigate } = this.props.navigation;
            //navigate('Home')
        } else {
            ToastAndroid.show('Giriş BAŞARISIZ!!', ToastAndroid.SHORT);
        }
    };



    render() {

        return (
            <View style={styles.container}>
                <View style={styles.login}>
                    <View style={styles.loginLogo}>
                        <Image
                            style={{width: 100, height: 100}}
                            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png'}}/>
                    </View>
                    <TextInput
                        value={this.state.nick}
                        onChangeText={(nickVal) => this.setState({nick: nickVal})}
                        style={styles.textInput}
                        placeholder={'Kullanıcı Adı'}/>
                    <TextInput
                        value={this.state.pass}
                        onChangeText={(passVal) => this.setState({pass: passVal})}
                        style={styles.textInput}
                        placeholder={'Şifre'}/>

                    <TouchableOpacity onPress={this.onClickLogin}>
                        <Text style={styles.btnPrimary}>
                            Giriş Yap
                        </Text>
                    </TouchableOpacity>

                    {/*<Button*/}
                    {/*onPress={onClickListiner}*/}
                    {/*style={{ width:10 }}*/}
                    {/*title={'Giriş Yap'}/>*/}
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={this.btnRegister}>
                        <Text style={styles.btnDark}>
                            Kaydol
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
