import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

const StylingBasic = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>React Native</Text>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "brown",
        padding: 25
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "black",
        borderRadius: 6,
        backgroundColor: "green",
        color: "white",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    }
})

export default StylingBasic;
