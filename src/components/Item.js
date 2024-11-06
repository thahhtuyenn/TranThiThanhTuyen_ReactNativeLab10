import { TouchableOpacity } from 'react-native'
import { Image, Text, View } from 'react-native'
import {IconAnd} from 'react-native-vector-icons/AntDesign'


export const Item = ({props, handleClickItem}) => {
    return (
        <TouchableOpacity style={{ width: '45%', height: 200, backgroundColor: '#F7BA8326', borderRadius: 10, margin: 10 }} onPress={() => {handleClickItem(props)}}>
            {/* <IconAnd name={props.like == true ? "heart" : "hearto"} size={30} style={{color: props.like == true ? "#54545426" : "", position: 'absolute' }} /> */}
            <Image source={require('../../assets/img/heart-bgr.png')} style={{ margin: 10, position: 'absolute' }} />
            <Image source={props.image} style={{ width: 135, height: 125, margin: 10 }} />
            <View style={{ width: '100%', height: 60, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Voltaire', color: '#00000099', fontSize: 20, fontWeight: '400' }}>
                    {props.name}
                </Text>

                <Text style={{ fontFamily: 'Voltaire', color: '#F7BA83', fontSize: 20, fontWeight: '400' }}>
                    $<Text style={{ color: '#000000' }}>{props.price}</Text>
                </Text>
            </View>
        </TouchableOpacity>
    )
}