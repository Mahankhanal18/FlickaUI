import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import TopTabs from './TopTabs';
import Theme from '../../Theme';
import Spacer from './Spacer';

const CreatorItem = () => {
    const [showEarningsSettings, setShowEarningsSettings] = useState(false);
    const navigation = useNavigation();

    const cardData = [
        { title: 'Posts', value: '100' },
        { title: 'Likes', value: '500' },
        { title: 'Products View', value: '250' },
        { title: 'Store Visits', value: '250' }
    ];

    const renderCard = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardValue}>{item.value}</Text>
        </View>
    );

    const toggleEarningsSettings = () => {
        setShowEarningsSettings(!showEarningsSettings);
    };

    return (
        <View style={{ width: '100%', height: '100%', top: 40, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Video')}>
                    <Ionicons name="arrow-back" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Creators Page')}>
                    <Text style={{ color: 'black', fontSize: 20, fontFamily: 'Roboto_400Regular' }}>Creator's Page</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Add clicked')}>
                    <Feather name="plus-square" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={cardData}
                    renderItem={renderCard}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    contentContainerStyle={styles.cardContainer}
                />
            </View>
            <Spacer>
                <TouchableOpacity style={[Theme.Button]} onPress={toggleEarningsSettings}>
                    <Text style={Theme.ButtonText}>Active Paid Promotions</Text>
                </TouchableOpacity>
            </Spacer>
            {showEarningsSettings && (
                <View style={styles.earningsSettingsContainer}>
                    <View style={styles.earningsSettingsRow}>
                        <Text style={styles.earningsText}>Earnings</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                            <Text style={styles.settingsText}>Settings</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.periodText}>Period 01 Jan 2023 - 31 Jan 2023</Text>
                    <View style={styles.earningsRow}>
                        <Text style={styles.earningsLabel}>Earnings from store visits</Text>
                        <Text style={styles.earningsValue}>Rs 20</Text>
                    </View>
                    <View style={styles.earningsRow}>
                        <Text style={styles.earningsLabel}>Earnings from new users</Text>
                        <Text style={styles.earningsValue}>Rs 200</Text>
                    </View>
                    <View style={styles.earningsRow}>
                        <Text style={styles.earningsLabel}>Total</Text>
                        <Text style={styles.earningsValue}>Rs 220</Text>
                    </View>
                </View>
            )}
            <TopTabs />
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        paddingHorizontal: 10,
    },
    card: {
        flex: 1,
        backgroundColor: 'lightgrey',
        borderRadius: 8,
        padding: 20,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 120,
    },
    cardTitle: {
        fontSize: 16,
        fontFamily: 'Roboto_700Bold',
        marginBottom: 10,
    },
    cardValue: {
        fontSize: 18,
        fontFamily: 'Roboto_700Bold',
    },
    earningsSettingsContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 20,
        margin: 10,
    },
    earningsSettingsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    earningsText: {
        fontSize: 20,
        fontFamily: 'Roboto_700Bold'
    },
    settingsText: {
        fontSize: 12,
        fontWeight: 'normal',
        color: 'blue',
        fontFamily: 'Roboto_400Regular'
    },
    periodText: {
        fontSize: 12,
        marginBottom: 10,
        fontFamily: 'Roboto_400Regular'
    },
    earningsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    earningsLabel: {
        fontSize: 16,
        flex: 1,
        fontFamily: 'Roboto_400Regular'
    },
    earningsValue: {
        fontSize: 16,
        fontFamily: 'Roboto_400Regular'
    },
});

export default CreatorItem;