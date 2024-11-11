import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

// colors
const colors = {
    activePageIcon: "rgb(223, 223, 223)",
    background: "rgb(83, 83, 83)",
    activePageBox: "rgb(62, 62, 62)",
    inactivePageIcon: "rgb(32, 32, 32)",
};

// style
const radius = 20;
const iconSize = {
    home: { width: 42, height: 42 },
    list: { width: 37, height: 37 },
};

const screens = [
    {
        name: "Home",
        component: HomeScreen,
        iconPath: require("../../assets/icons/checklist.png"),
        iconStyle: { width: 30, height: 30 },
    },
    {
        name: "List",
        component: SettingsScreen,
        iconPath: require("../../assets/icons/magnifying_glass.png"),
        iconStyle: { width: 30, height: 30 },
    },
];

const CustomTabButton = (props) => {
    const { selected } = props.accessibilityState;

    return (
        <TouchableOpacity
            {...props}
            style={{
                ...props.style,
                backgroundColor: selected
                    ? colors.activePageBox
                    : "transparent",
                borderTopRightRadius: selected ? radius : 0,
                flex: 1,
                borderTopLeftRadius: radius,
                justifyContent: "center",
                alignItems: "center",
            }}
        />
    );
};

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => {
                    const screen = screens.find(
                        (screen) => screen.name === route.name
                    );
                    return {
                        tabBarIcon: ({ color }) => {
                            return (
                                <Image
                                    source={screen.iconPath}
                                    style={{
                                        ...screen.iconStyle,
                                        tintColor: color,
                                    }}
                                />
                            );
                        },
                        tabBarActiveTintColor: colors.activePageIcon,
                        tabBarInactiveTintColor:
                            colors.inactivePageIcon,
                        tabBarHideOnKeyboard: true,
                        tabBarStyle: {
                            backgroundColor: colors.background,
                            height: 84,
                            borderTopStartRadius: radius,
                            borderTopEndRadius: radius,
                        },
                        tabBarLabelStyle: {
                            display: "none",
                        },
                    };
                }}
            >
                {screens.map((screen) => (
                    <Tab.Screen
                        key={screen.name}
                        name={screen.name}
                        component={screen.component}
                        options={{
                            tabBarButton: (props) => (
                                <CustomTabButton {...props} />
                            ),
                        }}
                    />
                ))}
            </Tab.Navigator>
        </NavigationContainer>
    );
}
