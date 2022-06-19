import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity } from 'react-native';
import { COLORS, images } from '../constants';

function Signup({navigation}) {
    console.log(images.loginImg, "Signup")
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                style={{ width: 250, height: 250, marginBottom: 25 }}
               source={images.loginImg}
                resizeMode={'contain'} // cover or contain its upto you view look
            />
            {/* <Text>Signup</Text> */}

            <TextInput
                style={styles.input}
                onChangeText={() => console.log("sdfsd")}
                // value={number}
                placeholder="Email"
                keyboardType="numeric"
            />


            <TextInput
                style={styles.input}
                onChangeText={() => console.log("sdfsd")}
                // value={number}
                placeholder="Username"
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                onChangeText={() => console.log("sdfsd")}
                // value={number}
                placeholder="Password"
                keyboardType="numeric"
            />

            <TouchableOpacity style={styles.buttondesign} onPress={() =>  navigation.navigate('Todo')}>
                <Text style={{ color: COLORS.white }}>Signup</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    input: {
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 10,
        height: 50,
        marginBottom: 10,
        justifyContent: "center",
        padding: 20
    },
    buttondesign: {
        width: "80%",
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
        color: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.primary,
    }
});

export default Signup
