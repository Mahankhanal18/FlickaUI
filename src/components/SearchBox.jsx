import React from 'react';
import { TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBox = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 10, width: '100%', position: 'relative' }}>
            <FontAwesome name="search" size={20} color="black" style={{ opacity: 0.7, position: 'absolute', zIndex: 1, left: 25 }} />
            <TextInput 
                placeholder="Search"
                placeholderTextColor="#909090"
                style={{ width: '94%',  backgroundColor: '#ebebeb', borderRadius: 10, alignContent: 'center', justifyContent: 'center', fontSize: 15, padding: 4, paddingLeft: 50 }}
            />
        </View>
    );
}

export default SearchBox;