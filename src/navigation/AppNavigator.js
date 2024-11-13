import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import ListScreen from "../screens/ListScreen";



const Tab = createBottomTabNavigator();

// colors
const colors = {
    activePageIcon: "rgb(223, 223, 223)",
    background: "rgb(83, 83, 83)",
    activePageBox: "rgb(62, 62, 62)",
    inactivePageIcon: "rgb(42, 42, 42)",
};

// style constants
const radius = 20;
const tabIconSize = 38;

const screens = [
    {
        name: "Home",
        component: HomeScreen,
        iconPath: require("../../assets/icons/navbar/checklist.png"),
    },
    {
        name: "List",
        component: ListScreen,
        iconPath: require("../../assets/icons/navbar/magnifying_glass.png"),
    },
];

// CustomTabButton Component
const CustomTabButton = (props) => {
    const { selected } = props.accessibilityState;

    return (
        <TouchableOpacity
            {...props}
            style={[
                props.style,
                styles.tabButton,
                selected && styles.activeTabButton,
            ]}
        />
    );
};

// AppNavigator Component
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
                        tabBarIcon: ({ color }) => (
                            <Image
                                source={screen.iconPath}
                                style={[
                                    styles.tabIcon,
                                    { tintColor: color },
                                ]}
                            />
                        ),
                        tabBarActiveTintColor: colors.activePageIcon,
                        tabBarInactiveTintColor:
                            colors.inactivePageIcon,
                        tabBarHideOnKeyboard: true,
                        tabBarStyle: styles.tabBar,
                        tabBarLabelStyle: styles.tabBarLabel,
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
                            headerShown: false,
                        }}
                    />
                ))}
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    tabButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: radius,
    },
    activeTabButton: {
        backgroundColor: colors.activePageBox,
        borderTopRightRadius: radius,
    },
    tabBar: {
        backgroundColor: colors.background,

        height: 84,
        borderTopStartRadius: radius,
        borderTopEndRadius: radius,
        position: "absolute",
        bottom: 0,
    },
    tabBarLabel: {
        display: "none",
    },
    tabIcon: {
        width: tabIconSize,
        height: tabIconSize,
    },
});
