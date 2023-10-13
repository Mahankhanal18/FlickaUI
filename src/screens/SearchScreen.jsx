import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import SearchBox from '../components/SearchBox';
import SearchContent from '../components/SearchContent';

const SearchScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', top: 40 }}>
            <ScrollView scrollEnabled showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                <SearchBox />
                <SearchContent />
            </ScrollView>
        </SafeAreaView>
    );
}

export default SearchScreen;