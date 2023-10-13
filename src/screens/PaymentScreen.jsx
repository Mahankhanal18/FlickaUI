import React, { useState, useMemo } from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { CheckBox } from 'react-native-elements';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Theme from '../../Theme';
import Spacer from '../components/Spacer';

const PaymentScreen = () => {
    const [isAgreed, setIsAgreed] = useState(false);
    const [selectedId, setSelectedId] = useState(false);
    const navigation = useNavigation();

    const radioButtons = useMemo(() => ([
        {
            id: '1',
            label: 'Paytm',
            value: 'Paytm'
        },
        {
            id: '2',
            label: 'UPI     ',
            value: 'UPI'
        }
    ]), []);

    return (
        <SafeAreaView style={{ width: '100%', height: '100%', top: 40 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Creators')}>
                    <Ionicons name="arrow-back" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Creators Page')}>
                    <Text style={{ color: 'black', fontSize: 20, fontFamily: 'Roboto_400Regular' }}>Payment Setting</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Add clicked')}>
                    <Feather name="plus-square" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <View>
                <Spacer>
                    <Text style={styles.sectionTitle}>Payment Method</Text>
                </Spacer>
                <Spacer>
                    <View style={styles.paymentOption}>
                        <RadioGroup
                            radioButtons={radioButtons}
                            onPress={setSelectedId}
                            selectedId={selectedId}
                        />
                    </View>
                </Spacer>
                <TextInput
                    style={[Theme.inputBox, { marginVertical: 5 }]}
                    placeholder="Paytm Number or UPI ID"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TextInput
                    style={[Theme.inputBox, { marginVertical: 5 }]}
                    placeholder="Re-enter Paytm Number or UPI ID"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Spacer>
                    <View style={styles.termsCheckbox}>
                        <CheckBox
                            size={18}
                            onPress={() => {
                                setIsAgreed(!isAgreed)
                            }}
                            checked={isAgreed}
                            checkedColor="blue"
                        />
                        <Text style={styles.termsText}>I agree to payment terms and conditions</Text>
                    </View>
                </Spacer>
                <Spacer>
                    <TouchableOpacity
                        style={Theme.Button}
                        onPress={() => console.log('Payment Done')}
                    >
                        <Text style={Theme.ButtonText}>Submit</Text>
                    </TouchableOpacity>
                </Spacer>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 18,
        // fontWeight: 'bold',
        marginHorizontal: 10,
        fontFamily: 'Roboto_700Bold',
    },
    paymentOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    optionText: {
        fontSize: 16,
        marginLeft: 10,
    },
    paymentInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    termsCheckbox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    termsText: {
        fontSize: 12,
        marginLeft: -10,
        fontFamily: 'Roboto_400Regular',
    },
});

export default PaymentScreen;