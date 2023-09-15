import {StatusBar} from "expo-status-bar";
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import  { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Ionicons} from "@expo/vector-icons";

import CategoryScreen from "./screens/CategoryScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import DrawerNavigator from "@react-navigation/drawer/src/navigators/createDrawerNavigator";
import FavouriteScreen from "./screens/FavouriteScreen";
import FavouritesContextProvider from "./store/context/favourites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigation(){
    return <Drawer.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#351401'},
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerInactiveTintColor : "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#eeb393"
    }}>
        <Drawer.Screen
            name="Categories"
            component={CategoryScreen}
            options={{
                title: "All Categories",
                drawerIcon: ({color, size}) => <Ionicons name="list" color={color} size={size}/>
            }}
        />
        <Drawer.Screen
            name="Favourites"
            component={ FavouriteScreen }
            options={{
               title: "Favourites",
               drawerIcon: ({color, size}) => <Ionicons name="star" color={color} size={size}/>
           }}
        />
    </Drawer.Navigator>
}

export default function App() {
    return (
        <>
            <StatusBar style="light"/>
            <FavouritesContextProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName="MealsCategories"
                        screenOptions={{
                            headerStyle: { backgroundColor: '#351401'},
                            headerTintColor: "white",
                            contentStyle: { backgroundColor: "#3f2f25" }
                        }}
                    >
                        <Stack.Screen
                            name="DrawerScreen"
                            component={DrawerNavigation}
                            options={{
                                headerShown: false
                            }}
                        />
                        <Stack.Screen name="MealsOverview"
                                      component={MealsOverviewScreen}
                        />
                        <Stack.Screen
                            name="MealDetailScreen"
                            component={MealDetailScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </FavouritesContextProvider>

        </>

    );
}

const styles = StyleSheet.create({
    container: {},
});
