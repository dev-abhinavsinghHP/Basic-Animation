import React, { useRef } from "react";
import { View, Text, StyleSheet, Animated, Button, SafeAreaView } from "react-native";

const FadeAnimation = () => {
    const fade = useRef(new Animated.Value(0)).current

    const fadeIn = () => {
        Animated.timing(fade, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true
        }).start()
    };

    const fadeOut = () => {
        Animated.timing(fade, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true
        }).start()
    };

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={[
                styles.fadingContainer,
                {
                    opacity: fade,
                },
            ]}>
                <Text style={styles.fadingText}>Hello Abhinav</Text>
            </Animated.View>
            <View style={styles.buttonRow}>
                <Button title="Fade IN" onPress={fadeIn} />
                <Button title="Fade Out" onPress={fadeOut} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fadingContainer: {
        padding: 20,
        backgroundColor: 'powderblue',
    },
    fadingText: {
        fontSize: 28,
    },
    buttonRow: {
        flexBasis: 100,
        justifyContent: 'space-evenly',
        marginVertical: 16,
    },
})

export default FadeAnimation;