import React, { useRef, useState, useCallback } from 'react';
import { TouchableOpacity, View, SafeAreaView, StyleSheet, useWindowDimensions, StatusBar, Image, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import { Video } from 'expo-av';
import { FontAwesome, FontAwesome5, Entypo, Octicons, Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView, TapGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring } from 'react-native-reanimated';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import BottomSheet from './BottomSheet';
import Store from './Store';
import Comment from './Comment';
import Menu from './Menu';

const LikeComponent = Animated.createAnimatedComponent(Ionicons);
const MuteComponent = Animated.createAnimatedComponent(Ionicons);
const UnMuteComponent = Animated.createAnimatedComponent(Octicons);

const VideoItem = ({ data, isActive }) => {
    const navigation = useNavigation();

    const [mute, setMute] = useState(false);
    const [like, setLike] = useState(false);
    const [bookmark, setBookmark] = useState(false);
    const videoRef = useRef(null);
    const tapRef = useRef(null);
    const scrollRef = useRef(null);
    const storeRBSheet = useRef(null);
    const commentRBSheet = useRef(null);
    const optionsRBSheet = useRef(null);
    const scale = useSharedValue(0);
    const opacity = useSharedValue(0);
    const isFocused = useIsFocused();
    const { height, width } = useWindowDimensions();
    const { uri, caption, channelName, musicName, likes, comments, avatarUri } = data;

    const toggleLike = () => {
        scale.value = withSpring(1, undefined, (isFinished) => {
            if (isFinished) {
                scale.value = withDelay(100, withSpring(0))
            }
        });
        setLike(!like);
    };

    const singleTap = useCallback(() => {
        opacity.value = withSpring(1, undefined, (isFinished) => {
            if (isFinished) {
                opacity.value = withDelay(100, withSpring(0))
            }
        });
    }, []);

    const animatedStyleLike = useAnimatedStyle(() => {
        return {
            transform: [{
                scale: Math.max(scale.value, 0)
            }]
        };
    });
    const animatedStyleMute = useAnimatedStyle(() => {
        return {
            transform: [{
                scale: Math.max(opacity.value, 0)
            }]
        };
    });

    return (
        <SafeAreaView style={{ width: width, height: height + StatusBar.currentHeight, position: 'relative', backgroundColor: 'black' }}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <TapGestureHandler ref={tapRef} onActivated={singleTap}>
                    <Animated.View style={{ flex: 1 }}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%'
                            }}
                            onPress={() => setMute(!mute)}
                        >
                            <Video
                                ref={videoRef}
                                source={{ uri }}
                                style={styles.video}
                                resizeMode="cover"
                                isLooping
                                isMuted={mute}
                                shouldPlay={isActive && isFocused}
                            />
                        </TouchableOpacity>
                    </Animated.View>
                </TapGestureHandler>
            </GestureHandlerRootView>
            <LikeComponent style={[animatedStyleLike, { position: 'absolute', top: height / 2.3, left: width / 2.3, borderRadius: 100, padding: 10 }]} name={like ? "heart" : ""} size={80} color="white" />
            {
                mute ?
                    <MuteComponent style={[animatedStyleMute, { position: 'absolute', top: height / 2.3, left: width / 2.3, backgroundColor: 'rgba(52, 52, 52, 0.6)', borderRadius: 100, padding: 10 }]} name="volume-mute-outline" size={mute ? 30 : 0} color="white" /> :
                    <UnMuteComponent style={[animatedStyleMute, { position: 'absolute', top: height / 2.3, left: width / 2.3, backgroundColor: 'rgba(52, 52, 52, 0.6)', borderRadius: 100, padding: 10 }]} name="unmute" size={mute ? 0 : 30} color="white" />

            }
            <View style={{ position: 'absolute', width: width, zIndex: 1, bottom: 50, padding: 10 }}>
                <View>
                    <TouchableOpacity style={{ width: 150 }}>
                        <View style={{ width: 100, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: 32, height: 32, borderRadius: 100, backgroundColor: 'white', margin: 10 }}>
                                <Image
                                    source={{ uri: avatarUri }}
                                    style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 100 }}
                                />
                            </View>
                            <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Roboto_700Bold' }}>{channelName}</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 14, marginHorizontal: 10, fontFamily: 'Roboto_400Regular' }}>{caption}</Text>
                    <ScrollView horizontal ref={scrollRef} onContentSizeChange={(w, h) => scrollRef.current.scrollToEnd({ animated: true })} style={{ flexDirection: 'row', backgroundColor: 'rgba(52, 52, 52, 0.6)', borderRadius: 50, padding: 2, width: 90, margin: 10 }}>
                        <Ionicons name="musical-note-sharp" size={16} color="white" />
                        <Text style={{ color: 'white', fontFamily: 'Roboto_400Regular' }}>{musicName}</Text>
                    </ScrollView>
                </View>
            </View>
            <View style={styles.bottomSection}>
                <View style={styles.bottomLeftSection}>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('Profile')} style={{ paddingLeft: 20, paddingTop: 15 }}>
                        <Text
                            style={{
                                shadowOpacity: 1,
                                textShadowRadius: 6,
                                textShadowOffset: { width: 1, height: 2 }
                            }}>
                            <FontAwesome name="user-circle-o" size={25} color="white" />
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomMiddleSection}>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => storeRBSheet.current.open()} style={{ paddingLeft: 35 }}>
                        <Text
                            style={{
                                shadowOpacity: 1,
                                textShadowRadius: 6,
                                textShadowOffset: { width: 1, height: 2 }
                            }}>
                            <FontAwesome5 name="shopping-bag" size={40} color="white" />
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomRightSection}>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => optionsRBSheet.current.open()} style={{ paddingLeft: 75, paddingTop: 15 }}>
                        <Text
                            style={{
                                shadowOpacity: 1,
                                textShadowRadius: 6,
                                textShadowOffset: { width: 1, height: 2 }
                            }}>
                            <Entypo name="dots-three-vertical" size={25} color="white" />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.verticalBar}>
                <View style={styles.verticalBarItem}>
                    <TouchableOpacity activeOpacity={0.9} style={styles.verticalBarIcon} onPress={toggleLike}>
                        {
                            like ?
                                <Text
                                    style={{
                                        shadowOpacity: 1,
                                        textShadowRadius: 6,
                                        textShadowOffset: { width: 1, height: 2 }
                                    }}>
                                    <FontAwesome name="heart" size={25} color="red" />
                                </Text> :
                                <Text
                                    style={{
                                        shadowOpacity: 1,
                                        textShadowRadius: 6,
                                        textShadowOffset: { width: 1, height: 2 }
                                    }}>
                                    <FontAwesome name="heart-o" size={25} color="white" />
                                </Text>
                        }
                        <Text style={styles.verticalBarText}>{likes}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.verticalBarItem}>
                    <TouchableOpacity activeOpacity={0.9} style={styles.verticalBarIcon} onPress={() => commentRBSheet.current.open()}>
                        <Text
                            style={{
                                shadowOpacity: 1,
                                textShadowRadius: 6,
                                textShadowOffset: { width: 1, height: 2 }
                            }}>
                            <FontAwesome name="comment-o" size={25} color="white" />
                        </Text>
                        <Text style={styles.verticalBarText}>{comments}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.verticalBarItem}>
                    <TouchableOpacity activeOpacity={0.9} style={styles.verticalBarIcon} onPress={() => setBookmark(!bookmark)}>
                        {
                            bookmark ?
                                <Text
                                    style={{
                                        shadowOpacity: 1,
                                        textShadowRadius: 6,
                                        textShadowOffset: { width: 1, height: 2 }
                                    }}>
                                    <FontAwesome name="bookmark" size={25} color="white" />
                                </Text> :
                                <Text
                                    style={{
                                        shadowOpacity: 1,
                                        textShadowRadius: 6,
                                        textShadowOffset: { width: 1, height: 2 }
                                    }}>
                                    <FontAwesome name="bookmark-o" size={25} color="white" />
                                </Text>
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.verticalBarItem}>
                    <TouchableOpacity activeOpacity={0.9} style={styles.verticalBarIcon} onPress={() => console.log('Share clicked')}>
                        <Text
                            style={{
                                shadowOpacity: 1,
                                textShadowRadius: 6,
                                textShadowOffset: { width: 1, height: 2 }
                            }}>
                            <FontAwesome name="share" size={25} color="white" />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <BottomSheet refRBSheet={storeRBSheet} height={500}>
                <Store />
            </BottomSheet>
            <BottomSheet refRBSheet={commentRBSheet} height={600}>
                <Comment />
            </BottomSheet>
            <BottomSheet refRBSheet={optionsRBSheet} height={150}>
                <Menu />
            </BottomSheet>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    bottomSection: {
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
        width: '100%',
        height: 60,
    },
    bottomLeftSection: {
        flex: 2,
    },
    bottomRightSection: {
        flex: 2,
    },
    bottomMiddleSection: {
        flex: 2,
    },
    verticalBar: {
        position: 'absolute',
        right: 8,
        bottom: 82,
    },
    verticalBarItem: {
        marginBottom: 24,
        alignItems: 'center',
        paddingBottom: 10
    },
    verticalBarIcon: {
        width: 36,
        height: 36,
    },
    verticalBarText: {
        color: 'white',
        marginTop: 4,
        shadowOpacity: 1,
        textShadowRadius: 6,
        textShadowOffset: { width: 1, height: 2 }
    }
});

export default VideoItem;