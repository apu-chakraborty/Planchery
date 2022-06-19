import React from 'react';
// import {Button, Divider, Icon, Layout, StyleService} from '@ui-kitten/components';
import useStore from "../../store/useStore";
import {useNavigation} from "@react-navigation/native";
import { Modal, Dimensions, Pressable, Image, StyleSheet, Text, TextInput, Alert, TouchableOpacity, View, FlatList, ScrollView, Button } from 'react-native';

import { COLORS, images } from '../../constants';


const FacebookIcon = (props) => (
  <Icon name='facebook' {...props} />
);

export const LoginScreen = () => {
  const login = useStore(state => state.login)
  const navigation = useNavigation();

  const navigateRegister = () => {
    navigation.navigate('Register');
  };

  return (
    // <Layout style={{flex: 1}}>
    //   <Divider/>
    //   <Layout style={styles.layout}>
    //     <Button accessoryLeft={FacebookIcon} status='info' onPress={login}>Login with Facebook</Button>
    //     <Button style={styles.button} onPress={navigateRegister} appearance='ghost'>Register</Button>
    //   </Layout>
    // </Layout>
    <>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "white" }}>
            <Image
                style={{ width: 120, height: 120, marginBottom: 25 }}
               source={images.loginImg}
                resizeMode={'contain'} // cover or contain its upto you view look
            />
            {/* <Text>Login</Text> */}
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
                placeholder="Password"
                keyboardType="numeric"
            />


<TouchableOpacity style={styles.buttondesign} onPress={login}>
                <Text style={{ color: COLORS.white }}>Login</Text>
            </TouchableOpacity>

            <Text>Resend now ?</Text>


            {/* <Text>Login</Text>
   <Button  onPress={login}
   title="Login with Facebook"
  />
         <Button onPress={navigateRegister} title="Register" /> */}


        </View>



    
    </>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 5
  },
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
    padding: 20,
    borderWidth: 1,
    borderColor: "#eee"
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
