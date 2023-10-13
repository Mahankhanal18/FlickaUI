import React from 'react';
import { SafeAreaView, View } from 'react-native';
import ProfileItem from '../components/ProfileItem';

const ProfileScreen = () => {
    return (
        <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <View style={{ width: '100%', padding: 10 }}>
                <ProfileItem 
                    name="Saul Goodman"
                    username="@saul_17"
                    profileImage={require('../../assets/demo1.jpeg')}
                    followers="100"
                    likes="100"
                    posts="100"
                />
            </View>
        </SafeAreaView>
    );
}

export default ProfileScreen;