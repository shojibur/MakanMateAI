<script setup>
import { Head, Link } from "@inertiajs/vue3";
import {
    MessageSquare,
    Utensils,
    MapPin,
    Sparkles,
    ChevronRight,
} from "lucide-vue-next";

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
});
</script>

<template>
    <Head title="MakanMate AI - Your Smart Malaysian Food Companion" />

    <div
        class="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5"
    >
        <!-- Navigation -->
        <nav
            class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
        >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <!-- Logo -->
                    <div class="flex items-center gap-2">
                        <div
                            class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center"
                        >
                            <Utensils
                                :size="24"
                                class="text-primary-foreground"
                            />
                        </div>
                        <span class="text-xl font-bold text-foreground"
                            >MakanMate AI</span
                        >
                    </div>

                    <!-- Auth Links -->
                    <div v-if="canLogin" class="flex items-center gap-4">
                        <Link
                            v-if="$page.props.auth.user"
                            :href="route('dashboard')"
                            class="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                        >
                            Dashboard
                        </Link>
                        <template v-else>
                            <Link
                                :href="route('login')"
                                class="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                            >
                                Log in
                            </Link>
                            <Link
                                v-if="canRegister"
                                :href="route('register')"
                                class="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                            >
                                Get Started
                            </Link>
                        </template>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <div class="text-center max-w-4xl mx-auto">
                    <!-- Badge -->
                    <div
                        class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6"
                    >
                        <Sparkles :size="16" />
                        <span>AI-Powered Food Discovery</span>
                    </div>

                    <!-- Heading -->
                    <h1
                        class="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
                    >
                        Your Smart
                        <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                        >
                            Malaysian Food
                        </span>
                        Companion 🇲🇾
                    </h1>

                    <!-- Subheading -->
                    <p
                        class="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
                    >
                        Chat naturally to discover what to eat, where to eat,
                        and why. Powered by AI, designed for Malaysia.
                    </p>

                    <!-- CTA Buttons -->
                    <div
                        class="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            v-if="canLogin && !$page.props.auth.user"
                            :href="route('login')"
                            class="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 flex items-center justify-center gap-2"
                        >
                            <MessageSquare :size="20" />
                            Start Chatting
                            <ChevronRight :size="20" />
                        </Link>
                        <Link
                            v-else-if="$page.props.auth.user"
                            :href="route('dashboard')"
                            class="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 flex items-center justify-center gap-2"
                        >
                            Go to Dashboard
                            <ChevronRight :size="20" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <h2
                        class="text-3xl sm:text-4xl font-bold text-foreground mb-4"
                    >
                        Why MakanMate AI?
                    </h2>
                    <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Intelligent food recommendations tailored for Malaysian
                        food lovers
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Feature 1 -->
                    <div
                        class="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
                    >
                        <div
                            class="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6"
                        >
                            <MessageSquare :size="28" class="text-primary" />
                        </div>
                        <h3 class="text-xl font-bold text-foreground mb-3">
                            Conversational AI
                        </h3>
                        <p class="text-muted-foreground">
                            Chat naturally: "I'm in KL, budget RM20, halal,
                            spicy food, nearby" and get instant recommendations.
                        </p>
                    </div>

                    <!-- Feature 2 -->
                    <div
                        class="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
                    >
                        <div
                            class="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6"
                        >
                            <MapPin :size="28" class="text-secondary" />
                        </div>
                        <h3 class="text-xl font-bold text-foreground mb-3">
                            Malaysia-First Intelligence
                        </h3>
                        <p class="text-muted-foreground">
                            Understands mamak, nasi kandar, kopitiam, halal
                            preferences, late-night spots, and local food
                            culture.
                        </p>
                    </div>

                    <!-- Feature 3 -->
                    <div
                        class="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
                    >
                        <div
                            class="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6"
                        >
                            <Utensils :size="28" class="text-accent" />
                        </div>
                        <h3 class="text-xl font-bold text-foreground mb-3">
                            Smart Comparisons
                        </h3>
                        <p class="text-muted-foreground">
                            Compare restaurants side-by-side with price,
                            distance, halal confidence, and personalized
                            recommendations.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- How It Works Section -->
        <section class="py-20 px-4 sm:px-6 lg:px-8">
            <div class="max-w-5xl mx-auto">
                <div class="text-center mb-16">
                    <h2
                        class="text-3xl sm:text-4xl font-bold text-foreground mb-4"
                    >
                        How It Works
                    </h2>
                    <p class="text-lg text-muted-foreground">
                        Simple, fast, and intelligent food discovery
                    </p>
                </div>

                <div class="grid md:grid-cols-4 gap-6">
                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-4"
                        >
                            1
                        </div>
                        <h4 class="font-semibold text-foreground mb-2">
                            Chat Naturally
                        </h4>
                        <p class="text-sm text-muted-foreground">
                            Tell us what you're craving
                        </p>
                    </div>

                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-2xl font-bold mx-auto mb-4"
                        >
                            2
                        </div>
                        <h4 class="font-semibold text-foreground mb-2">
                            AI Understands
                        </h4>
                        <p class="text-sm text-muted-foreground">
                            We process your preferences
                        </p>
                    </div>

                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-2xl font-bold mx-auto mb-4"
                        >
                            3
                        </div>
                        <h4 class="font-semibold text-foreground mb-2">
                            Get Recommendations
                        </h4>
                        <p class="text-sm text-muted-foreground">
                            Personalized food suggestions
                        </p>
                    </div>

                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-4"
                        >
                            4
                        </div>
                        <h4 class="font-semibold text-foreground mb-2">
                            Enjoy Your Meal
                        </h4>
                        <p class="text-sm text-muted-foreground">
                            Find exactly what you want
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section
            class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary"
        >
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
                    Ready to Discover Your Next Meal?
                </h2>
                <p class="text-xl text-white/90 mb-8">
                    Join MakanMate AI and never wonder "what to eat" again
                </p>
                <Link
                    v-if="canLogin && !$page.props.auth.user"
                    :href="route('login')"
                    class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg text-lg font-semibold hover:bg-white/90 transition-all shadow-xl"
                >
                    Get Started Now
                    <ChevronRight :size="20" />
                </Link>
                <Link
                    v-else-if="$page.props.auth.user"
                    :href="route('dashboard')"
                    class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg text-lg font-semibold hover:bg-white/90 transition-all shadow-xl"
                >
                    Go to Dashboard
                    <ChevronRight :size="20" />
                </Link>
            </div>
        </section>

        <!-- Footer -->
        <footer
            class="py-12 px-4 sm:px-6 lg:px-8 bg-card border-t border-border"
        >
            <div class="max-w-7xl mx-auto">
                <div
                    class="flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <div class="flex items-center gap-2">
                        <div
                            class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"
                        >
                            <Utensils
                                :size="20"
                                class="text-primary-foreground"
                            />
                        </div>
                        <span class="font-bold text-foreground"
                            >MakanMate AI</span
                        >
                    </div>
                    <p class="text-sm text-muted-foreground">
                        © 2025 MakanMate AI. Your Smart Malaysian Food
                        Companion.
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>
