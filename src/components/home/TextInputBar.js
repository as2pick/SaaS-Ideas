import React, { useContext, useEffect, useState } from "react";
import {
    Image,
    Keyboard,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { AppContext } from "../../hooks/Context";
import globalStyles from "../../styles/globalStyles";

export default function TextInputBar({
    setMessage,
    setButtonState,
    state,
    onSendMessage,
}) {
    const { textInputRef } = useContext(AppContext);
    const [inputHeight, setInputHeight] = useState(40);
    const [numLines, setNumLines] = useState(1);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            "keyboardDidShow",
            () => setKeyboardVisible(true)
        );
        const keyboardDidHideListener = Keyboard.addListener(
            "keyboardDidHide",
            () => setKeyboardVisible(false)
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const handleContentSizeChange = (event) => {
        const { height } = event.nativeEvent.contentSize;
        const lineHeight = 20;

        setNumLines(Math.floor(height / lineHeight));
        setInputHeight(height);
    };

    const handleChangeText = (text) => {
        setMessage(text);
        setButtonState(text.length > 0);
    };

    return (
        <View
            style={[
                styles.textInputBox,
                {
                    bottom: isKeyboardVisible ? 20 : 280,
                },
            ]}
        >
            <TextInput
                style={[
                    styles.textInput,
                    {
                        height: inputHeight,
                        borderRadius: numLines > 2 ? 23 : 75,
                        color: globalStyles.colors.text,
                    },
                ]}
                ref={textInputRef}
                onChangeText={handleChangeText}
                placeholder="Tapez votre message ici..."
                placeholderTextColor={globalStyles.colors.text}
                cursorColor={globalStyles.colors.text}
                selectionColor={globalStyles.colors.primary}
                keyboardType="default"
                multiline={true}
                scrollEnabled={true}
                onContentSizeChange={handleContentSizeChange}
            />
            {state && (
                <TouchableOpacity
                    onPress={onSendMessage}
                    style={[
                        styles.sendBoutonContainer,
                        {
                            backgroundColor:
                                globalStyles.colors.primary,
                        },
                    ]}
                >
                    <Image
                        source={require("../../../assets/icons/screens/home/send.png")}
                        style={styles.sendBouton}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        margin: 12,
        minWidth: 240,
        minHeight: 48,
        paddingVertical: 15,
        paddingHorizontal: 25,
        backgroundColor: globalStyles.colors.secondary,
        flex: 1,
    },
    textInputBox: {
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        marginStart: 25,
        marginEnd: 25,
        flexDirection: "row",
    },
    text: {
        fontSize: 20,
    },

    sendBoutonContainer: {
        padding: 10,
        borderRadius: 60,
    },
    sendBouton: {
        width: 26,
        height: 26,
    },
});
