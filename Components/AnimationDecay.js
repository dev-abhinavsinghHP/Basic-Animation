import React, { useRef } from 'react';
import { Animated, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const AnimationDecay = () => {
    const animationValue = useRef(new Animated.Value(0)).current;

    const startAnimation = () => {
        Animated.decay(animationValue, {
            velocity: 0.4,
            deceleration: 0.997,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.text, {
                transform: [{ translateY: animationValue }]
            }]}>
                Hello Everyone!
            </Animated.Text>
            <TouchableOpacity onPress={startAnimation} style={styles.btn}>
                <Text style={styles.textbtn}>Start Animation</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    text: {
        fontSize: 33,
        marginLeft: 100,

    },
    btn: {
        marginTop: 10,
        marginLeft: 130,
        marginRight: 90,
        backgroundColor: "black",
        height: 33,
        borderRadius: 20,
    },
    textbtn: {
        marginTop: 2,
        fontSize: 20,
        color: "white",
        marginLeft: 26,
    }
})
export default AnimationDecay;
