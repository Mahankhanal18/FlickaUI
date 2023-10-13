import React, { useState, useEffect, useRef } from 'react';
import { useWindowDimensions } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import VideoItem from '../components/VideoItem';

const VideoScreen = ({ videoData }) => {
    const [activeVideoIndex, setActiveVideoIndex] = useState(0);
    const { height } = useWindowDimensions();
    const swiperRef = useRef(null);
    const audioRefs = videoData.map(() => React.createRef());

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (activeVideoIndex + 1) % videoData.length;
            setActiveVideoIndex(nextIndex);
            // Pause the previous video's audio
            if (audioRefs[activeVideoIndex].current) {
                audioRefs[activeVideoIndex].current.pauseAsync();
            }
            // Play the current video's audio
            if (audioRefs[nextIndex].current) {
                audioRefs[nextIndex].current.playAsync();
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [videoData, activeVideoIndex]);

    const renderVideoItem = ({ item, index }) => {
        const key = `${item.id}_${index}`;
        const isActive = activeVideoIndex === index;
        return (
            <VideoItem key={key} data={item} isActive={isActive} audioRef={audioRefs[index]} />
        );
    };

    const handleIndexChanged = (index) => {
        setActiveVideoIndex(index);
        // Pause the previous video's audio
        if (audioRefs[activeVideoIndex].current) {
            audioRefs[activeVideoIndex].current.pauseAsync();
        }
        // Play the current video's audio
        if (audioRefs[index].current) {
            audioRefs[index].current.playAsync();
        }
    };

    return (
        <SwiperFlatList
            ref={swiperRef}
            vertical
            data={Array.from(videoData).concat(videoData).concat(videoData)}
            pagingEnabled
            index={activeVideoIndex}
            renderItem={renderVideoItem}
            onIndexChanged={handleIndexChanged}
            loop
            autoplay={false}
        />
    );
};

export default VideoScreen;
