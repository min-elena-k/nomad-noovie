import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Movies from '../screens/Movies';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import Favs from '../screens/Favs';
import { useLayoutEffect } from 'react';
import { Platform } from 'react-native';


const Tabs = createBottomTabNavigator();

const getHeaderName = (route) => {
    return getFocusedRouteNameFromRoute(route) || "Movies";
}

export default ({ navigation, route }) => {
    //useEffect 와 비슷하지만 레이아웃 변경이 다 끝난 후 작동한다는 차이점 
    useLayoutEffect(() => {
        const name = getHeaderName(route)
        navigation.setOptions({ 
            title: name,
        })
    }, [route])
    return (
        <Tabs.Navigator 
            screenOptions={({route}) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName = Platform.OS === "ios" ? "ios-" : "md-";
                    if (route.name === "Movies") {
                        iconName += "film"
                    } else if (route.name === "TV") {
                        iconName += "tv"
                    } else if (route.name === "Search") {
                        iconName += "search"
                    } else if (route.name === "Favorites") {
                        iconName += "heart"
                    }
                    return <Ionicons 
                        name={iconName} 
                        color={focused ? "white" : "grey"} 
                        size={36} />;
                }
            })}
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: "black",
                    borderTopColor: "black"
                }
            }}
        >
        <Tabs.Screen name="Movies" component={Movies}/>
        <Tabs.Screen name="TV" component={Tv}/>
        <Tabs.Screen name="Search" component={Search}/>
        <Tabs.Screen name="Favorites" component={Favs}/>
        </Tabs.Navigator>
    );
};