import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { Item } from "../components/Item";
import { useData } from "../hook/useData";
import { useDispatch, useSelector } from "react-redux";
import { fetchBikes } from "../reduxToolkit/slice";

const dataCategories = [
    {
        id: 1,
        name: 'All',
    },
    {
        id: 2,
        name: 'Roadbike',
    },
    {
        id: 3,
        name: 'Mountain',
    },
    {
        id: 4,
        name: 'School',
    },
    {
        id: 5,
        name: 'Comunity',
    }
]

export const Screen02 = ({ route, navigation }) => {
    const [category, setCategory] = useState(dataCategories[0]);
    // const url = "https://66f38c9f71c84d8058790dec.mockapi.io/bikes";
    // const { bikes, fetchData, filterData} = useData({url});
    const bikes = useSelector((state) => state.bikes.value);;
    const dispatch = useDispatch();

    const handleClickItem = (item) => {
        navigation.navigate("Screen03", {item})
    }

    useEffect(() => {
        dispatch(fetchBikes())
    }, [])

    // useEffect(() => {
    //     filterData(category);
    // }, []);

    // useEffect(() => {
    //     filterData(category);
    // }, [category]);

    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 10 }}>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: "Ubuntu", color: '#E94141', fontSize: 25, fontWeight: '400', width: "100%", textAlign: "left" }}>
                        The world’s Best Bike
                    </Text>
                </View>

                <View style={{ height: 60 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            dataCategories.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        key={item.id}
                                        onPress={() => {
                                            setCategory(item)
                                        }}
                                        style={{ width: 100, height: 35, borderWidth: 1, borderColor: '#E9414187', justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginHorizontal: 10 }}>
                                        <Text style={{ color: item.id === category.id ? "#E94141" : "#BEB6B6" }}>{item.name}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>

                <View style={{flex: 1}}>
                    <FlatList 
                        data={bikes}
                        renderItem={({ item }) => <Item props={item} handleClickItem={handleClickItem} />}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}