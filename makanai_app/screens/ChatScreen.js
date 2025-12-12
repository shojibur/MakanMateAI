import { useState, useRef, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Animated,
} from "react-native";
import { StatusBar } from "expo-status-bar";

// Dummy chat data
const DUMMY_MESSAGES = [
    {
        id: 1,
        type: "bot",
        text: "Hi! I'm MakanMate AI 🇲🇾\n\nI can help you find amazing Malaysian food! Just tell me what you're craving.",
        timestamp: new Date(Date.now() - 300000),
    },
];

// Quick action chips
const QUICK_ACTIONS = [
    { id: 1, text: "🕌 Halal nearby", emoji: "🕌" },
    { id: 2, text: "🌙 Late night", emoji: "🌙" },
    { id: 3, text: "💰 Under RM20", emoji: "💰" },
    { id: 4, text: "🔥 Spicy food", emoji: "🔥" },
    { id: 5, text: "☕ Café vibes", emoji: "☕" },
    { id: 6, text: "🍛 Mamak", emoji: "🍛" },
];

// Dummy AI responses
const AI_RESPONSES = {
    halal: "I found 5 halal restaurants near you! Here are my top picks:\n\n🍛 Restoran Nasi Kandar Pelita\n📍 500m away • RM15-25\n⭐ 4.5 (2.1k reviews)\nWhy: Famous 24-hour mamak with certified halal status\n\n🍜 Madam Kwan's\n📍 1.2km away • RM20-35\n⭐ 4.3 (1.8k reviews)\nWhy: Authentic Malaysian cuisine, halal certified",

    "late night":
        "Here are the best late-night spots open now:\n\n🌙 Mamak Corner (24 hours)\n📍 300m away • RM10-20\n⭐ 4.6 (3.2k reviews)\nWhy: Best roti canai at 2 AM!\n\n🍜 Wong Ah Wah (Open till 3 AM)\n📍 800m away • RM15-30\n⭐ 4.4 (2.5k reviews)\nWhy: Legendary chicken wings and satay",

    default:
        "Great choice! Let me find the perfect place for you...\n\n🍽️ Restoran Oversea\n📍 600m away • RM12-25\n⭐ 4.7 (4.1k reviews)\nWhy: Authentic Chinese-Malaysian cuisine, great portions\n\nWould you like to see more options or compare restaurants?",
};

export default function ChatScreen({ navigation }) {
    const [messages, setMessages] = useState(DUMMY_MESSAGES);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollViewRef = useRef(null);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, []);

    const handleSend = (text = inputText) => {
        if (!text.trim()) return;

        // Add user message
        const userMessage = {
            id: Date.now(),
            type: "user",
            text: text.trim(),
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputText("");
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const responseText = text.toLowerCase().includes("halal")
                ? AI_RESPONSES.halal
                : text.toLowerCase().includes("late") ||
                  text.toLowerCase().includes("night")
                ? AI_RESPONSES["late night"]
                : AI_RESPONSES.default;

            const botMessage = {
                id: Date.now() + 1,
                type: "bot",
                text: responseText,
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);
        }, 1500);
    };

    const handleQuickAction = (action) => {
        handleSend(action.text);
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString("en-MY", {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.headerTitle}>MakanMate AI</Text>
                    <Text style={styles.headerSubtitle}>
                        Your Malaysian Food Companion 🇲🇾
                    </Text>
                </View>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.keyboardView}
                keyboardVerticalOffset={0}
            >
                {/* Messages */}
                <ScrollView
                    ref={scrollViewRef}
                    style={styles.messagesContainer}
                    contentContainerStyle={styles.messagesContent}
                    onContentSizeChange={() =>
                        scrollViewRef.current?.scrollToEnd({ animated: true })
                    }
                >
                    {messages.map((message, index) => (
                        <Animated.View
                            key={message.id}
                            style={[
                                styles.messageWrapper,
                                message.type === "user"
                                    ? styles.userMessageWrapper
                                    : styles.botMessageWrapper,
                                { opacity: fadeAnim },
                            ]}
                        >
                            <View
                                style={[
                                    styles.messageBubble,
                                    message.type === "user"
                                        ? styles.userMessage
                                        : styles.botMessage,
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.messageText,
                                        message.type === "user"
                                            ? styles.userMessageText
                                            : styles.botMessageText,
                                    ]}
                                >
                                    {message.text}
                                </Text>
                                <Text
                                    style={[
                                        styles.timestamp,
                                        message.type === "user"
                                            ? styles.userTimestamp
                                            : styles.botTimestamp,
                                    ]}
                                >
                                    {formatTime(message.timestamp)}
                                </Text>
                            </View>
                        </Animated.View>
                    ))}

                    {isTyping && (
                        <View style={styles.typingIndicator}>
                            <View style={styles.typingBubble}>
                                <View style={styles.typingDots}>
                                    <View style={[styles.dot, styles.dot1]} />
                                    <View style={[styles.dot, styles.dot2]} />
                                    <View style={[styles.dot, styles.dot3]} />
                                </View>
                            </View>
                        </View>
                    )}

                    {/* Quick Actions */}
                    {messages.length <= 1 && (
                        <View style={styles.quickActionsContainer}>
                            <Text style={styles.quickActionsTitle}>
                                Try asking about:
                            </Text>
                            <View style={styles.quickActions}>
                                {QUICK_ACTIONS.map((action) => (
                                    <TouchableOpacity
                                        key={action.id}
                                        style={styles.quickActionChip}
                                        onPress={() =>
                                            handleQuickAction(action)
                                        }
                                    >
                                        <Text style={styles.quickActionText}>
                                            {action.text}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    )}
                </ScrollView>

                {/* Input Area */}
                <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            placeholder="Ask me anything about food..."
                            placeholderTextColor="#999"
                            value={inputText}
                            onChangeText={setInputText}
                            multiline
                            maxLength={500}
                        />
                        <TouchableOpacity
                            style={[
                                styles.sendButton,
                                !inputText.trim() && styles.sendButtonDisabled,
                            ]}
                            onPress={() => handleSend()}
                            disabled={!inputText.trim()}
                        >
                            <Text style={styles.sendButtonText}>
                                {inputText.trim() ? "🚀" : "💬"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
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
        shadowColor: "#CC0001",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    headerContent: {
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 4,
    },
    headerSubtitle: {
        fontSize: 14,
        color: "#fff",
        opacity: 0.9,
    },
    keyboardView: {
        flex: 1,
    },
    messagesContainer: {
        flex: 1,
    },
    messagesContent: {
        padding: 20,
        paddingBottom: 10,
    },
    messageWrapper: {
        marginBottom: 16,
    },
    userMessageWrapper: {
        alignItems: "flex-end",
    },
    botMessageWrapper: {
        alignItems: "flex-start",
    },
    messageBubble: {
        maxWidth: "80%",
        borderRadius: 20,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    userMessage: {
        backgroundColor: "#CC0001",
        borderBottomRightRadius: 4,
    },
    botMessage: {
        backgroundColor: "#1a1a1a",
        borderBottomLeftRadius: 4,
        borderWidth: 1,
        borderColor: "#2a2a2a",
    },
    messageText: {
        fontSize: 16,
        lineHeight: 22,
    },
    userMessageText: {
        color: "#fff",
    },
    botMessageText: {
        color: "#fff",
    },
    timestamp: {
        fontSize: 11,
        marginTop: 6,
    },
    userTimestamp: {
        color: "#fff",
        opacity: 0.7,
        textAlign: "right",
    },
    botTimestamp: {
        color: "#999",
    },
    typingIndicator: {
        alignItems: "flex-start",
        marginBottom: 16,
    },
    typingBubble: {
        backgroundColor: "#1a1a1a",
        borderRadius: 20,
        padding: 16,
        borderWidth: 1,
        borderColor: "#2a2a2a",
    },
    typingDots: {
        flexDirection: "row",
        alignItems: "center",
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#666",
        marginHorizontal: 3,
    },
    quickActionsContainer: {
        marginTop: 20,
    },
    quickActionsTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
        marginBottom: 12,
    },
    quickActions: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },
    quickActionChip: {
        backgroundColor: "#1a1a1a",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#CC0001",
    },
    quickActionText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "500",
    },
    inputContainer: {
        backgroundColor: "#0a0a0a",
        borderTopWidth: 1,
        borderTopColor: "#2a2a2a",
        paddingHorizontal: 20,
        paddingVertical: 12,
        paddingBottom: Platform.OS === "ios" ? 30 : 12,
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "flex-end",
        backgroundColor: "#1a1a1a",
        borderRadius: 25,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "#2a2a2a",
    },
    input: {
        flex: 1,
        color: "#fff",
        fontSize: 16,
        maxHeight: 100,
        paddingVertical: 8,
    },
    sendButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#CC0001",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 8,
    },
    sendButtonDisabled: {
        backgroundColor: "#333",
    },
    sendButtonText: {
        fontSize: 20,
    },
});
