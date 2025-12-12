import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";

// Dummy categories
const CATEGORIES = [
    { id: 1, name: "Mamak", emoji: "🍛", color: "#FF6B6B" },
    { id: 2, name: "Nasi Kandar", emoji: "🍚", color: "#4ECDC4" },
    { id: 3, name: "Chinese", emoji: "🥢", color: "#FFE66D" },
    { id: 4, name: "Malay", emoji: "🌶️", color: "#95E1D3" },
    { id: 5, name: "Indian", emoji: "🫓", color: "#F38181" },
    { id: 6, name: "Café", emoji: "☕", color: "#AA96DA" },
    { id: 7, name: "Street Food", emoji: "🍢", color: "#FCBAD3" },
    { id: 8, name: "Dessert", emoji: "🍨", color: "#A8E6CF" },
];

// Dummy restaurants
const RESTAURANTS = [
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
        tags: ["24 Hours", "Halal", "Popular"],
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
        tags: ["Late Night", "Chicken Wings", "Satay"],
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
        tags: ["Halal", "Nasi Lemak", "Tourist Friendly"],
    },
    {
        id: 4,
        name: "Mamak Corner",
        category: "Mamak",
        image: "🫓",
        rating: 4.6,
        reviews: 3200,
        distance: "300m",
        priceRange: "RM10-20",
        isHalal: true,
        isOpen: true,
        tags: ["24 Hours", "Roti Canai", "Teh Tarik"],
    },
    {
        id: 5,
        name: "Restoran Oversea",
        category: "Chinese",
        image: "🦞",
        rating: 4.7,
        reviews: 4100,
        distance: "600m",
        priceRange: "RM12-25",
        isHalal: false,
        isOpen: true,
        tags: ["Seafood", "Zi Char", "Family Friendly"],
    },
    {
        id: 6,
        name: "Banana Leaf Restaurant",
        category: "Indian",
        image: "🍛",
        rating: 4.4,
        reviews: 1500,
        distance: "900m",
        priceRange: "RM15-28",
        isHalal: true,
        isOpen: false,
        tags: ["Halal", "Banana Leaf", "Biryani"],
    },
    {
        id: 7,
        name: "VCR Café",
        category: "Café",
        image: "☕",
        rating: 4.5,
        reviews: 2800,
        distance: "1.5km",
        priceRange: "RM18-40",
        isHalal: false,
        isOpen: true,
        tags: ["Coffee", "Brunch", "Instagrammable"],
    },
    {
        id: 8,
        name: "Jalan Alor Night Market",
        category: "Street Food",
        image: "🍢",
        rating: 4.6,
        reviews: 5200,
        distance: "2km",
        priceRange: "RM8-20",
        isHalal: false,
        isOpen: true,
        tags: ["Night Market", "Variety", "Local"],
    },
];

export default function ExploreScreen({ navigation }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredRestaurants = RESTAURANTS.filter((restaurant) => {
        const matchesCategory = selectedCategory
            ? restaurant.category === selectedCategory
            : true;
        const matchesSearch = restaurant.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Explore</Text>
                <Text style={styles.headerSubtitle}>
                    Discover amazing Malaysian food 🇲🇾
                </Text>

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <Text style={styles.searchIcon}>🔍</Text>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search restaurants..."
                        placeholderTextColor="#999"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    {searchQuery.length > 0 && (
                        <TouchableOpacity onPress={() => setSearchQuery("")}>
                            <Text style={styles.clearIcon}>✕</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            <ScrollView style={styles.content}>
                {/* Categories */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Categories</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.categoriesContainer}
                    >
                        <TouchableOpacity
                            style={[
                                styles.categoryChip,
                                !selectedCategory && styles.categoryChipActive,
                            ]}
                            onPress={() => setSelectedCategory(null)}
                        >
                            <Text style={styles.categoryEmoji}>🍽️</Text>
                            <Text
                                style={[
                                    styles.categoryText,
                                    !selectedCategory &&
                                        styles.categoryTextActive,
                                ]}
                            >
                                All
                            </Text>
                        </TouchableOpacity>
                        {CATEGORIES.map((category) => (
                            <TouchableOpacity
                                key={category.id}
                                style={[
                                    styles.categoryChip,
                                    selectedCategory === category.name &&
                                        styles.categoryChipActive,
                                ]}
                                onPress={() =>
                                    setSelectedCategory(category.name)
                                }
                            >
                                <Text style={styles.categoryEmoji}>
                                    {category.emoji}
                                </Text>
                                <Text
                                    style={[
                                        styles.categoryText,
                                        selectedCategory === category.name &&
                                            styles.categoryTextActive,
                                    ]}
                                >
                                    {category.name}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Restaurants */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>
                            {selectedCategory || "All Restaurants"}
                        </Text>
                        <Text style={styles.resultCount}>
                            {filteredRestaurants.length} places
                        </Text>
                    </View>

                    {filteredRestaurants.map((restaurant) => (
                        <TouchableOpacity
                            key={restaurant.id}
                            style={styles.restaurantCard}
                            onPress={() => {
                                // Navigate to detail screen
                                console.log("Navigate to:", restaurant.name);
                            }}
                        >
                            {/* Image */}
                            <View style={styles.restaurantImage}>
                                <Text style={styles.restaurantImageEmoji}>
                                    {restaurant.image}
                                </Text>
                                {restaurant.isHalal && (
                                    <View style={styles.halalBadge}>
                                        <Text style={styles.halalBadgeText}>
                                            🕌 Halal
                                        </Text>
                                    </View>
                                )}
                                {!restaurant.isOpen && (
                                    <View style={styles.closedOverlay}>
                                        <Text style={styles.closedText}>
                                            Closed
                                        </Text>
                                    </View>
                                )}
                            </View>

                            {/* Content */}
                            <View style={styles.restaurantContent}>
                                <View style={styles.restaurantHeader}>
                                    <Text
                                        style={styles.restaurantName}
                                        numberOfLines={1}
                                    >
                                        {restaurant.name}
                                    </Text>
                                    <View style={styles.ratingContainer}>
                                        <Text style={styles.ratingStar}>
                                            ⭐
                                        </Text>
                                        <Text style={styles.ratingText}>
                                            {restaurant.rating}
                                        </Text>
                                    </View>
                                </View>

                                <Text style={styles.restaurantCategory}>
                                    {restaurant.category}
                                </Text>

                                <View style={styles.restaurantMeta}>
                                    <Text style={styles.metaText}>
                                        📍 {restaurant.distance}
                                    </Text>
                                    <Text style={styles.metaDot}>•</Text>
                                    <Text style={styles.metaText}>
                                        💰 {restaurant.priceRange}
                                    </Text>
                                    <Text style={styles.metaDot}>•</Text>
                                    <Text style={styles.metaText}>
                                        💬 {restaurant.reviews.toLocaleString()}
                                    </Text>
                                </View>

                                {/* Tags */}
                                <View style={styles.tagsContainer}>
                                    {restaurant.tags
                                        .slice(0, 3)
                                        .map((tag, index) => (
                                            <View
                                                key={index}
                                                style={styles.tag}
                                            >
                                                <Text style={styles.tagText}>
                                                    {tag}
                                                </Text>
                                            </View>
                                        ))}
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Empty State */}
                {filteredRestaurants.length === 0 && (
                    <View style={styles.emptyState}>
                        <Text style={styles.emptyEmoji}>🔍</Text>
                        <Text style={styles.emptyTitle}>
                            No restaurants found
                        </Text>
                        <Text style={styles.emptyText}>
                            Try adjusting your search or category filter
                        </Text>
                    </View>
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
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 15,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    searchIcon: {
        fontSize: 18,
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        color: "#fff",
        fontSize: 16,
    },
    clearIcon: {
        color: "#fff",
        fontSize: 20,
        paddingHorizontal: 8,
    },
    content: {
        flex: 1,
    },
    section: {
        marginTop: 24,
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        paddingHorizontal: 20,
        marginBottom: 16,
    },
    resultCount: {
        fontSize: 14,
        color: "#999",
    },
    categoriesContainer: {
        paddingHorizontal: 20,
        gap: 12,
    },
    categoryChip: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1a1a1a",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
        marginRight: 12,
        borderWidth: 1,
        borderColor: "#2a2a2a",
    },
    categoryChipActive: {
        backgroundColor: "#CC0001",
        borderColor: "#CC0001",
    },
    categoryEmoji: {
        fontSize: 18,
        marginRight: 6,
    },
    categoryText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "500",
    },
    categoryTextActive: {
        fontWeight: "700",
    },
    restaurantCard: {
        backgroundColor: "#1a1a1a",
        borderRadius: 16,
        marginHorizontal: 20,
        marginBottom: 16,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#2a2a2a",
    },
    restaurantImage: {
        height: 120,
        backgroundColor: "#2a2a2a",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    restaurantImageEmoji: {
        fontSize: 60,
    },
    halalBadge: {
        position: "absolute",
        top: 12,
        right: 12,
        backgroundColor: "#16a34a",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 12,
    },
    halalBadgeText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "600",
    },
    closedOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        justifyContent: "center",
        alignItems: "center",
    },
    closedText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    restaurantContent: {
        padding: 16,
    },
    restaurantHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 6,
    },
    restaurantName: {
        flex: 1,
        fontSize: 18,
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
        fontSize: 14,
        marginRight: 4,
    },
    ratingText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
    },
    restaurantCategory: {
        fontSize: 14,
        color: "#999",
        marginBottom: 12,
    },
    restaurantMeta: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },
    metaText: {
        fontSize: 13,
        color: "#ccc",
    },
    metaDot: {
        color: "#666",
        marginHorizontal: 8,
    },
    tagsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    },
    tag: {
        backgroundColor: "#2a2a2a",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
    },
    tagText: {
        color: "#FECB00",
        fontSize: 12,
        fontWeight: "500",
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
    },
});
