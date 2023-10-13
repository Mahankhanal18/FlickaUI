import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet, Text, SafeAreaView, Image, TextInput, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const commentsData = [
    {
        id: 1,
        username: 'M_ehrmantraut',
        commentText: 'This is mike.',
        avatar: require('../../assets/demo1.jpeg'),
        isLiked: false
    },
    {
        id: 2,
        username: 'j_pinkman',
        commentText: 'This is jessie yo!',
        avatar: require('../../assets/demo1.jpeg'),
        isLiked: true
    },
    {
        id: 3,
        username: 'heisenberg',
        commentText: 'Say my name.',
        avatar: require('../../assets/demo1.jpeg'),
        isLiked: false
    },
    {
        id: 4,
        username: 'ww',
        commentText: 'This is the walter white.',
        avatar: require('../../assets/demo1.jpeg'),
        isLiked: false
    },
    {
        id: 5,
        username: 'walter_jr.',
        commentText: 'This is the walter_jr. comment.',
        avatar: require('../../assets/demo1.jpeg'),
        isLiked: true
    },
    {
        id: 6,
        username: 'don_ector',
        commentText: 'This is the don_ector.',
        avatar: require('../../assets/demo1.jpeg'),
        isLiked: true
    },
    {
        id: 7,
        username: 'gustavo_fring',
        commentText: 'This is the gustavo_fring.',
        avatar: require('../../assets/demo1.jpeg'),
        isLiked: false
    },
    {
        id: 8,
        username: 'dea_hank',
        commentText: 'This is the hanks comment.',
        avatar: require('../../assets/demo1.jpeg'),
        isLiked: false
    },
];

const Comment = () => {
    const [commentText, setCommentText] = useState("");
    const [keyboardPadding, setKeyboardPadding] = useState(12);

    const handleCommentChange = (text) => {
        setCommentText(text);
    };

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardPadding(120);
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardPadding(12);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, textAlign: 'center', marginVertical: 10, fontFamily: 'Roboto_700Bold' }}>Comments</Text>
            <View style={styles.horizontalLine} />
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} horizontal={false}>
                {commentsData.map((comment) => (
                    <TouchableOpacity key={comment.id} activeOpacity={0.9}>
                        <View style={styles.commentContainer}>
                            <TouchableOpacity>
                                <Image source={comment.avatar} style={styles.avatar} />
                            </TouchableOpacity>
                            <View style={styles.commentTextContainer}>
                                <TouchableOpacity>
                                    <Text style={styles.username}>{comment.username}</Text>
                                </TouchableOpacity>
                                <Text style={styles.commentText}>{comment.commentText}</Text>
                            </View>
                            <TouchableOpacity style={styles.likeButton}>
                                <FontAwesome name={comment.isLiked ? "heart" : "heart-o"} size={15} color={comment.isLiked ? "red" : "black"} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View style={[styles.commentInputContainer, { paddingBottom: keyboardPadding }]}>
                <TextInput
                    style={styles.commentInput}
                    placeholder="Add a comment..."
                    value={commentText}
                    onChangeText={handleCommentChange}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    horizontalLine: {
        borderBottomWidth: 0.7,
        borderBottomColor: 'black',
        width: '100%',
    },
    commentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 18
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    commentTextContainer: {
        flex: 1,
    },
    username: {
        fontSize: 16,
        fontFamily: 'Roboto_700Bold',
        marginBottom: 4,
    },
    commentText: {
        fontSize: 14,
        fontFamily: 'Roboto_400Regular' 
    },
    likeButton: {
        marginLeft: 12,
    },
    commentInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    commentInput: {
        flex: 1,
        height: 40,
        borderWidth: 0.7,
        borderColor: 'black',
        borderRadius: 20,
        paddingHorizontal: 12,
        marginRight: 8,
        fontFamily: 'Roboto_400Regular'
    },
});

export default Comment;