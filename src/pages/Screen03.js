import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native-web";
import IconF from 'react-native-vector-icons/Ionicons';
import IconAnd from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from "react-native";


export const Screen03 = ({route, navigation}) => {

    const {item} = route.params;

    return(
        <SafeAreaView style={{flex: 1, margin: 5}}>
            <View style={{flex: 2.5, justifyContent: 'center', alignItems: 'center', }}>
                <View style={{ marginVertical: 10, height: 388, width: '90%', backgroundColor: '#E941411A', borderRadius: 5, justifyContent: 'center', alignItems: 'center',}}>
                    <Image source={item.image}  style={{width: "100%", height: 340}} />
                </View>
            </View>

            <View style={{flex: 3, margin: 10}}>
                <View style={{height: 150, justifyContent: 'space-around'}}>
                    <Text style={{fontFamily: "Voltaire", fontSize: 35, fontWeight: '400'}}>
                        {item.name}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={{fontFamily: "Voltaire", fontSize: 25, fontWeight: '400', color: '#00000096'}}>
                        {item.discount}% OFF {item.price - item.price * item.discount / 100}$
                    </Text>
                    <Text style={{fontFamily: "Voltaire", fontSize: 25, fontWeight: '400', textDecorationLine: 'line-through', marginHorizontal: 20}}>
                        {item.price * item.discount / 100}$
                    </Text>
                    </View>
                </View>

                <View style={{height: 150, justifyContent: 'space-around'}}>
                    <Text style={{fontFamily: "Voltaire", fontSize: 25, fontWeight: '400'}}>Description</Text>
                    <Text style={{fontFamily: "Voltaire", fontSize: 22, fontWeight: '400', color: '#00000096'}} numberOfLines={4}>
                        {item.description}
                    </Text>
                </View>
                <View style={{height: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <IconAnd name={item.like == true ? "heart" : "hearto"} size={30} style={{color: item.like == true ? "#54545426" : ""}} />
                    <TouchableOpacity style={{width: 270, height: 60, backgroundColor: '#E94141', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontFamily: 'Voltaire', color: '#FFFAFA', fontSize: 25}}>
                        Add to card
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}