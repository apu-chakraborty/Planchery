import React from 'react';
// import {Button, Divider, Layout, StyleService} from '@ui-kitten/components';
import useStore from "../../store/useStore";
import {useNavigation} from "@react-navigation/native";
import { Modal, Dimensions, Pressable, Image, StyleSheet, Text, TextInput, Alert, TouchableOpacity, View, FlatList, ScrollView, Button } from 'react-native';

export const RegisterScreen = () => {
  const login = useStore(state => state.login)
  const navigation = useNavigation();

  const navigateLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <>
       <Button onPress={() => login()} title="Create account" />
        <Button style={styles.button} onPress={navigateLogin} title="Back to Login" />
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
  }
});
