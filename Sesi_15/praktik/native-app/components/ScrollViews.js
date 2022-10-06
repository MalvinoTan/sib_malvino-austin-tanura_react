import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Text, View, ScrollView } from "react-native";

const ScrollViews = () => {
    let posts = [];

    for (let i = 1; i <= 20; i++) {
        posts.push({
            title: `Title ${i}`,
            description: `Deskripsi untuk title ${i}`
        })
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                {
                    posts.map((post, idx) => (
                        <View style={styles.box} key={idx}>
                            <Text style={styles.title}>{post.title}</Text>
                            <Text>{post.description}</Text>
                        </View>
                    ))
                }
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    },
    scroll: {
        backgroundColor: "#C2B8A3",
        padding: 10
    },
    box: {
        backgroundColor: "#FEF7DC",
        marginBottom: 10,
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default ScrollViews;
