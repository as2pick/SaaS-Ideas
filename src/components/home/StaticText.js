import React from "react";
import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../../styles/globalStyles";

export default function StaticText() {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>Type Something...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 36,
        fontFamily: "Luciole-Bold",
        letterSpacing: -3,
        textAlign: "center",
        color: globalStyles.colors.text,
    },
    view: {
        marginBottom: 200,

        marginStart: 70,
        marginEnd: 70,
    },
});
