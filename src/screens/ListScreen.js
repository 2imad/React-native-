import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {

    const friends = [
        { name: "Friend#1",age:"12" },
        { name: "Friend#2",age:"20" },
        { name: "Friend#3",age:"32" },
        { name: "Friend#4",age:"75" },
        { name: "Friend#5",age:"15" },
        { name: "Friend#6",age:"22" },
        { name: "Friend#7",age:"32" },
        { name: "Friend#8",age:"12" },
        { name: "Friend#9",age:"29" },
        { name: "Friend#10",age:"19"},
        { name: "Friend#11",age:"36"}
    ];
    return (
        <FlatList
            //horizontal  => renders a list horizontally;
            //showsHorizontalScrollIndicator => boolean to show / hide the scroll indicator
            keyExtractor={(friend) => friend.name} 
            data={friends}
            renderItem={({ item }) => {
                return <Text style= {styles.textStyle}> {item.name} - age {item.age} </Text>;
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        
    }
});

export default ListScreen;
