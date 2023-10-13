import React from 'react';
import { Image, TouchableOpacity, View, Dimensions } from 'react-native';

const SearchContent = () => {
    const searchData = [
        {
            id: 0,
            images: [
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
            ]
        },
        {
            id: 1,
            images: [
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
            ]
        },
        {
            id: 2,
            images: [
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
            ]
        },
    ];

    const { width, height } = Dimensions.get('window');

    return (
        <View style={{ marginBottom: 60 }}>
            {
                searchData.map((data, index) => (
                    <View key={data.id}>
                        {
                            data.id === 0 ?
                                (
                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        {
                                            data.images.map((img, imgIndex) => (
                                                <TouchableOpacity key={imgIndex} style={{ paddingBottom: 2 }}>
                                                    <Image
                                                        source={img}
                                                        style={{ width: width / 3.04, height: 120 }}
                                                    />
                                                </TouchableOpacity>
                                            ))
                                        }
                                    </View>
                                ) : null
                        }
                        {
                            data.id === 1 ?
                                (
                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: width / 1.5, justifyContent: 'space-between' }}>
                                            {
                                                data.images.slice(0, 4).map((img, imgIndex) => (
                                                    <TouchableOpacity key={imgIndex} style={{ paddingBottom: 2 }}>
                                                        <Image
                                                            source={img}
                                                            style={{ width: width / 3.04, height: 120 }}
                                                        />
                                                    </TouchableOpacity>
                                                ))
                                            }
                                        </View>
                                        <TouchableOpacity style={{ marginLeft: 2 }}>
                                            <Image
                                                source={data.images[5]}
                                                style={{ width: width / 3.06, height: 241 }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                ) : null
                        }
                        {
                            data.id === 2 ?
                                (
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <TouchableOpacity style={{ paddingRight: 2 }}>
                                            <Image
                                                source={data.images[2]}
                                                style={{ width: width / 1.5, height: 241 }}
                                            />
                                        </TouchableOpacity>
                                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: 240, justifyContent: 'space-between' }}>
                                            {
                                                data.images.slice(0, 2).map((img, imgIndex) => (
                                                    <TouchableOpacity key={imgIndex} style={{ paddingBottom: 2 }}>
                                                        <Image
                                                            source={img}
                                                            style={{ width: width / 3.04, height: 120 }}
                                                        />
                                                    </TouchableOpacity>
                                                ))
                                            }
                                        </View>
                                    </View>
                                ) : null
                        }
                    </View>
                ))
            }
        </View>
    );
}

export default SearchContent;
