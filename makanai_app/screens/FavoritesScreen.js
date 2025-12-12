import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";

// Dummy favorites data
const FAVORITES = [
    {
        id: 1,
        name: "Restoran Nasi Kandar Pelita",
        category: "Nasi Kandar",
        image: "🍛",
        rating: 4.5,
        reviews: 2100,
        distance: "500m",
        priceRange: "RM15-25",
        isHalal: true,
        isOpen: true,
        savedDate: "2 days ago",
        visitCount: 5,
    },
    {
        id: 2,
        name: "Wong Ah Wah",
        category: "Chinese",
        image: "🍗",
        rating: 4.4,
        reviews: 2500,
        distance: "800m",
        priceRange: "RM15-30",
        isHalal: false,
        isOpen: true,
        savedDate: "1 week ago",
        visitCount: 3,
    },
    {
        id: 3,
        name: "Madam Kwan's",
        category: "Malay",
        image: "🍜",
        rating: 4.3,
        reviews: 1800,
        distance: "1.2km",
        priceRange: "RM20-35",
        isHalal: true,
        isOpen: true,
        savedDate: "2 weeks ago",
        visitCount: 2,
    },
    {
        id: 4,
        name: "VCR Café",
        category: "Café",
        image: "☕",
        rating: 4.5,
        reviews: 2800,
        distance: "1.5km",
        priceRange: "RM18-40",
        isHalal: false,
        isOpen: true,
        savedDate: "3 weeks ago",
        visitCount: 7,
    },
];

// Dummy collections
const COLLECTIONS = [
    {
        id: 1,
        name: "Late Night Favorites",
        emoji: "🌙",
        count: 8,
        color: "#7c3aed",
    },
    {
        id: 2,
        name: "Halal Spots",
        emoji: "🕌",
        count: 12,
        color: "#16a34a",
    },
    {
        id: 3,
        name: "Budget Friendly",
        emoji: "💰",
        count: 15,
        color: "#FECB00",
    },
    {
        id: 4,
        name: "Date Night",
        emoji: "💑",
        count: 5,
        color: "#ec4899",
    },
];

export default function FavoritesScreen({ navigation }) {
    const [favorites, setFavorites] = useState(FAVORITES);
    const [selectedView, setSelectedView] = useState("all"); // 'all' or 'collections'

    const handleRemoveFavorite = (id) => {
        setFavorites(favorites.filter((fav) => fav.id !== id));
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Favorites</Text>
                <Text style={styles.headerSubtitle}>
                    {favorites.length} saved places
                </Text>

                {/* View Toggle */}
                <View style={styles.viewToggle}>
                    <TouchableOpacity
                        style={[
                            styles.toggleButton,
                            selectedView === "all" && styles.toggleButtonActive,
                        ]}
                        onPress={() => setSelectedView("all")}
                    >
                        <Text
                            style={[
                                styles.toggleText,
                                selectedView === "all" &&
                                    styles.toggleTextActive,
                            ]}
                        >
                            All Favorites
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.toggleButton,
                            selectedView === "collections" &&
                                styles.toggleButtonActive,
                        ]}
                        onPress={() => setSelectedView("collections")}
                    >
                        <Text
                            style={[
                                styles.toggleText,
                                selectedView === "collections" &&
                                    styles.toggleTextActive,
                            ]}
                        >
                            Collections
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={styles.content}>
                {selectedView === "all" ? (
                    <>
                        {/* Stats */}
                        <View style={styles.statsContainer}>
                            <View style={styles.statCard}>
                                <Text style={styles.statNumber}>
                                    {favorites.length}
                                </Text>
                                <Text style={styles.statLabel}>
                                    Saved Places
                                </Text>
                            </View>
                            <View style={styles.statCard}>
                                <Text style={styles.statNumber}>
                                    {favorites.reduce(
                                        (sum, fav) => sum + fav.visitCount,
                                        0
                                    )}
                                </Text>
                                <Text style={styles.statLabel}>
                                    Total Visits
                                </Text>
                            </View>
                            <View style={styles.statCard}>
                                <Text style={styles.statNumber}>
                                    {
                                        favorites.filter((fav) => fav.isHalal)
                                            .length
                                    }
                                </Text>
                                <Text style={styles.statLabel}>Halal</Text>
                            </View>
                        </View>

                        {/* Favorites List */}
                        <View style={styles.section}>
                            {favorites.length > 0 ? (
                                favorites.map((favorite) => (
                                    <TouchableOpacity
                                        key={favorite.id}
                                        style={styles.favoriteCard}
                                        onPress={() => {
                                            console.log(
                                                "Navigate to:",
                                                favorite.name
                                            );
                                        }}
                                    >
                                        {/* Image */}
                                        <View style={styles.favoriteImage}>
                                            <Text
                                                style={
                                                    styles.favoriteImageEmoji
                                                }
                                            >
                                                {favorite.image}
                                            </Text>
                                            {favorite.isHalal && (
                                                <View style={styles.halalBadge}>
                                                    <Text
                                                        style={
                                                            styles.halalBadgeText
                                                        }
                                                    >
                                                        🕌
                                                    </Text>
                                                </View>
                                            )}
                                        </View>

                                        {/* Content */}
                                        <View style={styles.favoriteContent}>
                                            <View style={styles.favoriteHeader}>
                                                <Text
                                                    style={styles.favoriteName}
                                                    numberOfLines={1}
                                                >
                                                    {favorite.name}
                                                </Text>
                                                <View
                                                    style={
                                                        styles.ratingContainer
                                                    }
                                                >
                                                    <Text
                                                        style={
                                                            styles.ratingStar
                                                        }
                                                    >
                                                        ⭐
                                                    </Text>
                                                    <Text
                                                        style={
                                                            styles.ratingText
                                                        }
                                                    >
                                                        {favorite.rating}
                                                    </Text>
                                                </View>
                                            </View>

                                            <Text
                                                style={styles.favoriteCategory}
                                            >
                                                {favorite.category}
                                            </Text>

                                            <View style={styles.favoriteMeta}>
                                                <Text style={styles.metaText}>
                                                    📍 {favorite.distance}
                                                </Text>
                                                <Text style={styles.metaDot}>
                                                    •
                                                </Text>
                                                <Text style={styles.metaText}>
                                                    💰 {favorite.priceRange}
                                                </Text>
                                            </View>

                                            <View style={styles.favoriteFooter}>
                                                <Text style={styles.savedDate}>
                                                    Saved {favorite.savedDate}
                                                </Text>
                                                <Text style={styles.visitCount}>
                                                    {favorite.visitCount} visits
                                                </Text>
                                            </View>
                                        </View>

                                        {/* Remove Button */}
                                        <TouchableOpacity
                                            style={styles.removeButton}
                                            onPress={() =>
                                                handleRemoveFavorite(
                                                    favorite.id
                                                )
                                            }
                                        >
                                            <Text
                                                style={styles.removeButtonText}
                                            >
                                                ✕
                                            </Text>
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                ))
                            ) : (
                                <View style={styles.emptyState}>
                                    <Text style={styles.emptyEmoji}>💔</Text>
                                    <Text style={styles.emptyTitle}>
                                        No favorites yet
                                    </Text>
                                    <Text style={styles.emptyText}>
                                        Start exploring and save your favorite
                                        restaurants!
                                    </Text>
                                    <TouchableOpacity
                                        style={styles.exploreButton}
                                    >
                                        <Text style={styles.exploreButtonText}>
                                            Explore Restaurants
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>
                    </>
                ) : (
                    <>
                        {/* Collections View */}
                        <View style={styles.section}>
                            <View style={styles.sectionHeader}>
                                <Text style={styles.sectionTitle}>
                                    My Collections
                                </Text>
                                <TouchableOpacity>
                                    <Text style={styles.addButton}>+ New</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.collectionsGrid}>
                                {COLLECTIONS.map((collection) => (
                                    <TouchableOpacity
                                        key={collection.id}
                                        style={[
                                            styles.collectionCard,
                                            { borderColor: collection.color },
                                        ]}
                                    >
                                        <Text style={styles.collectionEmoji}>
                                            {collection.emoji}
                                        </Text>
                                        <Text
                                            style={styles.collectionName}
                                            numberOfLines={2}
                                        >
                                            {collection.name}
                                        </Text>
                                        <View
                                            style={[
                                                styles.collectionCount,
                                                {
                                                    backgroundColor:
                                                        collection.color,
                                                },
                                            ]}
                                        >
                                            <Text
                                                style={
                                                    styles.collectionCountText
                                                }
                                            >
                                                {collection.count} places
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}

                                {/* Add New Collection */}
                                <TouchableOpacity
                                    style={styles.addCollectionCard}
                                >
                                    <Text style={styles.addCollectionIcon}>
                                        +
                                    </Text>
                                    <Text style={styles.addCollectionText}>
                                        Create Collection
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Quick Access */}
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>
                                Quick Access
                            </Text>
                            <TouchableOpacity style={styles.quickAccessCard}>
                                <Text style={styles.quickAccessIcon}>🌙</Text>
                                <View style={styles.quickAccessContent}>
                                    <Text style={styles.quickAccessTitle}>
                                        Late Night Spots
                                    </Text>
                                    <Text style={styles.quickAccessSubtitle}>
                                        8 places open now
                                    </Text>
                                </View>
                                <Text style={styles.quickAccessArrow}>→</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.quickAccessCard}>
                                <Text style={styles.quickAccessIcon}>🔥</Text>
                                <View style={styles.quickAccessContent}>
                                    <Text style={styles.quickAccessTitle}>
                                        Most Visited
                                    </Text>
                                    <Text style={styles.quickAccessSubtitle}>
                                        Your top picks
                                    </Text>
                                </View>
                                <Text style={styles.quickAccessArrow}>→</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.quickAccessCard}>
                                <Text style={styles.quickAccessIcon}>📍</Text>
                                <View style={styles.quickAccessContent}>
                                    <Text style={styles.quickAccessTitle}>
                                        Nearby Favorites
                                    </Text>
                                    <Text style={styles.quickAccessSubtitle}>
                                        Within 1km
                                    </Text>
                                </View>
                                <Text style={styles.quickAccessArrow}>→</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
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
        paddingBottom: 20,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 4,
    },
    headerSubtitle: {
        fontSize: 14,
        color: "#fff",
        opacity: 0.9,
        marginBottom: 16,
    },
    viewToggle: {
        flexDirection: "row",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 12,
        padding: 4,
    },
    toggleButton: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: "center",
    },
    toggleButtonActive: {
        backgroundColor: "#fff",
    },
    toggleText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
    },
    toggleTextActive: {
        color: "#CC0001",
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
        textAlign: "center",
    },
    section: {
        padding: 20,
        paddingTop: 0,
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 16,
    },
    addButton: {
        color: "#FECB00",
        fontSize: 16,
        fontWeight: "600",
    },
    favoriteCard: {
        backgroundColor: "#1a1a1a",
        borderRadius: 16,
        marginBottom: 16,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#2a2a2a",
        flexDirection: "row",
    },
    favoriteImage: {
        width: 100,
        backgroundColor: "#2a2a2a",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    favoriteImageEmoji: {
        fontSize: 40,
    },
    halalBadge: {
        position: "absolute",
        top: 8,
        right: 8,
        width: 24,
        height: 24,
        backgroundColor: "#16a34a",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    halalBadgeText: {
        fontSize: 12,
    },
    favoriteContent: {
        flex: 1,
        padding: 16,
    },
    favoriteHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 6,
    },
    favoriteName: {
        flex: 1,
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        marginRight: 8,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2a2a2a",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    ratingStar: {
        fontSize: 12,
        marginRight: 4,
    },
    ratingText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "600",
    },
    favoriteCategory: {
        fontSize: 13,
        color: "#999",
        marginBottom: 8,
    },
    favoriteMeta: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },
    metaText: {
        fontSize: 12,
        color: "#ccc",
    },
    metaDot: {
        color: "#666",
        marginHorizontal: 8,
    },
    favoriteFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    savedDate: {
        fontSize: 11,
        color: "#999",
    },
    visitCount: {
        fontSize: 11,
        color: "#FECB00",
        fontWeight: "600",
    },
    removeButton: {
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2a2a2a",
    },
    removeButtonText: {
        color: "#dc2626",
        fontSize: 20,
        fontWeight: "bold",
    },
    collectionsGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
    },
    collectionCard: {
        width: "48%",
        backgroundColor: "#1a1a1a",
        padding: 16,
        borderRadius: 16,
        borderWidth: 2,
        alignItems: "center",
    },
    collectionEmoji: {
        fontSize: 40,
        marginBottom: 12,
    },
    collectionName: {
        fontSize: 15,
        fontWeight: "600",
        color: "#fff",
        textAlign: "center",
        marginBottom: 12,
    },
    collectionCount: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
    },
    collectionCountText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "600",
    },
    addCollectionCard: {
        width: "48%",
        backgroundColor: "#1a1a1a",
        padding: 16,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: "#2a2a2a",
        borderStyle: "dashed",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 150,
    },
    addCollectionIcon: {
        fontSize: 40,
        color: "#666",
        marginBottom: 8,
    },
    addCollectionText: {
        fontSize: 14,
        color: "#999",
        fontWeight: "600",
    },
    quickAccessCard: {
        backgroundColor: "#1a1a1a",
        padding: 16,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#2a2a2a",
    },
    quickAccessIcon: {
        fontSize: 32,
        marginRight: 16,
    },
    quickAccessContent: {
        flex: 1,
    },
    quickAccessTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
        marginBottom: 4,
    },
    quickAccessSubtitle: {
        fontSize: 13,
        color: "#999",
    },
    quickAccessArrow: {
        fontSize: 20,
        color: "#666",
    },
    emptyState: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 60,
    },
    emptyEmoji: {
        fontSize: 60,
        marginBottom: 16,
    },
    emptyTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 8,
    },
    emptyText: {
        fontSize: 14,
        color: "#999",
        textAlign: "center",
        marginBottom: 24,
        paddingHorizontal: 40,
    },
    exploreButton: {
        backgroundColor: "#CC0001",
        paddingHorizontal: 24,
        paddingVertical: 14,
        borderRadius: 12,
    },
    exploreButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});
