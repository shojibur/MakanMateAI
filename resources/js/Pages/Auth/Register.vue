<script setup>
import { Head, Link, useForm } from "@inertiajs/vue3";
import {
    Utensils,
    Mail,
    Lock,
    User as UserIcon,
    ArrowRight,
} from "lucide-vue-next";

const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: false,
});

const submit = () => {
    form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation"),
    });
};
</script>

<template>
    <Head title="Admin Registration" />

    <div class="min-h-screen flex">
        <!-- Left Side - Branding -->
        <div
            class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-secondary via-secondary to-primary relative overflow-hidden"
        >
            <!-- Decorative Elements -->
            <div
                class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"
            ></div>

            <div
                class="relative z-10 flex flex-col justify-center px-16 text-white"
            >
                <!-- Logo -->
                <div class="flex items-center gap-3 mb-8">
                    <div
                        class="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                    >
                        <Utensils :size="32" class="text-white" />
                    </div>
                    <div>
                        <h1 class="text-3xl font-bold">MakanMate AI</h1>
                        <p class="text-white/80 text-sm">Admin Portal</p>
                    </div>
                </div>

                <!-- Content -->
                <div class="max-w-md">
                    <h2 class="text-4xl font-bold mb-4">Join Our Team!</h2>
                    <p class="text-xl text-white/90 mb-8">
                        Create your admin account to start managing MakanMate AI
                        and help users discover the best Malaysian food.
                    </p>

                    <!-- Features -->
                    <div class="space-y-4">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                            >
                                <svg
                                    class="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold">Full Admin Access</h3>
                                <p class="text-white/70 text-sm">
                                    Complete control over the platform
                                </p>
                            </div>
                        </div>
                        <div class="flex items-start gap-3">
                            <div
                                class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                            >
                                <svg
                                    class="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold">Secure Dashboard</h3>
                                <p class="text-white/70 text-sm">
                                    Protected with advanced security
                                </p>
                            </div>
                        </div>
                        <div class="flex items-start gap-3">
                            <div
                                class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                            >
                                <svg
                                    class="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold">Real-time Updates</h3>
                                <p class="text-white/70 text-sm">
                                    Stay informed with live data
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right Side - Register Form -->
        <div
            class="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background"
        >
            <div class="w-full max-w-md">
                <!-- Mobile Logo -->
                <div class="lg:hidden flex items-center gap-3 mb-8">
                    <div
                        class="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center"
                    >
                        <Utensils
                            :size="28"
                            class="text-secondary-foreground"
                        />
                    </div>
                    <div>
                        <h1 class="text-2xl font-bold text-foreground">
                            MakanMate AI
                        </h1>
                        <p class="text-muted-foreground text-sm">
                            Admin Portal
                        </p>
                    </div>
                </div>

                <!-- Form Header -->
                <div class="mb-8">
                    <h2 class="text-3xl font-bold text-foreground mb-2">
                        Create Account
                    </h2>
                    <p class="text-muted-foreground">
                        Fill in your details to get started
                    </p>
                </div>

                <!-- Register Form -->
                <form @submit.prevent="submit" class="space-y-5">
                    <!-- Name -->
                    <div>
                        <label
                            for="name"
                            class="block text-sm font-medium text-foreground mb-2"
                        >
                            Full Name
                        </label>
                        <div class="relative">
                            <div
                                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                            >
                                <UserIcon
                                    :size="20"
                                    class="text-muted-foreground"
                                />
                            </div>
                            <input
                                id="name"
                                v-model="form.name"
                                type="text"
                                required
                                autofocus
                                autocomplete="name"
                                class="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <p
                            v-if="form.errors.name"
                            class="mt-2 text-sm text-destructive"
                        >
                            {{ form.errors.name }}
                        </p>
                    </div>

                    <!-- Email -->
                    <div>
                        <label
                            for="email"
                            class="block text-sm font-medium text-foreground mb-2"
                        >
                            Email Address
                        </label>
                        <div class="relative">
                            <div
                                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                            >
                                <Mail
                                    :size="20"
                                    class="text-muted-foreground"
                                />
                            </div>
                            <input
                                id="email"
                                v-model="form.email"
                                type="email"
                                required
                                autocomplete="username"
                                class="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                placeholder="admin@makanmate.ai"
                            />
                        </div>
                        <p
                            v-if="form.errors.email"
                            class="mt-2 text-sm text-destructive"
                        >
                            {{ form.errors.email }}
                        </p>
                    </div>

                    <!-- Password -->
                    <div>
                        <label
                            for="password"
                            class="block text-sm font-medium text-foreground mb-2"
                        >
                            Password
                        </label>
                        <div class="relative">
                            <div
                                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                            >
                                <Lock
                                    :size="20"
                                    class="text-muted-foreground"
                                />
                            </div>
                            <input
                                id="password"
                                v-model="form.password"
                                type="password"
                                required
                                autocomplete="new-password"
                                class="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                        <p
                            v-if="form.errors.password"
                            class="mt-2 text-sm text-destructive"
                        >
                            {{ form.errors.password }}
                        </p>
                    </div>

                    <!-- Confirm Password -->
                    <div>
                        <label
                            for="password_confirmation"
                            class="block text-sm font-medium text-foreground mb-2"
                        >
                            Confirm Password
                        </label>
                        <div class="relative">
                            <div
                                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                            >
                                <Lock
                                    :size="20"
                                    class="text-muted-foreground"
                                />
                            </div>
                            <input
                                id="password_confirmation"
                                v-model="form.password_confirmation"
                                type="password"
                                required
                                autocomplete="new-password"
                                class="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                        <p
                            v-if="form.errors.password_confirmation"
                            class="mt-2 text-sm text-destructive"
                        >
                            {{ form.errors.password_confirmation }}
                        </p>
                    </div>

                    <!-- Terms (if enabled) -->
                    <div
                        v-if="
                            $page.props.jetstream
                                .hasTermsAndPrivacyPolicyFeature
                        "
                    >
                        <label class="flex items-start">
                            <input
                                v-model="form.terms"
                                type="checkbox"
                                required
                                class="w-4 h-4 mt-1 text-secondary bg-background border-border rounded focus:ring-2 focus:ring-secondary"
                            />
                            <span class="ml-2 text-sm text-foreground">
                                I agree to the
                                <a
                                    :href="route('terms.show')"
                                    target="_blank"
                                    class="text-secondary hover:text-secondary/80 underline"
                                    >Terms of Service</a
                                >
                                and
                                <a
                                    :href="route('policy.show')"
                                    target="_blank"
                                    class="text-secondary hover:text-secondary/80 underline"
                                    >Privacy Policy</a
                                >
                            </span>
                        </label>
                        <p
                            v-if="form.errors.terms"
                            class="mt-2 text-sm text-destructive"
                        >
                            {{ form.errors.terms }}
                        </p>
                    </div>

                    <!-- Submit Button -->
                    <button
                        type="submit"
                        :disabled="form.processing"
                        class="w-full flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/30 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span>{{
                            form.processing
                                ? "Creating Account..."
                                : "Create Account"
                        }}</span>
                        <ArrowRight :size="20" v-if="!form.processing" />
                    </button>
                </form>

                <!-- Login Link -->
                <div class="mt-6 text-center">
                    <p class="text-sm text-muted-foreground">
                        Already have an account?
                        <Link
                            :href="route('login')"
                            class="text-secondary hover:text-secondary/80 font-medium transition-colors"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>

                <!-- Back to Home -->
                <div class="mt-8 text-center">
                    <Link
                        href="/"
                        class="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    </div>
</template>
