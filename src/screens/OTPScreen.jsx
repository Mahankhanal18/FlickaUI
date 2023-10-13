import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Spacer from '../components/Spacer';
import Theme from '../../Theme';

const OTPScreen = () => {
    const navigation = useNavigation();

    const [otp, setOTP] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Enter the OTP</Text>
            </View>
            <TextInput
                style={[Theme.inputBox]}
                placeholder="Enter OTP"
                value={otp}
                onChangeText={setOTP}
                keyboardType="numeric"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer>
                <TouchableOpacity style={Theme.Button} onPress={() => navigation.navigate('Video')}>
                    <Text style={Theme.ButtonText}>Submit OTP</Text>
                </TouchableOpacity>
            </Spacer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    header: {
        alignItems: 'center',
    },
    headerText: {
        fontSize: 22,
        fontFamily: 'Roboto_700Bold',
        padding: 20
    }
});

export default OTPScreen;