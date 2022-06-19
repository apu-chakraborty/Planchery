import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';


function TodoItem({item}) {
    return (
        <View style={styles.item}>
        <View>
            <Text style={styles.title}>{item.title}</Text>
            {/* <Text style={styles.time}>{item.time}</Text> */}
        </View>

        {/* <Text>
            bu
        </Text> */}
      </View>
    )
}

const styles = StyleSheet.create({
    
    item: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 5,
        display: "flex",
        justifyContent: "space-evenly"
    },
    title: {
        fontSize: 18,
    },
    time: {
        fontSize: 12,
        color: "#ddd"
    },
});


export default TodoItem
