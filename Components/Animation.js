import React, { useRef } from 'react';
import { View, Animated, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Animation = () => {
    const animation = useRef(new Animated.Value(0)).current

    const handlePress = () => {
        Animated.spring(animation, {
            toValue: 1,
            friction: 2,
            tension: 160,
            useNativeDriver: true,
        }).start(() => {
            Animated.spring(animation, {
                toValue: 0,
                friction: 2,
                tension: 160,
                useNativeDriver: true,
            }).start()
        })
    };

    const animatedStyle = {
        transform: [{ scale: animation }],
    };

    return (
        <View >
            <Text style={styles.text}>Animation</Text>
            <TouchableOpacity onPress={handlePress}>
                <Animated.View style={[styles.box, animatedStyle]} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        marginTop: 10,
        marginLeft: 140
    },
    box: {
        marginTop: 100,
        marginLeft: 100,
        width: 200,
        height: 200,
        backgroundColor: 'red',
        borderRadius: 100,
    },
});

export default Animation;
