import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const TopTabs = () => {
    const Tab = createMaterialTopTabNavigator();

    const samplePosts = [
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

    const Pending = () => {
        return (
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
        );
    };
    const Rejected = () => {
        return (
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
        );
    };
    const Approved = () => {
        return (
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
        );
    };

    return (
        <Tab.Navigator>
            <Tab.Screen name="Pending" component={Pending} />
            <Tab.Screen name="Rejected" component={Rejected} />
            <Tab.Screen name="Approved" component={Approved} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    postsContainer: {
        marginTop: 1,
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

export default TopTabs;