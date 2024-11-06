import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectDropdown from "react-native-select-dropdown";
import IconF5 from "react-native-vector-icons/FontAwesome5";
import { useDispatch, useSelector } from "react-redux";
import { addBike } from "../reduxToolkit/slice";

const bike = {
    name: "",
    image: "",
    price: 0,
    categoryName: "",
    like: false,
}



export const ScreenAdd = ({ route, navigation }) => {
    const categories = [
        {
            id: 1,
            name: 'Roadbike',
        },
        {
            id: 2,
            name: 'Mountain',
        },
        {
            id: 3,
            name: 'School',
        },
        {
            id: 4,
            name: 'Comunity',
        }
    ]
    const [bikeAdd, setBikeAdd] = useState(bike);
    const [categorySelect, setCategorySelect] = useState(null);
    const bikes = useSelector((state) => state.bikes.value);;
    const dispatch = useDispatch();
    const [action, setAction] = useState("")


    hanldClickAdd = () => {
        if(bikeAdd.name !== "" && bikeAdd.image !== "" && bikeAdd.price > 0 && bikeAdd.categoryName !== ""){
            dispatch(addBike({ body: bikeAdd }));
            navigation.navigate("Screen02")
        }
    }


    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{ height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: "#E94141" }}>
                <Text style={{ fontSize: 19, fontWeight: '700', color: "#fff" }}>Add bike</Text>
            </View>

            <View style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: 'medium', textAlign: 'left', width: "90%", marginHorizontal: 'auto', marginVertical: 5 }}>Name: </Text>
                <TextInput
                    value={bikeAdd.name}
                    onChangeText={text => { setBikeAdd({ ...bikeAdd, name: text }) }}
                    placeholder="Enter bike name"
                    placeholderTextColor={"#c4c4c4"}
                    style={{
                        width: "90%", height: 35,
                        borderWidth: 1, borderColor: '#E94141',
                        borderRadius: 8, marginHorizontal: 'auto', paddingHorizontal: 15
                    }}
                />
            </View>

            <View style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: 'medium', textAlign: 'left', width: "90%", marginHorizontal: 'auto', marginVertical: 5 }}>
                    Image link:
                </Text>
                <TextInput
                    value={bikeAdd.image}
                    onChangeText={text => { setBikeAdd({ ...bikeAdd, image: text }) }}
                    placeholder="Enter link image"
                    placeholderTextColor={"#c4c4c4"}
                    style={{
                        width: "90%", height: 35,
                        borderWidth: 1, borderColor: '#E94141',
                        borderRadius: 8, marginHorizontal: 'auto', paddingHorizontal: 15
                    }}
                />
            </View>

            <View style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: 'medium', textAlign: 'left', width: "90%", marginHorizontal: 'auto', marginVertical: 5 }}>
                    Price:
                </Text>
                <TextInput
                    value={bikeAdd.price}
                    onChangeText={text => { setBikeAdd({ ...bikeAdd, price: text }) }}
                    placeholder="Enter price"
                    placeholderTextColor={"#c4c4c4"}
                    style={{
                        width: "90%", height: 35,
                        borderWidth: 1, borderColor: '#E94141',
                        borderRadius: 8, marginHorizontal: 'auto', paddingHorizontal: 15
                    }}
                />
            </View>

            <View style={{width: "90%", marginHorizontal: 'auto', marginVertical: 15}}>
                <SelectDropdown
                    data={categories.length ? categories : []}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                        setCategorySelect(selectedItem);
                        setBikeAdd({...bikeAdd, categoryName: categorySelect.name})                        
                    }}
                    renderButton={(selectedItem, isOpened) => {
                        return (
                            <View style={{
                                width: "100%", height: 35, borderWidth: 1, borderColor: "#E94141", borderRadius: 8,
                                paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
                            }}>
                                <Text style={{}}>
                                    {(categorySelect && categorySelect.name) || 'Bike category'}
                                </Text>
                                <IconF5 name={isOpened ? 'chevron-up' : 'chevron-down'} style={{}} />
                            </View>
                        );
                    }}

                    renderItem={(item, index, isSelected) => {
                        return (
                            <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                                <Text style={[{ fontSize: 15 }]}>{item.name}</Text>
                            </View>
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={{}}
                />
            </View>

            <View style={{position: 'absolute', bottom: 30, width: "100%"}}>
            <TouchableOpacity 
                style={{width: '85%', height: 60, backgroundColor: '#E94141', 
                justifyContent: 'center', alignItems: 'center', borderRadius: 30, 
                marginHorizontal: 'auto', }}
                onPress={() => {hanldClickAdd()}} >
                    <Text style={{fontFamily: "VT323", fontSize: 26, fontWeight: '400', width: "100%", textAlign: "center"}}>Add</Text>
            </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}