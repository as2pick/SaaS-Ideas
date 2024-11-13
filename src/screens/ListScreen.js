import React from "react";
import { View } from "react-native";
// const shadowOpt = {
//     width: 200,
//     height: 200,
//     color: "#000",
//     border: 20,
//     radius: 10,
//     opacity: 0.1,
//     x: 10,
//     y: 10,
//     style: { marginVertical: 20 },
// };

// const ComplexShadowExample = () => {
//     return (
//         <BoxShadow setting={shadowOpt}>
//             <View
//                 style={{
//                     flex: 1,
//                     backgroundColor: "#FFF",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderRadius: 10,
//                 }}
//             >
//                 <Text>Ombre complexe avec react-native-shadow</Text>
//             </View>
//         </BoxShadow>
//     );
// };

export default function ListScreen() {
    return (
        <View style={styles.container}>
            {/* <View style={styles.box}>
                <Text>Contenu avec Ombre</Text>
            </View> */}
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center", // Centre l'ombre horizontalement
    },
    box: {
        width: 120,
        height: 60,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
};
