import React from 'react'
import { Image, TouchableOpacity, StyleSheet, Text, View, Button, ImageBackground, Touchable } from 'react-native';
// import { TouchableOpacity } from 'react-native-web';
import { COLORS, FONTS, images, SIZES } from '../constants/index';

function Header() {
    console.log(SIZES.padding, "not")
    return (


        <View
            style={{ width: "100", height: 190, marginBottom: '15px',  ...styles.shadow }}>
            <ImageBackground
                source={images.bannerBg}
                resizeMode='cover'
                style={{
                    flex: 1,
                    alignItems: "center"
                }}
            >

                {/* notification */}
                <View style={{
                    marginTop: SIZES.padding * 2,
                    width: "100%",
                    alignItems: "flex-end",
                    paddingHorizontal: SIZES.padding,
                    zIndex: 99999
                }}>
                    <TouchableOpacity style={{
                        width: 35,
                        height: 35,
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 99999
                    }}
                        onPress={() => console.log("test")}
                    >

                        <Image source={images.notification_white}
                            resizeMode="contain"
                            style={{ flex: 1, zIndex: 99999 }}
                            />
                    </TouchableOpacity>
                </View>

                {/* task head */}
                <View style={{
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Text style={{
                        color: COLORS.white,
                          ...FONTS.h2
                    }}>Today's Tasks</Text>
                </View>
            </ImageBackground>
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
    }
});

export default Header
