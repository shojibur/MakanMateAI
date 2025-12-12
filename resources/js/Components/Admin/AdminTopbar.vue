<script setup>
import { ref } from "vue";
import { Link, usePage, router } from "@inertiajs/vue3";
import { Search, Bell, User, LogOut, Settings } from "lucide-vue-next";
import { cn } from "@/lib/utils";

const page = usePage();
const showUserMenu = ref(false);

const logout = () => {
    router.post(route("logout"));
};
</script>

<template>
    <header
        class="sticky top-0 z-30 h-16 bg-card border-b border-border shadow-sm"
    >
        <div class="h-full px-4 flex items-center justify-between gap-4">
            <!-- Left: Spacer for mobile menu button -->
            <div class="w-12 lg:w-0"></div>

            <!-- Center: Search Bar -->
            <div class="flex-1 max-w-md">
                <div class="relative">
                    <Search
                        :size="18"
                        class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <input
                        type="text"
                        placeholder="Search..."
                        class="w-full pl-10 pr-4 py-2 bg-muted border-0 rounded-lg text-sm focus:ring-2 focus:ring-primary"
                    />
                </div>
            </div>

            <!-- Right: Actions -->
            <div class="flex items-center gap-3">
                <!-- Notifications -->
                <button
                    class="relative p-2 hover:bg-muted rounded-lg transition-colors"
                >
                    <Bell :size="20" class="text-foreground" />
                    <span
                        class="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"
                    ></span>
                </button>

                <!-- User Menu -->
                <div class="relative">
                    <button
                        @click="showUserMenu = !showUserMenu"
                        class="flex items-center gap-2 p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                        <div
                            class="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium"
                        >
                            {{ page.props.auth?.user?.name?.charAt(0) || "A" }}
                        </div>
                        <span
                            class="hidden md:block text-sm font-medium text-foreground"
                        >
                            {{ page.props.auth?.user?.name || "Admin" }}
                        </span>
                    </button>

                    <!-- Dropdown Menu -->
                    <div
                        v-if="showUserMenu"
                        @click.away="showUserMenu = false"
                        class="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-1"
                    >
                        <Link
                            :href="route('admin.profile.show')"
                            class="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors"
                        >
                            <User :size="16" />
                            Profile
                        </Link>
                        <Link
                            :href="route('admin.settings')"
                            class="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors"
                        >
                            <Settings :size="16" />
                            Settings
                        </Link>
                        <hr class="my-1 border-border" />
                        <button
                            @click="logout"
                            class="w-full flex items-center gap-2 px-4 py-2 text-sm text-destructive hover:bg-muted transition-colors"
                        >
                            <LogOut :size="16" />
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
