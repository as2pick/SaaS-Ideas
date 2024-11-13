// App.js
import { useFonts } from "expo-font";
import React from "react";
import Context from "./hooks/Context";
import AppNavigator from "./navigation/AppNavigator";
export default function App() {
    const [fontsLoaded] = useFonts({
        "Luciole-Bold": require("../assets/fonts/Luciole-Bold.ttf"),
        // "SourceCodePro-LightIt": require("./assets/fonts/SourceCodePro-LightIt.otf"),
    });

    if (!fontsLoaded) {
        return;
    }
    return (
        <Context>
            <AppNavigator />
        </Context>
    );
}
