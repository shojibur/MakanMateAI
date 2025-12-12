<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { Users, MessageSquare, TrendingUp, Activity } from "lucide-vue-next";

defineProps({
    stats: {
        type: Object,
        default: () => ({
            totalUsers: 0,
            totalChats: 0,
            activeToday: 0,
            avgResponseTime: "0s",
        }),
    },
});
</script>

<template>
    <AdminLayout title="Dashboard">
        <!-- Welcome Header -->
        <div class="mb-6">
            <h1 class="text-3xl font-bold text-foreground">Dashboard</h1>
            <p class="text-muted-foreground mt-1">
                Welcome to MakanMate AI Admin Panel
            </p>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <!-- Total Users -->
            <div class="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div class="flex items-center justify-between mb-4">
                    <div
                        class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
                    >
                        <Users :size="24" class="text-primary" />
                    </div>
                </div>
                <h3 class="text-2xl font-bold text-foreground">
                    {{ stats.totalUsers }}
                </h3>
                <p class="text-sm text-muted-foreground mt-1">Total Users</p>
            </div>

            <!-- Total Chats -->
            <div class="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div class="flex items-center justify-between mb-4">
                    <div
                        class="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center"
                    >
                        <MessageSquare :size="24" class="text-secondary" />
                    </div>
                </div>
                <h3 class="text-2xl font-bold text-foreground">
                    {{ stats.totalChats }}
                </h3>
                <p class="text-sm text-muted-foreground mt-1">Total Chats</p>
            </div>

            <!-- Active Today -->
            <div class="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div class="flex items-center justify-between mb-4">
                    <div
                        class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center"
                    >
                        <TrendingUp :size="24" class="text-accent" />
                    </div>
                </div>
                <h3 class="text-2xl font-bold text-foreground">
                    {{ stats.activeToday }}
                </h3>
                <p class="text-sm text-muted-foreground mt-1">Active Today</p>
            </div>

            <!-- Avg Response Time -->
            <div class="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div class="flex items-center justify-between mb-4">
                    <div
                        class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
                    >
                        <Activity :size="24" class="text-primary" />
                    </div>
                </div>
                <h3 class="text-2xl font-bold text-foreground">
                    {{ stats.avgResponseTime }}
                </h3>
                <p class="text-sm text-muted-foreground mt-1">
                    Avg Response Time
                </p>
            </div>
        </div>

        <!-- Quick Info -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Recent Activity -->
            <div class="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h2 class="text-xl font-bold text-foreground mb-4">
                    Recent Activity
                </h2>
                <div class="space-y-4">
                    <p class="text-muted-foreground text-sm">
                        No recent activity to display.
                    </p>
                </div>
            </div>

            <!-- Quick Actions -->
            <div class="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h2 class="text-xl font-bold text-foreground mb-4">
                    Quick Actions
                </h2>
                <div class="space-y-3">
                    <a
                        href="/admin/users"
                        class="block p-3 border border-border rounded-lg hover:bg-muted transition-colors"
                    >
                        <div class="flex items-center gap-3">
                            <Users :size="20" class="text-primary" />
                            <div>
                                <p class="font-medium text-foreground">
                                    Manage Admin Users
                                </p>
                                <p class="text-sm text-muted-foreground">
                                    Add or edit admin accounts
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
