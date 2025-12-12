import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Linking,
    Share,
} from "react-native";
import { StatusBar } from "expo-status-bar";

// Dummy restaurant data
const RESTAURANT_DATA = {
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
    openHours: "24 Hours",
    phone: "+60 3-2142 3200",
    address: "Jalan Ampang, Kuala Lumpur, 50450",
    description:
        "Famous 24-hour mamak restaurant serving authentic nasi kandar with a wide variety of curries and side dishes. Known for their flavorful ayam goreng berempah and tender lamb curry.",
    tags: ["24 Hours", "Halal", "Popular", "Family Friendly"],
    specialties: [
        "Nasi Kandar Special",
        "Ayam Goreng Berempah",
        "Kambing Curry",
        "Sotong Sambal",
        "Roti Canai",
    ],
    amenities: ["Dine-in", "Takeaway", "Parking", "Air-conditioned"],
    whyMatch: [
        "🕌 Certified halal restaurant",
        "📍 Only 500m away from your location",
        "⭐ Highly rated by 2,100+ customers",
        "🌙 Open 24 hours for late night cravings",
        "💰 Affordable pricing within your budget",
    ],
};

// Dummy reviews
const REVIEWS = [
    {
        id: 1,
        author: "Ahmad Rahman",
        rating: 5,
        date: "2 days ago",
        text: "Best nasi kandar in KL! The ayam goreng is crispy and flavorful. Always crowded but worth the wait.",
    },
    {
        id: 2,
        author: "Sarah Lee",
        rating: 4,
        date: "1 week ago",
        text: "Great food, generous portions. The lamb curry is amazing. Can get quite busy during peak hours.",
    },
    {
        id: 3,
        author: "Raj Kumar",
        rating: 5,
        date: "2 weeks ago",
        text: "My go-to place for late night supper. Open 24 hours and consistently good quality.",
    },
];

export default function RestaurantDetailScreen({ navigation }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleCall = () => {
        Linking.openURL(`tel:${RESTAURANT_DATA.phone}`);
    };

    const handleDirections = () => {
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            RESTAURANT_DATA.address
        )}`;
        Linking.openURL(url);
    };

    const handleShare = async () => {
        try {
            await Share.share({
                message: `Check out ${RESTAURANT_DATA.name}! ${RESTAURANT_DATA.description}`,
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            {/* Header Image */}
            <View style={styles.headerImage}>
                <Text style={styles.headerImageEmoji}>
                    {RESTAURANT_DATA.image}
                </Text>

                {/* Back Button */}
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation?.goBack()}
                >
                    <Text style={styles.backButtonText}>←</Text>
                </TouchableOpacity>

                {/* Favorite Button */}
                <TouchableOpacity
                    style={styles.favoriteButton}
                    onPress={() => setIsFavorite(!isFavorite)}
                >
                    <Text style={styles.favoriteButtonText}>
                        {isFavorite ? "❤️" : "🤍"}
                    </Text>
                </TouchableOpacity>

                {/* Status Badge */}
                <View
                    style={[
                        styles.statusBadge,
                        RESTAURANT_DATA.isOpen
                            ? styles.openBadge
                            : styles.closedBadge,
                    ]}
                >
                    <Text style={styles.statusText}>
                        {RESTAURANT_DATA.isOpen ? "Open Now" : "Closed"}
                    </Text>
                </View>
            </View>

            <ScrollView style={styles.content}>
                {/* Restaurant Info */}
                <View style={styles.infoSection}>
                    <View style={styles.nameRow}>
                        <Text style={styles.name}>{RESTAURANT_DATA.name}</Text>
                        {RESTAURANT_DATA.isHalal && (
                            <View style={styles.halalBadge}>
                                <Text style={styles.halalText}>🕌 Halal</Text>
                            </View>
                        )}
                    </View>

                    <Text style={styles.category}>
                        {RESTAURANT_DATA.category}
                    </Text>

                    {/* Rating & Meta */}
                    <View style={styles.metaRow}>
                        <View style={styles.ratingContainer}>
                            <Text style={styles.ratingStar}>⭐</Text>
                            <Text style={styles.ratingText}>
                                {RESTAURANT_DATA.rating}
                            </Text>
                            <Text style={styles.reviewCount}>
                                ({RESTAURANT_DATA.reviews.toLocaleString()}{" "}
                                reviews)
                            </Text>
                        </View>
                    </View>

                    <View style={styles.quickInfo}>
                        <View style={styles.quickInfoItem}>
                            <Text style={styles.quickInfoIcon}>📍</Text>
                            <Text style={styles.quickInfoText}>
                                {RESTAURANT_DATA.distance}
                            </Text>
                        </View>
                        <View style={styles.quickInfoItem}>
                            <Text style={styles.quickInfoIcon}>💰</Text>
                            <Text style={styles.quickInfoText}>
                                {RESTAURANT_DATA.priceRange}
                            </Text>
                        </View>
                        <View style={styles.quickInfoItem}>
                            <Text style={styles.quickInfoIcon}>🕐</Text>
                            <Text style={styles.quickInfoText}>
                                {RESTAURANT_DATA.openHours}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Action Buttons */}
                <View style={styles.actionButtons}>
                    <TouchableOpacity
                        style={[styles.actionButton, styles.primaryButton]}
                        onPress={handleDirections}
                    >
                        <Text style={styles.actionButtonIcon}>🧭</Text>
                        <Text style={styles.actionButtonText}>Directions</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.actionButton}
                        onPress={handleCall}
                    >
                        <Text style={styles.actionButtonIcon}>📞</Text>
                        <Text style={styles.actionButtonText}>Call</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.actionButton}
                        onPress={handleShare}
                    >
                        <Text style={styles.actionButtonIcon}>📤</Text>
                        <Text style={styles.actionButtonText}>Share</Text>
                    </TouchableOpacity>
                </View>

                {/* Why This Matches */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        Why This Matches You
                    </Text>
                    {RESTAURANT_DATA.whyMatch.map((reason, index) => (
                        <View key={index} style={styles.matchItem}>
                            <Text style={styles.matchText}>{reason}</Text>
                        </View>
                    ))}
                </View>

                {/* Description */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>About</Text>
                    <Text style={styles.description}>
                        {RESTAURANT_DATA.description}
                    </Text>
                </View>

                {/* Specialties */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Specialties</Text>
                    <View style={styles.specialtiesGrid}>
                        {RESTAURANT_DATA.specialties.map((item, index) => (
                            <View key={index} style={styles.specialtyChip}>
                                <Text style={styles.specialtyText}>{item}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Amenities */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Amenities</Text>
                    <View style={styles.amenitiesGrid}>
                        {RESTAURANT_DATA.amenities.map((amenity, index) => (
                            <View key={index} style={styles.amenityItem}>
                                <Text style={styles.amenityIcon}>✓</Text>
                                <Text style={styles.amenityText}>
                                    {amenity}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Contact Info */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Contact Information</Text>
                    <View style={styles.contactItem}>
                        <Text style={styles.contactIcon}>📍</Text>
                        <Text style={styles.contactText}>
                            {RESTAURANT_DATA.address}
                        </Text>
                    </View>
                    <View style={styles.contactItem}>
                        <Text style={styles.contactIcon}>📞</Text>
                        <Text style={styles.contactText}>
                            {RESTAURANT_DATA.phone}
                        </Text>
                    </View>
                </View>

                {/* Reviews */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Recent Reviews</Text>
                    {REVIEWS.map((review) => (
                        <View key={review.id} style={styles.reviewCard}>
                            <View style={styles.reviewHeader}>
                                <View>
                                    <Text style={styles.reviewAuthor}>
                                        {review.author}
                                    </Text>
                                    <Text style={styles.reviewDate}>
                                        {review.date}
                                    </Text>
                                </View>
                                <View style={styles.reviewRating}>
                                    <Text style={styles.reviewRatingStar}>
                                        ⭐
                                    </Text>
                                    <Text style={styles.reviewRatingText}>
                                        {review.rating}
                                    </Text>
                                </View>
                            </View>
                            <Text style={styles.reviewText}>{review.text}</Text>
                        </View>
                    ))}
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
    headerImage: {
        height: 250,
        backgroundColor: "#2a2a2a",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    headerImageEmoji: {
        fontSize: 100,
    },
    backButton: {
        position: "absolute",
        top: 50,
        left: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        justifyContent: "center",
        alignItems: "center",
    },
    backButtonText: {
        color: "#fff",
        fontSize: 24,
    },
    favoriteButton: {
        position: "absolute",
        top: 50,
        right: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        justifyContent: "center",
        alignItems: "center",
    },
    favoriteButtonText: {
        fontSize: 24,
    },
    statusBadge: {
        position: "absolute",
        bottom: 20,
        left: 20,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
    },
    openBadge: {
        backgroundColor: "#16a34a",
    },
    closedBadge: {
        backgroundColor: "#dc2626",
    },
    statusText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
    },
    content: {
        flex: 1,
    },
    infoSection: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#2a2a2a",
    },
    nameRow: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    name: {
        flex: 1,
        fontSize: 26,
        fontWeight: "bold",
        color: "#fff",
        marginRight: 12,
    },
    halalBadge: {
        backgroundColor: "#16a34a",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
    },
    halalText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "600",
    },
    category: {
        fontSize: 16,
        color: "#999",
        marginBottom: 16,
    },
    metaRow: {
        marginBottom: 16,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    ratingStar: {
        fontSize: 18,
        marginRight: 6,
    },
    ratingText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        marginRight: 6,
    },
    reviewCount: {
        fontSize: 14,
        color: "#999",
    },
    quickInfo: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 16,
    },
    quickInfoItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    quickInfoIcon: {
        fontSize: 16,
        marginRight: 6,
    },
    quickInfoText: {
        fontSize: 14,
        color: "#ccc",
    },
    actionButtons: {
        flexDirection: "row",
        padding: 20,
        gap: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#2a2a2a",
    },
    actionButton: {
        flex: 1,
        backgroundColor: "#1a1a1a",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#2a2a2a",
    },
    primaryButton: {
        backgroundColor: "#CC0001",
        borderColor: "#CC0001",
    },
    actionButtonIcon: {
        fontSize: 20,
        marginBottom: 4,
    },
    actionButtonText: {
        color: "#fff",
        fontSize: 13,
        fontWeight: "600",
    },
    section: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#2a2a2a",
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 16,
    },
    matchItem: {
        backgroundColor: "#1a1a1a",
        padding: 12,
        borderRadius: 10,
        marginBottom: 8,
        borderLeftWidth: 3,
        borderLeftColor: "#CC0001",
    },
    matchText: {
        color: "#fff",
        fontSize: 14,
        lineHeight: 20,
    },
    description: {
        fontSize: 15,
        color: "#ccc",
        lineHeight: 24,
    },
    specialtiesGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },
    specialtyChip: {
        backgroundColor: "#CC0001",
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 20,
    },
    specialtyText: {
        color: "#fff",
        fontSize: 13,
        fontWeight: "600",
    },
    amenitiesGrid: {
        gap: 12,
    },
    amenityItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    amenityIcon: {
        color: "#16a34a",
        fontSize: 16,
        marginRight: 10,
        fontWeight: "bold",
    },
    amenityText: {
        color: "#ccc",
        fontSize: 15,
    },
    contactItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 12,
    },
    contactIcon: {
        fontSize: 18,
        marginRight: 10,
        marginTop: 2,
    },
    contactText: {
        flex: 1,
        color: "#ccc",
        fontSize: 15,
        lineHeight: 22,
    },
    reviewCard: {
        backgroundColor: "#1a1a1a",
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
    },
    reviewHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 10,
    },
    reviewAuthor: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
        marginBottom: 4,
    },
    reviewDate: {
        fontSize: 12,
        color: "#999",
    },
    reviewRating: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2a2a2a",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
    },
    reviewRatingStar: {
        fontSize: 14,
        marginRight: 4,
    },
    reviewRatingText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
    },
    reviewText: {
        fontSize: 14,
        color: "#ccc",
        lineHeight: 20,
    },
});
