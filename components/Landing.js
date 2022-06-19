import React, {useState, useRef} from 'react'
import { Modal, Dimensions, Pressable, Image, StyleSheet, Text, TextInput, Alert, TouchableOpacity, View, FlatList, ScrollView, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS, images } from '../constants';
import TodoItem from './TodoItem';
import Header from './Header';





const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        time: '8:20',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        time: '8:20m',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        time: '8:20',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d75',
        title: 'Third Item',
        time: '8:20',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d76',
        title: 'Third Item',
        time: '8:20',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d77',
        title: 'Third Item',
        time: '8:20',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d78',
        title: 'Third Item',
        time: '8:20',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d79',
        title: 'Third Item',
        time: '8:20',
    },
];



function Landing() {
    const [modalVisible, setModalVisible] = useState(false);
    const [task, setTask] = useState("");
    
const createOnSubmit = () => {
    if(!task) return Alert.alert("Please Enter a task")
    console.log(task)
}

    const renderItem = ({ item }) => (
        <TodoItem item={item} />
    );
    

    return (
        <>
            <Header />
        <View style={styles.container}>
          
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>

        {/* start modal */}

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ flex: 1, backgroundColor: '#000000AA' }}>
          <View style={styles.modalView}>

          <Pressable
             
             onPress={() => setModalVisible(!modalVisible)}
           >
             <Text>Hide Modal</Text>
           </Pressable>


            <View style={{
            //   alignSelf: 'center',
            //   color: '#182E44',
            //   fontSize: 20,
            //   fontWeight: '500',
              margin: 15
            }}>
                <TextInput
                style={styles.input}
                onChangeText={(e) => setTask(e)}
                // value={number}
                placeholder="Enter Your Task"
           
            /> 

<TouchableOpacity style={styles.buttondesign} onPress={() => createOnSubmit()}>
                <Text style={{ color: COLORS.white }}>Create</Text>
            </TouchableOpacity>
                </View>

               
         
          </View>
        </View>
      </Modal>



        <TouchableOpacity activeOpacity={0.8} 
       onPress={() => setModalVisible(true)}
       style={styles.touchableOpacityStyle}>
            <Image
                source={images.plus} //put your plus icon path
                style={styles.floatingButtonStyle}
            />
           
    </TouchableOpacity>
      </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //   marginTop: StatusBar.currentHeight || 0,
    },
    title: {
        fontSize: 18,
    },
    input: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 10,
        height: 50,
        justifyContent: "center",
        padding: 20
    },
    buttondesign: {
        width: "100%",
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
    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height:50,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        borderRadius: 40,
        backgroundColor:COLORS.primary,
      },
      floatingButtonStyle: {
        resizeMode: 'contain',
        width: 25,
        height: 25,
        tintColor:'white',
        //backgroundColor:'black'
      },

    //   modal
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        bottom: 0,
        position: 'absolute',
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        // height: Dimensions.get('window').height * 0.4,
        maxHeight: Dimensions.get('window').height * 0.4
      },
     
});

export default Landing
