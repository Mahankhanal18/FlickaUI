import React, { useRef, useState, useEffect } from 'react';
import { Text, TouchableOpacity, SafeAreaView, View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Theme from '../../Theme';
import Spacer from './Spacer';

const Store = () => {
    const images = [
        require('../../assets/demo1.jpeg'),
        require('../../assets/demo.jpg'),
        require('../../assets/icon.png'),
        require('../../assets/logo.png'),
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollViewRef = useRef(null);

    const handleScroll = (event) => {
        const contentOffset = event.nativeEvent.contentOffset.x;
        const newIndex = Math.floor(contentOffset / Dimensions.get('window').width);

        if (newIndex !== currentIndex) {
            setCurrentIndex(newIndex);
        }
    };

    useEffect(() => {
        if (currentIndex === images.length) {
            setCurrentIndex(0);
            scrollViewRef.current.scrollTo({ x: 0, animated: false });
        }
    }, [currentIndex]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: 20 }}
                onScroll={handleScroll}
            >
                {images.map((image, index) => (
                    <TouchableOpacity key={index} style={styles.slide} activeOpacity={1}>
                        <Image source={image} style={styles.image} />
                    </TouchableOpacity>
                ))}
                <TouchableOpacity style={styles.slide} activeOpacity={1}>
                    <Image source={images[0]} style={styles.image} />
                </TouchableOpacity>
            </ScrollView>
            {/* <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: 20 }}
            >
                <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }} activeOpacity={1}>
                    {images.map((item, index) => (
                        <Image
                            key={index}
                            source={item}
                            style={{ width: 250, height: 250, marginLeft: 20, borderRadius: 10, resizeMode: 'contain' }}
                        />
                    ))}
                </TouchableOpacity>
            </ScrollView> */}
            <View style={{ flexDirection: 'row', width: '100%', position: 'absolute', top: 280 }}>
                <View style={{ flex: 1, paddingLeft: 20 }}>
                    <Text style={[Theme.Font, { fontSize: 20, fontFamily: 'Roboto_700Bold', paddingVertical: 4 }]}>Product Name</Text>
                    <Text style={[Theme.Font, { fontSize: 15, paddingVertical: 4, fontFamily: 'Roboto_400Regular'  }]}>Rs 399</Text>
                    <Text style={[Theme.Font, { fontSize: 15, paddingVertical: 4, fontFamily: 'Roboto_400Regular'  }]}>by Store Name</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.verticalBar}>
                        <View style={styles.verticalBarItem}>
                            <TouchableOpacity style={styles.verticalBarIcon} onPress={() => console.log('Save clicked')}>
                                <FontAwesome name="bookmark-o" size={25} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.verticalBarItem}>
                            <TouchableOpacity style={styles.verticalBarIcon} onPress={() => console.log('Share clicked')}>
                                <FontAwesome name="share" size={25} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ bottom: 20 }}>
                <Spacer>
                    <TouchableOpacity
                        style={Theme.Button}
                        onPress={() =>
                            console.log('Visit Store')
                        }
                    >
                        <Text style={Theme.ButtonText}>Visit Store</Text>
                    </TouchableOpacity>
                </Spacer>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    verticalBar: {
        position: 'relative',
        right: -60,
    },
    verticalBarItem: {
        alignItems: 'center',
        paddingTop: 10,
    },
    verticalBarIcon: {
        width: 36,
        height: 36,
    },
    slide: {
        flex: 1,
        width: Dimensions.get('window').width,
        flexDirection: 'row',
    },
    image: {
        width: 250,
        height: 250,
        marginLeft: 50,
        borderRadius: 10,
        resizeMode: 'contain',
    },
});

export default Store;