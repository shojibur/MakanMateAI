import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";

// Dummy comparison data
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
        avgPrice: 20,
        isHalal: true,
        isOpen: true,
        openHours: "24 Hours",
        specialties: ["Nasi Kandar", "Ayam Goreng", "Kambing Curry"],
        whyMatch: [
            "Certified halal",
            "Open 24 hours",
            "Very close to you",
            "Highly rated",
        ],
        pros: ["24/7 availability", "Authentic taste", "Large portions"],
        cons: ["Can be crowded", "Limited parking"],
    },
    {
        id: 2,
        name: "Madam Kwan's",
        category: "Malay",
        image: "🍜",
        rating: 4.3,
        reviews: 1800,
        distance: "1.2km",
        priceRange: "RM20-35",
        avgPrice: 27,
        isHalal: true,
        isOpen: true,
        openHours: "10 AM - 10 PM",
        specialties: ["Nasi Lemak", "Rendang", "Satay"],
        whyMatch: [
            "Halal certified",
            "Tourist friendly",
            "English menu",
            "Air-conditioned",
        ],
        pros: ["Premium ambiance", "Tourist friendly", "Consistent quality"],
        cons: ["Higher prices", "Further distance"],
    },
];

const COMPARISON_CATEGORIES = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "pricing", label: "Pricing", icon: "💰" },
    { id: "location", label: "Location", icon: "📍" },
    { id: "features", label: "Features", icon: "✨" },
    { id: "reviews", label: "Reviews", icon: "⭐" },
];

export default function ComparisonScreen({ navigation }) {
    const [selectedCategory, setSelectedCategory] = useState("overview");

    const renderOverview = () => (
        <View style={styles.comparisonSection}>
            {RESTAURANTS.map((restaurant, index) => (
                <View
                    key={restaurant.id}
                    style={[
                        styles.comparisonCard,
                        index === 0 && styles.recommendedCard,
                    ]}
                >
                    {index === 0 && (
                        <View style={styles.recommendedBadge}>
                            <Text style={styles.recommendedText}>
                                🏆 Best Match
                            </Text>
                        </View>
                    )}

                    <View style={styles.restaurantImageSmall}>
                        <Text style={styles.restaurantImageEmojiSmall}>
                            {restaurant.image}
                        </Text>
                    </View>

                    <Text style={styles.comparisonName} numberOfLines={2}>
                        {restaurant.name}
                    </Text>
                    <Text style={styles.comparisonCategory}>
                        {restaurant.category}
                    </Text>

                    <View style={styles.comparisonMeta}>
                        <View style={styles.metaItem}>
                            <Text style={styles.metaLabel}>Rating</Text>
                            <View style={styles.ratingRow}>
                                <Text style={styles.ratingStar}>⭐</Text>
                                <Text style={styles.metaValue}>
                                    {restaurant.rating}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.metaItem}>
                            <Text style={styles.metaLabel}>Distance</Text>
                            <Text style={styles.metaValue}>
                                {restaurant.distance}
                            </Text>
                        </View>

                        <View style={styles.metaItem}>
                            <Text style={styles.metaLabel}>Price</Text>
                            <Text style={styles.metaValue}>
                                {restaurant.priceRange}
                            </Text>
                        </View>
                    </View>

                    {restaurant.isHalal && (
                        <View style={styles.halalIndicator}>
                            <Text style={styles.halalText}>
                                🕌 Halal Certified
                            </Text>
                        </View>
                    )}

                    <View
                        style={[
                            styles.statusIndicator,
                            restaurant.isOpen
                                ? styles.openIndicator
                                : styles.closedIndicator,
                        ]}
                    >
                        <Text style={styles.statusText}>
                            {restaurant.isOpen ? "Open Now" : "Closed"}
                        </Text>
                        <Text style={styles.hoursText}>
                            {restaurant.openHours}
                        </Text>
                    </View>
                </View>
            ))}
        </View>
    );

    const renderPricing = () => (
        <View style={styles.comparisonSection}>
            {RESTAURANTS.map((restaurant) => (
                <View key={restaurant.id} style={styles.comparisonCard}>
                    <Text style={styles.comparisonName} numberOfLines={1}>
                        {restaurant.name}
                    </Text>

                    <View style={styles.pricingDetail}>
                        <Text style={styles.pricingLabel}>Price Range</Text>
                        <Text style={styles.pricingValue}>
                            {restaurant.priceRange}
                        </Text>
                    </View>

                    <View style={styles.pricingDetail}>
                        <Text style={styles.pricingLabel}>Average Cost</Text>
                        <Text style={styles.pricingValue}>
                            RM{restaurant.avgPrice}
                        </Text>
                    </View>

                    <View style={styles.pricingBar}>
                        <View
                            style={[
                                styles.pricingBarFill,
                                {
                                    width: `${
                                        (restaurant.avgPrice / 40) * 100
                                    }%`,
                                },
                            ]}
                        />
                    </View>

                    <Text style={styles.pricingNote}>
                        {restaurant.avgPrice < 25
                            ? "💰 Budget Friendly"
                            : "💎 Premium Dining"}
                    </Text>
                </View>
            ))}
        </View>
    );

    const renderLocation = () => (
        <View style={styles.comparisonSection}>
            {RESTAURANTS.map((restaurant, index) => (
                <View key={restaurant.id} style={styles.comparisonCard}>
                    <Text style={styles.comparisonName} numberOfLines={1}>
                        {restaurant.name}
                    </Text>

                    <View style={styles.locationDetail}>
                        <Text style={styles.locationIcon}>📍</Text>
                        <View style={styles.locationInfo}>
                            <Text style={styles.locationDistance}>
                                {restaurant.distance}
                            </Text>
                            <Text style={styles.locationNote}>
                                {index === 0
                                    ? "Closest to you"
                                    : "A bit further"}
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.directionsButton}>
                        <Text style={styles.directionsButtonText}>
                            🧭 Get Directions
                        </Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );

    const renderFeatures = () => (
        <View style={styles.comparisonSection}>
            {RESTAURANTS.map((restaurant) => (
                <View key={restaurant.id} style={styles.comparisonCard}>
                    <Text style={styles.comparisonName} numberOfLines={1}>
                        {restaurant.name}
                    </Text>

                    <View style={styles.featuresSection}>
                        <Text style={styles.featuresTitle}>Specialties</Text>
                        {restaurant.specialties.map((specialty, idx) => (
                            <View key={idx} style={styles.featureItem}>
                                <Text style={styles.featureIcon}>•</Text>
                                <Text style={styles.featureText}>
                                    {specialty}
                                </Text>
                            </View>
                        ))}
                    </View>

                    <View style={styles.featuresSection}>
                        <Text style={styles.featuresTitle}>Why It Matches</Text>
                        {restaurant.whyMatch.map((reason, idx) => (
                            <View key={idx} style={styles.featureItem}>
                                <Text style={styles.featureIcon}>✓</Text>
                                <Text style={styles.featureText}>{reason}</Text>
                            </View>
                        ))}
                    </View>

                    <View style={styles.prosConsSection}>
                        <View style={styles.prosSection}>
                            <Text style={styles.prosTitle}>👍 Pros</Text>
                            {restaurant.pros.map((pro, idx) => (
                                <Text key={idx} style={styles.proText}>
                                    • {pro}
                                </Text>
                            ))}
                        </View>

                        <View style={styles.consSection}>
                            <Text style={styles.consTitle}>👎 Cons</Text>
                            {restaurant.cons.map((con, idx) => (
                                <Text key={idx} style={styles.conText}>
                                    • {con}
                                </Text>
                            ))}
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );

    const renderReviews = () => (
        <View style={styles.comparisonSection}>
            {RESTAURANTS.map((restaurant) => (
                <View key={restaurant.id} style={styles.comparisonCard}>
                    <Text style={styles.comparisonName} numberOfLines={1}>
                        {restaurant.name}
                    </Text>

                    <View style={styles.reviewsOverview}>
                        <View style={styles.ratingLarge}>
                            <Text style={styles.ratingLargeNumber}>
                                {restaurant.rating}
                            </Text>
                            <Text style={styles.ratingStars}>⭐⭐⭐⭐⭐</Text>
                        </View>

                        <View style={styles.reviewsCount}>
                            <Text style={styles.reviewsCountNumber}>
                                {restaurant.reviews.toLocaleString()}
                            </Text>
                            <Text style={styles.reviewsCountLabel}>
                                reviews
                            </Text>
                        </View>
                    </View>

                    <View style={styles.reviewHighlight}>
                        <Text style={styles.reviewHighlightTitle}>
                            Most Mentioned
                        </Text>
                        <View style={styles.reviewTags}>
                            <View style={styles.reviewTag}>
                                <Text style={styles.reviewTagText}>
                                    Great food
                                </Text>
                            </View>
                            <View style={styles.reviewTag}>
                                <Text style={styles.reviewTagText}>
                                    Good service
                                </Text>
                            </View>
                            <View style={styles.reviewTag}>
                                <Text style={styles.reviewTagText}>Clean</Text>
                            </View>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );

    const renderContent = () => {
        switch (selectedCategory) {
            case "overview":
                return renderOverview();
            case "pricing":
                return renderPricing();
            case "location":
                return renderLocation();
            case "features":
                return renderFeatures();
            case "reviews":
                return renderReviews();
            default:
                return renderOverview();
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation?.goBack()}
                >
                    <Text style={styles.backButtonText}>←</Text>
                </TouchableOpacity>
                <View style={styles.headerContent}>
                    <Text style={styles.headerTitle}>Compare</Text>
                    <Text style={styles.headerSubtitle}>
                        Find the perfect match
                    </Text>
                </View>
            </View>

            {/* Category Tabs */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.categoryTabs}
                contentContainerStyle={styles.categoryTabsContent}
            >
                {COMPARISON_CATEGORIES.map((category) => (
                    <TouchableOpacity
                        key={category.id}
                        style={[
                            styles.categoryTab,
                            selectedCategory === category.id &&
                                styles.categoryTabActive,
                        ]}
                        onPress={() => setSelectedCategory(category.id)}
                    >
                        <Text style={styles.categoryIcon}>{category.icon}</Text>
                        <Text
                            style={[
                                styles.categoryLabel,
                                selectedCategory === category.id &&
                                    styles.categoryLabelActive,
                            ]}
                        >
                            {category.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Comparison Content */}
            <ScrollView style={styles.content}>{renderContent()}</ScrollView>

            {/* Bottom Action */}
            <View style={styles.bottomAction}>
                <TouchableOpacity style={styles.selectButton}>
                    <Text style={styles.selectButtonText}>
                        Choose Restoran Nasi Kandar Pelita
                    </Text>
                </TouchableOpacity>
            </View>
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
        flexDirection: "row",
        alignItems: "center",
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },
    backButtonText: {
        color: "#fff",
        fontSize: 24,
    },
    headerContent: {
        flex: 1,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
    },
    headerSubtitle: {
        fontSize: 14,
        color: "#fff",
        opacity: 0.9,
    },
    categoryTabs: {
        backgroundColor: "#0a0a0a",
        borderBottomWidth: 1,
        borderBottomColor: "#2a2a2a",
    },
    categoryTabsContent: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        gap: 12,
    },
    categoryTab: {
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
    categoryTabActive: {
        backgroundColor: "#CC0001",
        borderColor: "#CC0001",
    },
    categoryIcon: {
        fontSize: 16,
        marginRight: 6,
    },
    categoryLabel: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "500",
    },
    categoryLabelActive: {
        fontWeight: "700",
    },
    content: {
        flex: 1,
    },
    comparisonSection: {
        flexDirection: "row",
        padding: 20,
        gap: 16,
    },
    comparisonCard: {
        flex: 1,
        backgroundColor: "#1a1a1a",
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: "#2a2a2a",
    },
    recommendedCard: {
        borderColor: "#FECB00",
        borderWidth: 2,
    },
    recommendedBadge: {
        backgroundColor: "#FECB00",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
        alignSelf: "flex-start",
        marginBottom: 12,
    },
    recommendedText: {
        color: "#000",
        fontSize: 12,
        fontWeight: "700",
    },
    restaurantImageSmall: {
        height: 80,
        backgroundColor: "#2a2a2a",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12,
    },
    restaurantImageEmojiSmall: {
        fontSize: 40,
    },
    comparisonName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 4,
    },
    comparisonCategory: {
        fontSize: 13,
        color: "#999",
        marginBottom: 16,
    },
    comparisonMeta: {
        gap: 12,
        marginBottom: 12,
    },
    metaItem: {
        gap: 4,
    },
    metaLabel: {
        fontSize: 12,
        color: "#999",
    },
    metaValue: {
        fontSize: 15,
        fontWeight: "600",
        color: "#fff",
    },
    ratingRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    ratingStar: {
        fontSize: 14,
        marginRight: 4,
    },
    halalIndicator: {
        backgroundColor: "#16a34a",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 8,
        marginBottom: 12,
    },
    halalText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "600",
        textAlign: "center",
    },
    statusIndicator: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 8,
    },
    openIndicator: {
        backgroundColor: "#16a34a",
    },
    closedIndicator: {
        backgroundColor: "#dc2626",
    },
    statusText: {
        color: "#fff",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center",
    },
    hoursText: {
        color: "#fff",
        fontSize: 11,
        textAlign: "center",
        opacity: 0.8,
        marginTop: 2,
    },
    pricingDetail: {
        marginBottom: 12,
    },
    pricingLabel: {
        fontSize: 12,
        color: "#999",
        marginBottom: 4,
    },
    pricingValue: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
    pricingBar: {
        height: 8,
        backgroundColor: "#2a2a2a",
        borderRadius: 4,
        marginBottom: 12,
        overflow: "hidden",
    },
    pricingBarFill: {
        height: "100%",
        backgroundColor: "#CC0001",
    },
    pricingNote: {
        fontSize: 13,
        color: "#FECB00",
        fontWeight: "600",
    },
    locationDetail: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    locationIcon: {
        fontSize: 32,
        marginRight: 12,
    },
    locationInfo: {
        flex: 1,
    },
    locationDistance: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 4,
    },
    locationNote: {
        fontSize: 13,
        color: "#999",
    },
    directionsButton: {
        backgroundColor: "#CC0001",
        paddingVertical: 12,
        borderRadius: 10,
    },
    directionsButtonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
        textAlign: "center",
    },
    featuresSection: {
        marginBottom: 16,
    },
    featuresTitle: {
        fontSize: 14,
        fontWeight: "600",
        color: "#fff",
        marginBottom: 8,
    },
    featureItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 6,
    },
    featureIcon: {
        color: "#FECB00",
        marginRight: 8,
        fontSize: 14,
    },
    featureText: {
        flex: 1,
        color: "#ccc",
        fontSize: 13,
        lineHeight: 18,
    },
    prosConsSection: {
        gap: 12,
    },
    prosSection: {
        backgroundColor: "#1a3a1a",
        padding: 12,
        borderRadius: 8,
    },
    prosTitle: {
        fontSize: 13,
        fontWeight: "600",
        color: "#4ade80",
        marginBottom: 6,
    },
    proText: {
        color: "#ccc",
        fontSize: 12,
        lineHeight: 18,
    },
    consSection: {
        backgroundColor: "#3a1a1a",
        padding: 12,
        borderRadius: 8,
    },
    consTitle: {
        fontSize: 13,
        fontWeight: "600",
        color: "#f87171",
        marginBottom: 6,
    },
    conText: {
        color: "#ccc",
        fontSize: 12,
        lineHeight: 18,
    },
    reviewsOverview: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
    },
    ratingLarge: {
        alignItems: "center",
    },
    ratingLargeNumber: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 4,
    },
    ratingStars: {
        fontSize: 12,
    },
    reviewsCount: {
        alignItems: "flex-end",
    },
    reviewsCountNumber: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
    },
    reviewsCountLabel: {
        fontSize: 12,
        color: "#999",
    },
    reviewHighlight: {
        backgroundColor: "#2a2a2a",
        padding: 12,
        borderRadius: 8,
    },
    reviewHighlightTitle: {
        fontSize: 13,
        fontWeight: "600",
        color: "#fff",
        marginBottom: 8,
    },
    reviewTags: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    },
    reviewTag: {
        backgroundColor: "#1a1a1a",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
    },
    reviewTagText: {
        color: "#FECB00",
        fontSize: 11,
        fontWeight: "500",
    },
    bottomAction: {
        backgroundColor: "#0a0a0a",
        borderTopWidth: 1,
        borderTopColor: "#2a2a2a",
        padding: 20,
        paddingBottom: 30,
    },
    selectButton: {
        backgroundColor: "#CC0001",
        paddingVertical: 16,
        borderRadius: 12,
    },
    selectButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
});
