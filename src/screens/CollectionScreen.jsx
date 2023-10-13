import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import CollectionItem from '../components/CollectionItem';
import Spacer from '../components/Spacer';
import Theme from '../../Theme';

const CollectionScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView showsHorizontalScrollIndicator={false} style={{ flex: 1 }}>
                <CollectionItem collectionName="Collection Name 1" />
                <CollectionItem collectionName="Collection Name 2" />
                <CollectionItem collectionName="Collection Name 3" />
            </ScrollView>
            <Spacer>
                <TouchableOpacity
                    style={[Theme.Button, { alignItems: 'center', paddingVertical: 10 }]}
                    onPress={() =>
                        console.log('Create new collection')
                    }
                >
                    <Text style={Theme.ButtonText}>Create new collection</Text>
                </TouchableOpacity>
            </Spacer>
        </View>
    );
}

export default CollectionScreen;