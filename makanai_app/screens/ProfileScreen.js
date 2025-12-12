import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Switch,
} from "react-native";
import { StatusBar } from "expo-status-bar";

// Dummy user data
const USER_DATA = {
    name: "Ahmad Rahman",
    email: "ahmad.rahman@example.com",
    phone: "+60 12-345 6789",
    location: "Kuala Lumpur",
    memberSince: "Jan 2024",
    totalVisits: 42,
    favoriteCount: 15,
};

// Preferences
const PREFERENCES = {
    halal: true,
    budget: "RM20-30",
    distance: "2km",
    cuisine: ["Malay", "Chinese", "Indian"],
};

export default function ProfileScreen({ navigation }) {
    const [halalOnly, setHalalOnly] = useState(PREFERENCES.halal);
    const [notifications, setNotifications] = useState(true);
    const [locationServices, setLocationServices] = useState(true);
    const [darkMode, setDarkMode] = useState(true);

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.profileSection}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>
                            {USER_DATA.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                        </Text>
                    </View>
                    <View style={styles.profileInfo}>
                        <Text style={styles.name}>{USER_DATA.name}</Text>
                        <Text style={styles.email}>{USER_DATA.email}</Text>
                        <Text style={styles.memberSince}>
                            Member since {USER_DATA.memberSince}
                        </Text>
                    </View>
                </View>
            </View>

            <ScrollView style={styles.content}>
                {/* Stats */}
                <View style={styles.statsContainer}>
                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>
                            {USER_DATA.totalVisits}
                        </Text>
                        <Text style={styles.statLabel}>Visits</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>
                            {USER_DATA.favoriteCount}
                        </Text>
                        <Text style={styles.statLabel}>Favorites</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>
                            {PREFERENCES.cuisine.length}
                        </Text>
                        <Text style={styles.statLabel}>Cuisines</Text>
                    </View>
                </View>

                {/* Food Preferences */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Food Preferences</Text>

                    <View style={styles.preferenceCard}>
                        <View style={styles.preferenceHeader}>
                            <Text style={styles.preferenceIcon}>🕌</Text>
                            <View style={styles.preferenceInfo}>
                                <Text style={styles.preferenceTitle}>
                                    Halal Only
                                </Text>
                                <Text style={styles.preferenceSubtitle}>
                                    Show only halal-certified restaurants
                                </Text>
                            </View>
                            <Switch
                                value={halalOnly}
                                onValueChange={setHalalOnly}
                                trackColor={{
                                    false: "#2a2a2a",
                                    true: "#16a34a",
                                }}
                                thumbColor={halalOnly ? "#fff" : "#666"}
                            />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.preferenceCard}>
                        <View style={styles.preferenceHeader}>
                            <Text style={styles.preferenceIcon}>💰</Text>
                            <View style={styles.preferenceInfo}>
                                <Text style={styles.preferenceTitle}>
                                    Budget Range
                                </Text>
                                <Text style={styles.preferenceSubtitle}>
                                    {PREFERENCES.budget} per meal
                                </Text>
                            </View>
                            <Text style={styles.preferenceArrow}>→</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.preferenceCard}>
                        <View style={styles.preferenceHeader}>
                            <Text style={styles.preferenceIcon}>📍</Text>
                            <View style={styles.preferenceInfo}>
                                <Text style={styles.preferenceTitle}>
                                    Max Distance
                                </Text>
                                <Text style={styles.preferenceSubtitle}>
                                    Within {PREFERENCES.distance}
                                </Text>
                            </View>
                            <Text style={styles.preferenceArrow}>→</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.preferenceCard}>
                        <View style={styles.preferenceHeader}>
                            <Text style={styles.preferenceIcon}>🍽️</Text>
                            <View style={styles.preferenceInfo}>
                                <Text style={styles.preferenceTitle}>
                                    Favorite Cuisines
                                </Text>
                                <Text style={styles.preferenceSubtitle}>
                                    {PREFERENCES.cuisine.join(", ")}
                                </Text>
                            </View>
                            <Text style={styles.preferenceArrow}>→</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* App Settings */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>App Settings</Text>

                    <View style={styles.preferenceCard}>
                        <View style={styles.preferenceHeader}>
                            <Text style={styles.preferenceIcon}>🔔</Text>
                            <View style={styles.preferenceInfo}>
                                <Text style={styles.preferenceTitle}>
                                    Notifications
                                </Text>
                                <Text style={styles.preferenceSubtitle}>
                                    Get updates and recommendations
                                </Text>
                            </View>
                            <Switch
                                value={notifications}
                                onValueChange={setNotifications}
                                trackColor={{
                                    false: "#2a2a2a",
                                    true: "#CC0001",
                                }}
                                thumbColor={notifications ? "#fff" : "#666"}
                            />
                        </View>
                    </View>

                    <View style={styles.preferenceCard}>
                        <View style={styles.preferenceHeader}>
                            <Text style={styles.preferenceIcon}>📍</Text>
                            <View style={styles.preferenceInfo}>
                                <Text style={styles.preferenceTitle}>
                                    Location Services
                                </Text>
                                <Text style={styles.preferenceSubtitle}>
                                    Find restaurants near you
                                </Text>
                            </View>
                            <Switch
                                value={locationServices}
                                onValueChange={setLocationServices}
                                trackColor={{
                                    false: "#2a2a2a",
                                    true: "#CC0001",
                                }}
                                thumbColor={locationServices ? "#fff" : "#666"}
                            />
                        </View>
                    </View>

                    <View style={styles.preferenceCard}>
                        <View style={styles.preferenceHeader}>
                            <Text style={styles.preferenceIcon}>🌙</Text>
                            <View style={styles.preferenceInfo}>
                                <Text style={styles.preferenceTitle}>
                                    Dark Mode
                                </Text>
                                <Text style={styles.preferenceSubtitle}>
                                    Always enabled
                                </Text>
                            </View>
                            <Switch
                                value={darkMode}
                                onValueChange={setDarkMode}
                                trackColor={{
                                    false: "#2a2a2a",
                                    true: "#CC0001",
                                }}
                                thumbColor={darkMode ? "#fff" : "#666"}
                            />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.preferenceCard}>
                        <View style={styles.preferenceHeader}>
                            <Text style={styles.preferenceIcon}>🌐</Text>
                            <View style={styles.preferenceInfo}>
                                <Text style={styles.preferenceTitle}>
                                    Language
                                </Text>
                                <Text style={styles.preferenceSubtitle}>
                                    English (Malaysia)
                                </Text>
                            </View>
                            <Text style={styles.preferenceArrow}>→</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Account */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Account</Text>

                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={styles.menuIcon}>👤</Text>
                        <Text style={styles.menuText}>Edit Profile</Text>
                        <Text style={styles.menuArrow}>→</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={styles.menuIcon}>🔒</Text>
                        <Text style={styles.menuText}>Privacy & Security</Text>
                        <Text style={styles.menuArrow}>→</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={styles.menuIcon}>📧</Text>
                        <Text style={styles.menuText}>Email Preferences</Text>
                        <Text style={styles.menuArrow}>→</Text>
                    </TouchableOpacity>
                </View>

                {/* Support */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Support</Text>

                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={styles.menuIcon}>❓</Text>
                        <Text style={styles.menuText}>Help Center</Text>
                        <Text style={styles.menuArrow}>→</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={styles.menuIcon}>💬</Text>
                        <Text style={styles.menuText}>Contact Support</Text>
                        <Text style={styles.menuArrow}>→</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={styles.menuIcon}>⭐</Text>
                        <Text style={styles.menuText}>Rate MakanMate AI</Text>
                        <Text style={styles.menuArrow}>→</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={styles.menuIcon}>📄</Text>
                        <Text style={styles.menuText}>Terms & Privacy</Text>
                        <Text style={styles.menuArrow}>→</Text>
                    </TouchableOpacity>
                </View>

                {/* About */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>About</Text>

                    <View style={styles.aboutCard}>
                        <Text style={styles.aboutTitle}>MakanMate AI</Text>
                        <Text style={styles.aboutVersion}>Version 1.0.0</Text>
                        <Text style={styles.aboutDescription}>
                            Your smart Malaysian food companion 🇲🇾
                        </Text>
                        <Text style={styles.aboutCopyright}>
                            © 2024 MakanMate AI. All rights reserved.
                        </Text>
                    </View>
                </View>

                {/* Logout */}
                <View style={styles.section}>
                    <TouchableOpacity style={styles.logoutButton}>
                        <Text style={styles.logoutText}>Log Out</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 40 }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0a0a0a",
    },
    header: {
        backgroundColor: "#CC0001",
        paddingTop: 50,
        paddingBottom: 30,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    profileSection: {
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "#FECB00",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 16,
    },
    avatarText: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#000",
    },
    profileInfo: {
        flex: 1,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 4,
    },
    email: {
        fontSize: 14,
        color: "#fff",
        opacity: 0.9,
        marginBottom: 4,
    },
    memberSince: {
        fontSize: 12,
        color: "#fff",
        opacity: 0.7,
    },
    content: {
        flex: 1,
    },
    statsContainer: {
        flexDirection: "row",
        padding: 20,
        gap: 12,
    },
    statCard: {
        flex: 1,
        backgroundColor: "#1a1a1a",
        padding: 16,
        borderRadius: 12,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#2a2a2a",
    },
    statNumber: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#FECB00",
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 12,
        color: "#999",
    },
    section: {
        paddingHorizontal: 20,
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 16,
    },
    preferenceCard: {
        backgroundColor: "#1a1a1a",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#2a2a2a",
    },
    preferenceHeader: {
        flexDirection: "row",
        alignItems: "center",
    },
    preferenceIcon: {
        fontSize: 24,
        marginRight: 12,
    },
    preferenceInfo: {
        flex: 1,
    },
    preferenceTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
        marginBottom: 4,
    },
    preferenceSubtitle: {
        fontSize: 13,
        color: "#999",
    },
    preferenceArrow: {
        fontSize: 20,
        color: "#666",
    },
    menuItem: {
        backgroundColor: "#1a1a1a",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#2a2a2a",
    },
    menuIcon: {
        fontSize: 20,
        marginRight: 12,
    },
    menuText: {
        flex: 1,
        fontSize: 16,
        color: "#fff",
        fontWeight: "500",
    },
    menuArrow: {
        fontSize: 20,
        color: "#666",
    },
    aboutCard: {
        backgroundColor: "#1a1a1a",
        borderRadius: 12,
        padding: 20,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#2a2a2a",
    },
    aboutTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 4,
    },
    aboutVersion: {
        fontSize: 14,
        color: "#999",
        marginBottom: 12,
    },
    aboutDescription: {
        fontSize: 14,
        color: "#ccc",
        textAlign: "center",
        marginBottom: 12,
    },
    aboutCopyright: {
        fontSize: 12,
        color: "#666",
        textAlign: "center",
    },
    logoutButton: {
        backgroundColor: "#dc2626",
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: "center",
    },
    logoutText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
