<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { Settings as SettingsIcon } from "lucide-vue-next";
</script>

<template>
    <AdminLayout title="Settings">
        <div class="mb-6">
            <h1 class="text-3xl font-bold text-foreground">Settings</h1>
            <p class="text-muted-foreground mt-1">
                Configure your admin panel settings
            </p>
        </div>

        <div class="bg-card border border-border rounded-lg p-6 shadow-sm">
            <div class="flex items-center gap-3 mb-4">
                <SettingsIcon :size="24" class="text-primary" />
                <h2 class="text-xl font-bold text-foreground">
                    Settings Coming Soon
                </h2>
            </div>
            <p class="text-muted-foreground">
                This page will contain various settings for the admin panel.
            </p>
        </div>
    </AdminLayout>
</template>
