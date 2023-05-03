import React, { useRef } from "react";
import { View, Text, StyleSheet, Animated, Button, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";

const FadeAnimation = ({ navigation }) => {
    const fadeTxt = useRef(new Animated.Value(0)).current
    const fadetime = useRef(new Animated.Value(0)).current

    const fadeIn = () => {
        Animated.timing(fadeTxt, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true
        }).start()
    };

    const fadeOut = () => {
        Animated.timing(fadeTxt, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true
        }).start()
    };
    const timing = () => {
        Animated.timing(fadetime, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start(() => {
            Animated.timing(fadetime, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true,
            }).start()
        })
    }


    return (
        <SafeAreaView >
            <ScrollView>
                <Text style={styles.text}>React Native Animation</Text>
                <Animated.View style={[
                    styles.fadingContainer,
                    {
                        opacity: fadeTxt,
                    },
                ]}>
                    <Text style={styles.fadingText}>Hello Abhinav</Text>
                </Animated.View>
                <Animated.Image source={require("./Assests/img.jpeg")}
                    style={[styles.img, {
                        opacity: fadetime,
                    }]}>
                </Animated.Image>
                <View style={styles.btn}>
                    <TouchableOpacity onPress={fadeIn}>
                        <Text style={styles.btntext}>Fadein Text</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={fadeOut}>
                        <Text style={styles.btntext1}>Fadeout Text</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity onPress={timing}>
                        <Text style={styles.btntext2}>Fadetime</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity onPress={() => navigation.navigate("secondPage")}>
                        <Text style={styles.btntext3}>Go To SecondPage</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity onPress={() => navigation.navigate("thirdPage")}>
                        <Text style={styles.btntext4}>Go To ThirdPage</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    fadingContainer: {
        marginTop: 20,
        padding: 5,
        backgroundColor: 'aqua',
    },
    fadingText: {
        fontSize: 25,
        marginLeft: 115,
    },
    buttonRow: {
        flexBasis: 100,
        justifyContent: 'space-evenly',
        marginVertical: 16,
    },
    img: {
        width: 200,
        height: 200,
        marginLeft: 100,
        marginTop: 10,

    }, text: {
        fontSize: 22,
        marginLeft: 80,
        marginTop: 20,
    },
    btn: {
        marginTop: 15,
        marginLeft: 85,
        flexDirection: "row",
    },
    btntext: {
        fontSize: 20,
        color: "green"

    },
    btntext1: {
        fontSize: 20,
        marginLeft: 25,
        color: "red"
    },
    btntext2: {
        fontSize: 20,
        marginLeft: 75,
        marginTop: 10,
        color: "black"
    },
    btntext3: {
        fontSize: 22,
        marginLeft: 25,
        marginTop: 250,
        color: "aqua"
    },
    btntext4: {
        fontSize: 22,
        marginLeft: 35,
        marginBottom: 10,
        color: "aqua"
    }


})

export default FadeAnimation;