import { TouchableOpacity } from 'react-native'
import { Image, Text, View } from 'react-native'
import IconAnt from 'react-native-vector-icons/AntDesign'


export const Item = ({ props, handleClickItem }) => {
    

    return (
        <TouchableOpacity
            style={{
                width: '45%',
                height: 200,
                backgroundColor: '#F7BA8326',
                borderRadius: 10,
                margin: 10,
            }}
            onPress={() => {
                handleClickItem(props);
            }}
        >
            {/* <Image
                source={props.like === true ? require('../../assets/img/heart_bgr.png') : require('../../assets/img/heart_none.png')} 
                style={{
                    width: 30, // Kích thước của icon trái tim (bạn có thể điều chỉnh)
                    height: 30,
                    position: 'absolute',
                    top: 15, // Điều chỉnh để di chuyển trái tim lên trên
                    left: 20, // Điều chỉnh để di chuyển trái tim sang phải
                    zIndex: 1,
                }}
            /> */}
            <IconAnt name={props.like === true ? 'heart' : 'hearto'}
            style={{ position: 'absolute', top: 15, left: 20, fontSize: 30, zIndex: 1, color: props.like === true ? "#E94141" : "#000" }} />

            <View style={{ width: 135, height: 125, marginHorizontal: 'auto', marginVertical: 10 }}>
                <Image
                    source={props.image}
                    style={{ width: 135, height: 125, marginHorizontal: 'auto' }}
                />
            </View>

            <View style={{ width: '100%', height: 60, justifyContent: 'center', alignItems: 'center' }}>
                <Text
                    style={{
                        fontFamily: 'Roboto',
                        color: '#00000099',
                        fontSize: 20,
                        fontWeight: '400',
                        width: '85%',
                    }}
                    numberOfLines={1}
                >
                    {props.name}
                </Text>

                <Text style={{ fontFamily: 'Roboto', color: '#F7BA83', fontSize: 20, fontWeight: '400' }}>
                    ${' '}
                    <Text style={{ color: '#000000' }}>{props.price}</Text>
                </Text>
            </View>
        </TouchableOpacity>
    );
}