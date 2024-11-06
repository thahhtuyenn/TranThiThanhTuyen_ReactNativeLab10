import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Screen01 } from "../pages/Screen01";
import { Screen02 } from "../pages/Screen02";
import { Screen03 } from "../pages/Screen03";


const Stack = createStackNavigator();

export const AppNavigation = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false, cardStyle: {flex: 1}}}>
                <Stack.Screen name="Screen01" component={Screen01} />
                <Stack.Screen name="Screen02" component={Screen02} />
                <Stack.Screen name="Screen03" component={Screen03} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}