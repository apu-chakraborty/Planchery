import React from 'react'
import { Image, TouchableOpacity, StyleSheet, Text, View, Button, ImageBackground, Touchable } from 'react-native';
import { ScrollView } from 'react-native-web';
// import { TouchableOpacity } from 'react-native-web';
import { COLORS, FONTS, images, SIZES } from '../constants/index';
import Todo from './Todo';

function Dashboard() {
    console.log(SIZES.padding, "not")
    return (

<ScrollView>
        <View
            style={{ width: "100", height: 150, marginBottom: '5px',  ...styles.shadow }}>
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
                    marginTop: SIZES.padding * 1,
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
                    }}> Bangla Sahayata Kendras
                    </Text>
                    <Text  style={{
                        color: COLORS.lightGray}}>Near your doorstep</Text>
                </View>
            </ImageBackground>

            
        </View>


        

        <View style={{margin: SIZES.padding * 0.5}}>
            <Text style={{...FONTS.h2}}>What we do</Text>
            <Text>Few of Our Services</Text>
        </View>

        <View >
            <Todo />
        </View>

        </ScrollView>


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

export default Dashboard
