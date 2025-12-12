import { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

// Import screens
import ChatScreen from "./screens/ChatScreen";
import ExploreScreen from "./screens/ExploreScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import ProfileScreen from "./screens/ProfileScreen";

// Tab configuration
const TABS = [
    { id: "chat", label: "Chat", icon: "💬", component: ChatScreen },
    { id: "explore", label: "Explore", icon: "🔍", component: ExploreScreen },
    {
        id: "favorites",
        label: "Favorites",
        icon: "❤️",
        component: FavoritesScreen,
    },
    { id: "profile", label: "Profile", icon: "👤", component: ProfileScreen },
];

export default function MainApp() {
    const [activeTab, setActiveTab] = useState("chat");

    const ActiveScreen = TABS.find((tab) => tab.id === activeTab)?.component;

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            {/* Active Screen */}
            <View style={styles.screenContainer}>
                {ActiveScreen && <ActiveScreen />}
            </View>

            {/* Bottom Navigation */}
            <View style={styles.tabBar}>
                {TABS.map((tab) => (
                    <TouchableOpacity
                        key={tab.id}
                        style={[
                            styles.tabButton,
                            activeTab === tab.id && styles.tabButtonActive,
                        ]}
                        onPress={() => setActiveTab(tab.id)}
                    >
                        <Text
                            style={[
                                styles.tabIcon,
                                activeTab === tab.id && styles.tabIconActive,
                            ]}
                        >
                            {tab.icon}
                        </Text>
                        <Text
                            style={[
                                styles.tabLabel,
                                activeTab === tab.id && styles.tabLabelActive,
                            ]}
                        >
                            {tab.label}
                        </Text>
                        {activeTab === tab.id && (
                            <View style={styles.activeIndicator} />
                        )}
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0a0a0a",
    },
    screenContainer: {
        flex: 1,
    },
    tabBar: {
        flexDirection: "row",
        backgroundColor: "#1a1a1a",
        borderTopWidth: 1,
        borderTopColor: "#2a2a2a",
        paddingBottom: 20,
        paddingTop: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 10,
    },
    tabButton: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 8,
        position: "relative",
    },
    tabButtonActive: {
        // Active state styling
    },
    tabIcon: {
        fontSize: 24,
        marginBottom: 4,
        opacity: 0.6,
    },
    tabIconActive: {
        opacity: 1,
        transform: [{ scale: 1.1 }],
    },
    tabLabel: {
        fontSize: 11,
        color: "#999",
        fontWeight: "500",
    },
    tabLabelActive: {
        color: "#CC0001",
        fontWeight: "700",
    },
    activeIndicator: {
        position: "absolute",
        top: 0,
        width: 40,
        height: 3,
        backgroundColor: "#CC0001",
        borderRadius: 2,
    },
});
