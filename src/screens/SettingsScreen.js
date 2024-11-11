import React from "react";
import { Text, View } from "react-native";
import { BoxShadow } from "react-native-shadow";

const shadowOpt = {
    width: 200,
    height: 200,
    color: "#000",
    border: 20,
    radius: 10,
    opacity: 0.1,
    x: 10,
    y: 10,
    style: { marginVertical: 20 },
};

const ComplexShadowExample = () => {
    return (
        <BoxShadow setting={shadowOpt}>
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#FFF",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                }}
            >
                <Text>Ombre complexe avec react-native-shadow</Text>
            </View>
        </BoxShadow>
    );
};

export default ComplexShadowExample;
