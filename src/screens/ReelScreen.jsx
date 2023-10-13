import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, useWindowDimensions, StatusBar, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import { FontAwesome, Feather, Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import VideoScreen from './VideoScreen';
import videoData from '../../videoData';

const ReelScreen = () => {
    const navigation = useNavigation();
    const [isMyCollection, setIsMyColection] = useState(false);
    const { height, width } = useWindowDimensions();

    return (
        <SafeAreaView style={{ width: width, height: height + StatusBar.currentHeight, position: 'relative', backgroundColor: 'black' }}>
            {
                isMyCollection ?
                    <View style={{ position: 'absolute', left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-between', zIndex: 1, padding: 10, top: 40 }}>
                        <View style={{ position: 'relative', flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Feather style={{ backgroundColor: 'rgba(52, 52, 52, 0.3)', borderRadius: 100, padding: 5 }} name="hash" size={20} color="white" />
                            <Text style={{ color: 'white', fontSize: 15, marginHorizontal: 10, top: 5, fontFamily: 'Roboto_700Bold', }}>Collection Name 1</Text>
                        </View>
                        <TouchableOpacity
                            style={{ top: 3 }}
                            onPress={() => {
                                setIsMyColection(!isMyCollection)
                                navigation.navigate('Video')
                            }}
                        >
                            <Ionicons name="md-home-outline" size={25} color="white" />
                        </TouchableOpacity>
                    </View> :
                    <View style={{ position: 'absolute', left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-between', zIndex: 1, padding: 10, top: 40 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                            <Text
                                style={{
                                    shadowOpacity: 1,
                                    textShadowRadius: 6,
                                    textShadowOffset: { width: 1, height: 2 }
                                }}>
                                <FontAwesome name="search" size={25} color="white" style={styles.icon} />
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('Following clicked')}>
                            <Text style={[{
                                    shadowOpacity: 1,
                                    textShadowRadius: 6,
                                    textShadowOffset: { width: 1, height: 2 },
                                    color: 'white', 
                                    fontSize: 15,
                                    fontFamily: 'Roboto_400Regular',
                                }]}
                            >
                                Following | For You
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('Notification clicked')}>
                            <Text
                                style={{
                                    shadowOpacity: 1,
                                    textShadowRadius: 6,
                                    textShadowOffset: { width: 1, height: 2 }
                                }}>
                                    <MaterialCommunityIcons name="bell-ring" size={25} color="white" style={styles.icon} />
                                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('Following clicked')}>
                            <Text
                                style={{
                                    shadowOpacity: 1,
                                    textShadowRadius: 6,
                                    textShadowOffset: { width: 1, height: 2 }
                                }}>
                                    <FontAwesome name="plus-square-o" size={25} color="white" style={styles.icon} />
                                </Text>
                        </TouchableOpacity>
                    </View>
            }
            <VideoScreen videoData={videoData} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    dropdown: {
        position: 'absolute',
        top: 40,
        left: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: 5,
        padding: 10,
        zIndex: 2,
    },
    dropdownItem: {
        paddingVertical: 5,
    },
});

export default ReelScreen;