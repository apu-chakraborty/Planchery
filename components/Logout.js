import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity } from 'react-native';
import { COLORS, images } from '../constants';
import useStore from "../store/useStore";


function Logout({navigation}) {
    console.log(images.loginImg, "Signup")

  const logout = useStore(state => state.logout)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                style={{ width: 250, height: 250, marginBottom: 25 }}
               source={images.loginImg}
                resizeMode={'contain'} // cover or contain its upto you view look
            />
            {/* <Text>Signup</Text> */}

       

            <TouchableOpacity style={styles.buttondesign} onPress={() =>  {logout}}>
                <Text style={{ color: COLORS.white }}>Logout</Text>
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

export default Logout
