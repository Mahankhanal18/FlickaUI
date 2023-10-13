import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Spacer from '../components/Spacer';
import Theme from '../../Theme';

const LoginScreen = () => {
    const navigation = useNavigation();

    const [mobileNo, setMobileNo] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <Spacer>
                <View style={styles.iconContainer}>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={{ width: 100, height: 100 }}
                    />
                </View>
            </Spacer>
            <Spacer>
                <Text style={{ fontSize: 22, fontFamily: 'Roboto_700Bold', paddingHorizontal: 10 }}>Login or Signup with Flicka</Text>
            </Spacer>
            <TextInput
                style={Theme.inputBox}
                placeholder="Mobile number"
                value={mobileNo}
                onChangeText={setMobileNo}
                keyboardType="numeric"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer>
                <TouchableOpacity
                    style={Theme.Button}
                    onPress={() =>
                        navigation.navigate('Otp')
                    }
                >
                    <Text style={Theme.ButtonText}><Ionicons name="phone-portrait-outline" size={20} color="white" />  Continue with phone number</Text>
                </TouchableOpacity>
            </Spacer>
            <Spacer>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'grey' }} />
                    <View>
                        <Text style={{ width: 50, textAlign: 'center', color: 'grey' }}>OR</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'grey' }} />
                </View>
            </Spacer>
            <Spacer>
                <TouchableOpacity
                    style={Theme.Button}
                    onPress={() =>
                        navigation.navigate('Video')
                    }
                >
                    <Text style={Theme.ButtonText}><Ionicons name="logo-google" size={20} color="white" />  Sign in with Google</Text>
                </TouchableOpacity>
            </Spacer> 
            <Spacer>
                <TouchableOpacity
                    style={Theme.Button}
                    onPress={() =>
                        navigation.navigate('Video')
                    }
                >
                    <Text style={Theme.ButtonText}><FontAwesome5 name="facebook" size={20} color="white" />  Sign in with Facebook</Text>
                </TouchableOpacity>
            </Spacer> 
            <Spacer>
                <TouchableOpacity
                    style={Theme.Button}
                    onPress={() =>
                        navigation.navigate('Video')
                    }
                >
                    <Text style={Theme.ButtonText}><MaterialCommunityIcons name="email-outline" size={20} color="white" />  Sign in with Email</Text>
                </TouchableOpacity>
            </Spacer> 
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default LoginScreen;