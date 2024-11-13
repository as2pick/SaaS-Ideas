import React, { useContext, useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import StaticText from "../components/home/StaticText";
import TextInputBar from "../components/home/TextInputBar";
import { AppContext } from "../hooks/Context";
import globalStyles from "../styles/globalStyles";

export default function HomeScreen() {
    const { message, setMessage, clearText } = useContext(AppContext);
    const [sendButtonState, setSendButtonState] = useState(false);

    const handleSendMessage = () => {
        if (message.trim().length > 0) {
            setSendButtonState(false); // check if content want to be sended
            clearText(); // clear TextInput
            Keyboard.dismiss(); // remove keyboard
        }
    };

    return (
        <View style={styles.view}>
            <StaticText />
            <TextInputBar
                setMessage={setMessage}
                setButtonState={setSendButtonState}
                state={sendButtonState}
                onSendMessage={handleSendMessage}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: globalStyles.colors.background,
        bottom: 0,
    },
});
