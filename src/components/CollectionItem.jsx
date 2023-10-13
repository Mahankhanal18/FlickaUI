import React, { useRef } from 'react';
import { TouchableOpacity, View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import { Feather, FontAwesome, Entypo } from '@expo/vector-icons';

const CollectionItem = ({ collectionName }) => {
    let collections = [];

    for (let i = 0; i < 4; i++) {
        collections.push(
            <TouchableOpacity key={i} style={{ flexDirection: 'row', marginRight: 10 }} onPress={() => console.log('Collection clicked')}>
                <Image
                    source={require('../../assets/demo1.jpeg')}
                    style={{
                        position: 'relative',
                        width: 200,
                        height: 200,
                        marginHorizontal: 5
                    }}
                    resizeMode="cover"
                />
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView>
            <View style={{ top: 10, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Feather style={{ backgroundColor: 'rgba(52, 52, 52, 0.3)', borderRadius: 100, padding: 5 }} name="hash" size={20} color="black" />
                    <Text style={{ color: 'black', fontSize: 15, marginHorizontal: 10, top: 5, fontFamily: 'Roboto_700Bold' }}>{collectionName}</Text>
                    <TouchableOpacity style={{ top: 5 }} onPress={() => console.log('Share clicked')}>
                        <FontAwesome name="share" size={20} color="black" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ top: 3 }} onPress={() => console.log('View all')}>
                    <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Roboto_400Regular' }}>View all <Entypo name="chevron-small-right" size={20} color="black" /></Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
                {
                    collections
                }
            </ScrollView>
        </SafeAreaView>
    );
}

export default CollectionItem;