<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { useForm, usePage } from "@inertiajs/vue3";
import { ref } from "vue";
import { User, Mail, Lock, Shield, Monitor, Check, X } from "lucide-vue-next";

const page = usePage();
const user = page.props.auth.user;
const activeTab = ref("profile");

// Update Profile Information Form
const profileForm = useForm({
    name: user.name,
    email: user.email,
});

const updateProfile = () => {
    profileForm.put(route("user-profile-information.update"), {
        preserveScroll: true,
    });
};

// Update Password Form
const passwordForm = useForm({
    current_password: "",
    password: "",
    password_confirmation: "",
});

const updatePassword = () => {
    passwordForm.put(route("user-password.update"), {
        preserveScroll: true,
        onSuccess: () => passwordForm.reset(),
    });
};

// Two Factor Authentication
const twoFactorForm = useForm({});

const enableTwoFactor = () => {
    twoFactorForm.post(route("two-factor.enable"), {
        preserveScroll: true,
    });
};

const disableTwoFactor = () => {
    twoFactorForm.delete(route("two-factor.disable"), {
        preserveScroll: true,
    });
};

// Logout Other Sessions
const logoutForm = useForm({
    password: "",
});

const logoutOtherSessions = () => {
    logoutForm.delete(route("other-browser-sessions.destroy"), {
        preserveScroll: true,
        onSuccess: () => logoutForm.reset(),
    });
};

const tabs = [
    { id: "profile", name: "Profile", icon: User },
    { id: "security", name: "Security", icon: Lock },
    { id: "sessions", name: "Sessions", icon: Monitor },
];
</script>

<template>
    <AdminLayout title="Profile">
        <!-- Header -->
        <div class="mb-8">
            <div class="flex items-center gap-4 mb-2">
                <div
                    class="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                >
                    {{ user.name.charAt(0) }}
                </div>
                <div>
                    <h1 class="text-3xl font-bold text-foreground">
                        {{ user.name }}
                    </h1>
                    <p class="text-muted-foreground">{{ user.email }}</p>
                </div>
            </div>
        </div>

        <!-- Tabs -->
        <div class="border-b border-border mb-6">
            <nav class="flex gap-8">
                <button
                    v-for="tab in tabs"
                    :key="tab.id"
                    @click="activeTab = tab.id"
                    :class="[
                        'flex items-center gap-2 pb-4 px-1 border-b-2 font-medium transition-colors',
                        activeTab === tab.id
                            ? 'border-primary text-primary'
                            : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border',
                    ]"
                >
                    <component :is="tab.icon" :size="20" />
                    {{ tab.name }}
                </button>
            </nav>
        </div>

        <!-- Tab Content -->
        <div class="max-w-2xl">
            <!-- Profile Tab -->
            <div v-show="activeTab === 'profile'" class="space-y-6">
                <div class="bg-card border border-border rounded-xl p-6">
                    <h2 class="text-xl font-semibold text-foreground mb-6">
                        Personal Information
                    </h2>

                    <form @submit.prevent="updateProfile" class="space-y-5">
                        <div class="grid grid-cols-1 gap-5">
                            <!-- Name -->
                            <div>
                                <label
                                    class="block text-sm font-medium text-foreground mb-2"
                                >
                                    Full Name
                                </label>
                                <div class="relative">
                                    <User
                                        :size="18"
                                        class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                    />
                                    <input
                                        v-model="profileForm.name"
                                        type="text"
                                        required
                                        class="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <p
                                    v-if="profileForm.errors.name"
                                    class="mt-1.5 text-sm text-destructive flex items-center gap-1"
                                >
                                    <X :size="14" />
                                    {{ profileForm.errors.name }}
                                </p>
                            </div>

                            <!-- Email -->
                            <div>
                                <label
                                    class="block text-sm font-medium text-foreground mb-2"
                                >
                                    Email Address
                                </label>
                                <div class="relative">
                                    <Mail
                                        :size="18"
                                        class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                    />
                                    <input
                                        v-model="profileForm.email"
                                        type="email"
                                        required
                                        class="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <p
                                    v-if="profileForm.errors.email"
                                    class="mt-1.5 text-sm text-destructive flex items-center gap-1"
                                >
                                    <X :size="14" />
                                    {{ profileForm.errors.email }}
                                </p>
                            </div>
                        </div>

                        <!-- Success Message -->
                        <div
                            v-if="profileForm.recentlySuccessful"
                            class="flex items-center gap-2 p-3 bg-primary/10 border border-primary/20 rounded-lg text-primary text-sm"
                        >
                            <Check :size="16" />
                            <span>Profile updated successfully!</span>
                        </div>

                        <!-- Actions -->
                        <div class="flex justify-end pt-2">
                            <button
                                type="submit"
                                :disabled="profileForm.processing"
                                class="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                            >
                                {{
                                    profileForm.processing
                                        ? "Saving..."
                                        : "Save Changes"
                                }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Security Tab -->
            <div v-show="activeTab === 'security'" class="space-y-6">
                <!-- Change Password -->
                <div class="bg-card border border-border rounded-xl p-6">
                    <h2 class="text-xl font-semibold text-foreground mb-2">
                        Change Password
                    </h2>
                    <p class="text-sm text-muted-foreground mb-6">
                        Update your password to keep your account secure
                    </p>

                    <form @submit.prevent="updatePassword" class="space-y-5">
                        <!-- Current Password -->
                        <div>
                            <label
                                class="block text-sm font-medium text-foreground mb-2"
                            >
                                Current Password
                            </label>
                            <div class="relative">
                                <Lock
                                    :size="18"
                                    class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                />
                                <input
                                    v-model="passwordForm.current_password"
                                    type="password"
                                    required
                                    autocomplete="current-password"
                                    class="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                    placeholder="Enter current password"
                                />
                            </div>
                            <p
                                v-if="passwordForm.errors.current_password"
                                class="mt-1.5 text-sm text-destructive flex items-center gap-1"
                            >
                                <X :size="14" />
                                {{ passwordForm.errors.current_password }}
                            </p>
                        </div>

                        <!-- New Password -->
                        <div>
                            <label
                                class="block text-sm font-medium text-foreground mb-2"
                            >
                                New Password
                            </label>
                            <div class="relative">
                                <Lock
                                    :size="18"
                                    class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                />
                                <input
                                    v-model="passwordForm.password"
                                    type="password"
                                    required
                                    autocomplete="new-password"
                                    class="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                    placeholder="Enter new password"
                                />
                            </div>
                            <p
                                v-if="passwordForm.errors.password"
                                class="mt-1.5 text-sm text-destructive flex items-center gap-1"
                            >
                                <X :size="14" />
                                {{ passwordForm.errors.password }}
                            </p>
                        </div>

                        <!-- Confirm Password -->
                        <div>
                            <label
                                class="block text-sm font-medium text-foreground mb-2"
                            >
                                Confirm New Password
                            </label>
                            <div class="relative">
                                <Lock
                                    :size="18"
                                    class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                />
                                <input
                                    v-model="passwordForm.password_confirmation"
                                    type="password"
                                    required
                                    autocomplete="new-password"
                                    class="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                    placeholder="Confirm new password"
                                />
                            </div>
                        </div>

                        <!-- Success Message -->
                        <div
                            v-if="passwordForm.recentlySuccessful"
                            class="flex items-center gap-2 p-3 bg-secondary/10 border border-secondary/20 rounded-lg text-secondary text-sm"
                        >
                            <Check :size="16" />
                            <span>Password updated successfully!</span>
                        </div>

                        <!-- Actions -->
                        <div class="flex justify-end pt-2">
                            <button
                                type="submit"
                                :disabled="passwordForm.processing"
                                class="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30"
                            >
                                {{
                                    passwordForm.processing
                                        ? "Updating..."
                                        : "Update Password"
                                }}
                            </button>
                        </div>
                    </form>
                </div>

                <!-- Two Factor Authentication -->
                <div
                    v-if="
                        $page.props.jetstream?.canManageTwoFactorAuthentication
                    "
                    class="bg-card border border-border rounded-xl p-6"
                >
                    <div class="flex items-start justify-between mb-4">
                        <div>
                            <h2
                                class="text-xl font-semibold text-foreground mb-2"
                            >
                                Two-Factor Authentication
                            </h2>
                            <p class="text-sm text-muted-foreground">
                                Add an extra layer of security to your account
                            </p>
                        </div>
                        <div
                            :class="[
                                'px-3 py-1 rounded-full text-xs font-medium',
                                user.two_factor_enabled
                                    ? 'bg-primary/10 text-primary'
                                    : 'bg-muted text-muted-foreground',
                            ]"
                        >
                            {{
                                user.two_factor_enabled ? "Enabled" : "Disabled"
                            }}
                        </div>
                    </div>

                    <div class="mt-6">
                        <div v-if="!user.two_factor_enabled" class="space-y-4">
                            <div class="p-4 bg-muted/50 rounded-lg">
                                <p class="text-sm text-foreground">
                                    When two-factor authentication is enabled,
                                    you will be prompted for a secure, random
                                    token during authentication.
                                </p>
                            </div>
                            <button
                                @click="enableTwoFactor"
                                :disabled="twoFactorForm.processing"
                                class="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                            >
                                <Shield :size="18" />
                                Enable Two-Factor
                            </button>
                        </div>
                        <div v-else class="space-y-4">
                            <div
                                class="p-4 bg-primary/10 border border-primary/20 rounded-lg"
                            >
                                <p
                                    class="text-sm text-primary flex items-center gap-2"
                                >
                                    <Check :size="16" />
                                    Two-factor authentication is currently
                                    enabled on your account.
                                </p>
                            </div>
                            <button
                                @click="disableTwoFactor"
                                :disabled="twoFactorForm.processing"
                                class="inline-flex items-center gap-2 px-8 py-3 bg-destructive text-destructive-foreground rounded-lg font-semibold hover:bg-destructive/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-destructive/20 hover:shadow-xl hover:shadow-destructive/30"
                            >
                                Disable Two-Factor
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sessions Tab -->
            <div v-show="activeTab === 'sessions'" class="space-y-6">
                <div class="bg-card border border-border rounded-xl p-6">
                    <h2 class="text-xl font-semibold text-foreground mb-2">
                        Active Sessions
                    </h2>
                    <p class="text-sm text-muted-foreground mb-6">
                        Manage and log out your active sessions on other
                        browsers and devices
                    </p>

                    <div class="p-4 bg-muted/50 rounded-lg mb-6">
                        <p class="text-sm text-foreground">
                            If necessary, you may log out of all of your other
                            browser sessions across all of your devices. If you
                            feel your account has been compromised, you should
                            also update your password.
                        </p>
                    </div>

                    <form
                        @submit.prevent="logoutOtherSessions"
                        class="space-y-5"
                    >
                        <div>
                            <label
                                class="block text-sm font-medium text-foreground mb-2"
                            >
                                Confirm Password
                            </label>
                            <div class="relative">
                                <Lock
                                    :size="18"
                                    class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                />
                                <input
                                    v-model="logoutForm.password"
                                    type="password"
                                    required
                                    placeholder="Enter your password to confirm"
                                    class="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg focus:ring-2 focus:ring-destructive focus:border-transparent transition-all"
                                />
                            </div>
                            <p
                                v-if="logoutForm.errors.password"
                                class="mt-1.5 text-sm text-destructive flex items-center gap-1"
                            >
                                <X :size="14" />
                                {{ logoutForm.errors.password }}
                            </p>
                        </div>

                        <div class="flex justify-end pt-2">
                            <button
                                type="submit"
                                :disabled="logoutForm.processing"
                                class="inline-flex items-center gap-2 px-8 py-3 bg-destructive text-destructive-foreground rounded-lg font-semibold hover:bg-destructive/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-destructive/20 hover:shadow-xl hover:shadow-destructive/30"
                            >
                                {{
                                    logoutForm.processing
                                        ? "Logging Out..."
                                        : "Log Out Other Sessions"
                                }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
