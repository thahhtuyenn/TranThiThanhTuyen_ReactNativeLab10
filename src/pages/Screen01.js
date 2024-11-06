import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Screen01 = ({route, navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontFamily: "VT323", fontSize: 26, fontWeight: '400', width: "100%", textAlign: "center" }}>
                    A premium online store for {'\n'} sporter and their stylish choice
                </Text>
            </View>

            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{height: 388, width: "95%", backgroundColor: '#E941411A', borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../../assets/img/blue.png')} />
                </View>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontFamily: "Ubuntu", fontSize: 26, fontWeight: '700', width: "100%", textAlign: "center" }}>
                    POWER BIKE {'\n'} SHOP
                    </Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity 
                style={{width: '85%', height: 60, backgroundColor: '#E94141', justifyContent: 'center', alignItems: 'center', borderRadius: 30}}
                onPress={() => {navigation.navigate("Screen02")}} >
                    <Text style={{fontFamily: "VT323", fontSize: 26, fontWeight: '400', width: "100%", textAlign: "center"}}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}