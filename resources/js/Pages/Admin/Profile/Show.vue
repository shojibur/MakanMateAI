<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import LogoutOtherBrowserSessionsForm from "@/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue";
import SectionBorder from "@/Components/SectionBorder.vue";
import TwoFactorAuthenticationForm from "@/Pages/Profile/Partials/TwoFactorAuthenticationForm.vue";
import UpdatePasswordForm from "@/Pages/Profile/Partials/UpdatePasswordForm.vue";
import UpdateProfileInformationForm from "@/Pages/Profile/Partials/UpdateProfileInformationForm.vue";

defineProps({
    confirmsTwoFactorAuthentication: Boolean,
    sessions: Array,
});
</script>

<template>
    <AdminLayout title="Profile">
        <div class="mb-6">
            <h1 class="text-3xl font-bold text-foreground">Profile Settings</h1>
            <p class="text-muted-foreground mt-1">
                Manage your account information and security
            </p>
        </div>

        <div class="max-w-4xl space-y-6">
            <div
                v-if="$page.props.jetstream.canUpdateProfileInformation"
                class="bg-card border border-border rounded-lg p-6 shadow-sm"
            >
                <UpdateProfileInformationForm :user="$page.props.auth.user" />
            </div>

            <div
                v-if="$page.props.jetstream.canUpdatePassword"
                class="bg-card border border-border rounded-lg p-6 shadow-sm"
            >
                <UpdatePasswordForm />
            </div>

            <div
                v-if="$page.props.jetstream.canManageTwoFactorAuthentication"
                class="bg-card border border-border rounded-lg p-6 shadow-sm"
            >
                <TwoFactorAuthenticationForm
                    :requires-confirmation="confirmsTwoFactorAuthentication"
                />
            </div>

            <div class="bg-card border border-border rounded-lg p-6 shadow-sm">
                <LogoutOtherBrowserSessionsForm :sessions="sessions" />
            </div>
        </div>
    </AdminLayout>
</template>
