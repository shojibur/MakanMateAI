import { useState, useRef } from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Animated,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const { width, height } = Dimensions.get("window");

const slides = [
    {
        id: 1,
        emoji: "🍜",
        title: "Discover Malaysian Food",
        description:
            "From nasi lemak to char kway teow, find the best local flavors near you",
        gradient: ["#CC0001", "#FECB00"], // Malaysian flag red & yellow
    },
    {
        id: 2,
        emoji: "🤖",
        title: "Chat Naturally",
        description:
            '"I want halal, spicy, under RM20, nearby" - Just ask and we\'ll find it!',
        gradient: ["#0047AB", "#00B5E2"], // Malaysian blue tones
    },
    {
        id: 3,
        emoji: "🕌",
        title: "Halal-Focused",
        description:
            "Confident halal recommendations for mamak, nasi kandar, and more",
        gradient: ["#16a34a", "#22c55e"], // Green for halal
    },
    {
        id: 4,
        emoji: "🌙",
        title: "Late Night Cravings",
        description: "24-hour mamak, supper spots, and midnight makan places",
        gradient: ["#7c3aed", "#a78bfa"], // Purple for night
    },
];

export default function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const scrollViewRef = useRef(null);

    const handleScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
    );

    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
            const nextIndex = currentIndex + 1;
            scrollViewRef.current?.scrollTo({
                x: nextIndex * width,
                animated: true,
            });
            setCurrentIndex(nextIndex);
        } else {
            // Navigate to main app
            console.log("Get Started!");
        }
    };

    const handleSkip = () => {
        // Navigate to main app
        console.log("Skip to main app");
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            {/* Skip Button */}
            {currentIndex < slides.length - 1 && (
                <TouchableOpacity
                    style={styles.skipButton}
                    onPress={handleSkip}
                >
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
            )}

            {/* Slides */}
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                onMomentumScrollEnd={(e) => {
                    const index = Math.round(
                        e.nativeEvent.contentOffset.x / width
                    );
                    setCurrentIndex(index);
                }}
            >
                {slides.map((slide, index) => (
                    <View key={slide.id} style={styles.slide}>
                        {/* Gradient Background */}
                        <View
                            style={[
                                styles.gradientBg,
                                {
                                    backgroundColor: slide.gradient[0],
                                },
                            ]}
                        >
                            <View
                                style={[
                                    styles.gradientOverlay,
                                    { backgroundColor: slide.gradient[1] },
                                ]}
                            />
                        </View>

                        {/* Content */}
                        <View style={styles.content}>
                            {/* Emoji */}
                            <View style={styles.emojiContainer}>
                                <Text style={styles.emoji}>{slide.emoji}</Text>
                            </View>

                            {/* Title */}
                            <Text style={styles.title}>{slide.title}</Text>

                            {/* Description */}
                            <Text style={styles.description}>
                                {slide.description}
                            </Text>

                            {/* Malaysian Flag Accent */}
                            <View style={styles.flagAccent}>
                                <View
                                    style={[
                                        styles.flagStripe,
                                        { backgroundColor: "#CC0001" },
                                    ]}
                                />
                                <View
                                    style={[
                                        styles.flagStripe,
                                        { backgroundColor: "#FECB00" },
                                    ]}
                                />
                                <View
                                    style={[
                                        styles.flagStripe,
                                        { backgroundColor: "#0047AB" },
                                    ]}
                                />
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>

            {/* Bottom Section */}
            <View style={styles.bottomSection}>
                {/* Pagination Dots */}
                <View style={styles.pagination}>
                    {slides.map((_, index) => {
                        const inputRange = [
                            (index - 1) * width,
                            index * width,
                            (index + 1) * width,
                        ];

                        const dotWidth = scrollX.interpolate({
                            inputRange,
                            outputRange: [8, 24, 8],
                            extrapolate: "clamp",
                        });

                        const opacity = scrollX.interpolate({
                            inputRange,
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: "clamp",
                        });

                        return (
                            <Animated.View
                                key={index}
                                style={[
                                    styles.dot,
                                    {
                                        width: dotWidth,
                                        opacity,
                                    },
                                ]}
                            />
                        );
                    })}
                </View>

                {/* Next/Get Started Button */}
                <TouchableOpacity
                    style={[
                        styles.button,
                        { backgroundColor: slides[currentIndex].gradient[0] },
                    ]}
                    onPress={handleNext}
                >
                    <Text style={styles.buttonText}>
                        {currentIndex === slides.length - 1
                            ? "Get Started 🇲🇾"
                            : "Next"}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    skipButton: {
        position: "absolute",
        top: 50,
        right: 20,
        zIndex: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 20,
    },
    skipText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    slide: {
        width,
        height,
        position: "relative",
    },
    gradientBg: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    gradientOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.6,
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 40,
    },
    emojiContainer: {
        width: 160,
        height: 160,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 80,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 40,
        borderWidth: 3,
        borderColor: "rgba(255, 255, 255, 0.3)",
    },
    emoji: {
        fontSize: 80,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        marginBottom: 16,
        textShadowColor: "rgba(0, 0, 0, 0.3)",
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
    },
    description: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
        lineHeight: 26,
        opacity: 0.95,
        textShadowColor: "rgba(0, 0, 0, 0.2)",
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
    },
    flagAccent: {
        flexDirection: "row",
        marginTop: 40,
        borderRadius: 4,
        overflow: "hidden",
    },
    flagStripe: {
        width: 60,
        height: 8,
    },
    bottomSection: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: 50,
        paddingHorizontal: 40,
    },
    pagination: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
    },
    dot: {
        height: 8,
        borderRadius: 4,
        backgroundColor: "#fff",
        marginHorizontal: 4,
    },
    button: {
        paddingVertical: 18,
        borderRadius: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: 0.5,
    },
});
