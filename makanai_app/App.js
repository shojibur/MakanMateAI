import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🍽️ MakanMate AI</Text>
            <Text style={styles.subtitle}>
                Your Smart Malaysian Food Companion
            </Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#16a34a",
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
    },
});
