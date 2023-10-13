import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Theme from '../../Theme';

const ProfileItem = ({ name, username, profileImage, posts, followers, likes }) => {
    const [isCurrentUser, setIsCurrentUser] = useState(false);
    const navigation = useNavigation();

    const samplePosts = [
        require('../../assets/demo1.jpeg'),
        require('../../assets/demo1.jpeg'),
        require('../../assets/demo1.jpeg'),
        require('../../assets/demo1.jpeg'),
        require('../../assets/demo1.jpeg'),
        require('../../assets/demo1.jpeg'),
        require('../../assets/demo1.jpeg'),
        require('../../assets/demo1.jpeg'),
    ];

    const organizePostsIntoRows = (posts) => {
        const rows = [];
        for (let i = 0; i < posts.length; i += 3) {
            rows.push(posts.slice(i, i + 3));
        }
        return rows;
    };

    const postRows = organizePostsIntoRows(samplePosts);

    return (
        <View style={{ top: 30, height: '100%', width: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Video')}>
                    <Ionicons name="arrow-back" size={30} color="black" />
                </TouchableOpacity>
                {
                    isCurrentUser ?
                        (
                            <>
                                <TouchableOpacity onPress={() => console.log('Following clicked')}>
                                    <Text style={{ color: 'black', fontSize: 20, fontFamily: 'Roboto_400Regular' }}>My Profile</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => console.log('Notification clicked')}>
                                    <Feather name="edit" size={30} color="black" />
                                </TouchableOpacity>
                            </>
                        ) : (
                            null
                        )
                }
            </View>
            <View style={styles.profileInfo}>
                <View style={styles.profilePicture}>
                    {/* Your profile picture content */}
                </View>
                <View style={styles.infoAndStats}>
                    <View style={styles.nameUsername}>
                        <Text style={styles.nameText}>{name}  <MaterialIcons name="verified" size={20} color="black" /></Text>
                        <Text style={styles.usernameText}>{username}</Text>
                    </View>
                    <View style={styles.stats}>
                        <View style={styles.statItem}>
                            <Text style={styles.statLabel}>Posts</Text>
                            <Text style={styles.statNumber}>{posts}</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statLabel}>Followers</Text>
                            <Text style={styles.statNumber}>{followers}</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statLabel}>Likes</Text>
                            <Text style={styles.statNumber}>{likes}</Text>
                        </View>
                    </View>

                </View>
            </View>
            <View style={{ marginVertical: 10 }}>
                <TouchableOpacity style={[Theme.Button, { paddingHorizontal: 20, paddingVertical: 5 }]}>
                    <Text style={Theme.ButtonText}>Follow</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.bio, { paddingHorizontal: 20 }]}>
                <Text style={styles.bioText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.postsContainer} showsVerticalScrollIndicator={false}>
                    {postRows.map((row, rowIndex) => (
                        <View key={rowIndex} style={styles.postRow}>
                            {row.map((postImage, columnIndex) => (
                                <TouchableOpacity
                                    key={columnIndex}
                                    onPress={() => console.log('Image pressed')}
                                    style={styles.postImageContainer}
                                >
                                    <Image source={postImage} style={styles.postImage} />
                                </TouchableOpacity>
                            ))}
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    profileInfo: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilePicture: {
        width: 100,
        height: 100,
        backgroundColor: 'lightgray',
        borderRadius: 50,
    },
    infoAndStats: {
        flex: 1,
        marginLeft: 20,
    },
    nameText: {
        fontSize: 20,
        fontFamily: 'Roboto_700Bold'
    },
    usernameText: {
        color: 'gray',
        fontFamily: 'Roboto_400Regular'
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    statItem: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 18,
        fontFamily: 'Roboto_700Bold'
    },
    statLabel: {
        color: 'gray',
        fontFamily: 'Roboto_400Regular'
    },
    bio: {
        padding: 10
    },
    bioText: {
        color: 'black',
        fontSize: 15,
        fontStyle: 'normal',
        lineHeight: 20,
        fontFamily: 'Roboto_400Regular'
    },
    postsContainer: {
        marginTop: 10,
    },
    postRow: {
        flexDirection: 'row',
        marginBottom: 1,
    },
    postImageContainer: {
        flex: 1 / 3,
        aspectRatio: 1,
        marginRight: 1,
    },
    postImage: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
});

export default ProfileItem;