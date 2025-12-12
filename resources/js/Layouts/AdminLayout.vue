<script setup>
import { computed } from "vue";
import { Head } from "@inertiajs/vue3";
import AdminSidebar from "@/Components/Admin/AdminSidebar.vue";
import AdminTopbar from "@/Components/Admin/AdminTopbar.vue";

defineProps({
    title: String,
});
</script>

<template>
    <div class="min-h-screen bg-background">
        <Head :title="title" />

        <!-- Sidebar -->
        <AdminSidebar />

        <!-- Main Content Area -->
        <div class="lg:pl-64 transition-all duration-300">
            <!-- Topbar -->
            <AdminTopbar />

            <!-- Page Content -->
            <main class="p-6">
                <slot />
            </main>
        </div>
    </div>
</template>
