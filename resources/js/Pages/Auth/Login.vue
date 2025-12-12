<script setup>
import { Head, Link, useForm } from "@inertiajs/vue3";
import { Utensils, Mail, Lock, ArrowRight } from "lucide-vue-next";

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: "",
    password: "",
    remember: false,
});

const submit = () => {
    form.transform((data) => ({
        ...data,
        remember: form.remember ? "on" : "",
    })).post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};
</script>

<template>
    <Head title="Admin Login" />

    <div class="min-h-screen flex">
        <!-- Left Side - Branding -->
        <div
            class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden"
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
                    <h2 class="text-4xl font-bold mb-4">Welcome Back!</h2>
                    <p class="text-xl text-white/90 mb-8">
                        Sign in to manage your MakanMate AI admin panel and help
                        users discover amazing Malaysian food.
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
                                <h3 class="font-semibold">
                                    Manage Admin Users
                                </h3>
                                <p class="text-white/70 text-sm">
                                    Add and manage admin accounts
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
                                <h3 class="font-semibold">Monitor Activity</h3>
                                <p class="text-white/70 text-sm">
                                    Track usage and performance
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
                                <h3 class="font-semibold">
                                    Configure Settings
                                </h3>
                                <p class="text-white/70 text-sm">
                                    Customize your admin panel
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right Side - Login Form -->
        <div
            class="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background"
        >
            <div class="w-full max-w-md">
                <!-- Mobile Logo -->
                <div class="lg:hidden flex items-center gap-3 mb-8">
                    <div
                        class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center"
                    >
                        <Utensils :size="28" class="text-primary-foreground" />
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
                        Sign In
                    </h2>
                    <p class="text-muted-foreground">
                        Enter your credentials to access the admin panel
                    </p>
                </div>

                <!-- Status Message -->
                <div
                    v-if="status"
                    class="mb-4 p-3 bg-primary/10 border border-primary/20 rounded-lg text-primary text-sm"
                >
                    {{ status }}
                </div>

                <!-- Login Form -->
                <form @submit.prevent="submit" class="space-y-6">
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
                                autofocus
                                autocomplete="username"
                                class="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
                                autocomplete="current-password"
                                class="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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

                    <!-- Remember Me & Forgot Password -->
                    <div class="flex items-center justify-between">
                        <label class="flex items-center">
                            <input
                                v-model="form.remember"
                                type="checkbox"
                                class="w-4 h-4 text-primary bg-background border-border rounded focus:ring-2 focus:ring-primary"
                            />
                            <span class="ml-2 text-sm text-foreground"
                                >Remember me</span
                            >
                        </label>

                        <Link
                            v-if="canResetPassword"
                            :href="route('password.request')"
                            class="text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    <!-- Submit Button -->
                    <button
                        type="submit"
                        :disabled="form.processing"
                        class="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span>{{
                            form.processing ? "Signing in..." : "Sign In"
                        }}</span>
                        <ArrowRight :size="20" v-if="!form.processing" />
                    </button>
                </form>

                <!-- Register Link -->
                <div class="mt-6 text-center">
                    <p class="text-sm text-muted-foreground">
                        Don't have an account?
                        <Link
                            :href="route('register')"
                            class="text-primary hover:text-primary/80 font-medium transition-colors"
                        >
                            Create one
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
