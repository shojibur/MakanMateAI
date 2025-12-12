<script setup>
import { ref } from "vue";
import { Link, usePage } from "@inertiajs/vue3";
import {
    LayoutDashboard,
    Users,
    User,
    Settings,
    ChevronDown,
    ChevronRight,
    Menu,
    X,
    ChevronLeft,
} from "lucide-vue-next";
import { cn } from "@/lib/utils";

const collapsed = ref(false);
const mobileOpen = ref(false);
const page = usePage();

const menuItems = [
    {
        title: "Overview",
        items: [
            {
                name: "Dashboard",
                icon: LayoutDashboard,
                route: "admin.dashboard",
            },
        ],
    },
    {
        title: "Management",
        items: [
            { name: "Admin Users", icon: Users, route: "admin.users.index" },
        ],
    },
    {
        title: "System",
        items: [
            { name: "Profile", icon: User, route: "admin.profile.show" },
            { name: "Settings", icon: Settings, route: "admin.settings" },
        ],
    },
];

const isActiveRoute = (routeName) => {
    return page.url.startsWith(`/${routeName.replace(".", "/")}`);
};

const toggleSidebar = () => {
    collapsed.value = !collapsed.value;
};

const toggleMobile = () => {
    mobileOpen.value = !mobileOpen.value;
};
</script>

<template>
    <!-- Mobile Backdrop -->
    <div
        v-if="mobileOpen"
        class="fixed inset-0 bg-black/50 z-40 lg:hidden"
        @click="toggleMobile"
    ></div>

    <!-- Sidebar -->
    <aside
        :class="
            cn(
                'fixed left-0 top-0 h-full bg-card border-r border-border z-50 transition-all duration-300 flex flex-col',
                collapsed ? 'w-16' : 'w-64',
                mobileOpen
                    ? 'translate-x-0'
                    : '-translate-x-full lg:translate-x-0'
            )
        "
    >
        <!-- Logo/Brand -->
        <div
            class="h-16 flex items-center justify-between px-4 border-b border-border flex-shrink-0"
        >
            <Link href="/" class="flex items-center gap-2">
                <div
                    class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold"
                >
                    {{ collapsed ? "MM" : "MM" }}
                </div>
                <span
                    v-if="!collapsed"
                    class="font-bold text-lg text-foreground"
                    >MakanMate</span
                >
            </Link>

            <!-- Mobile Close Button -->
            <button
                @click="toggleMobile"
                class="lg:hidden p-1 hover:bg-muted rounded"
            >
                <X :size="20" />
            </button>
        </div>

        <!-- Menu Items -->
        <nav class="flex-1 overflow-y-auto py-4">
            <div v-for="group in menuItems" :key="group.title" class="mb-6">
                <h3
                    v-if="!collapsed"
                    class="px-4 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                >
                    {{ group.title }}
                </h3>
                <div v-else class="h-px bg-border mx-2 mb-2"></div>

                <div class="space-y-1 px-2">
                    <Link
                        v-for="item in group.items"
                        :key="item.name"
                        :href="route(item.route)"
                        :class="
                            cn(
                                'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                                isActiveRoute(item.route)
                                    ? 'bg-primary text-primary-foreground'
                                    : 'text-foreground hover:bg-muted'
                            )
                        "
                    >
                        <component
                            :is="item.icon"
                            :size="20"
                            class="flex-shrink-0"
                        />
                        <span v-if="!collapsed" class="text-sm font-medium">{{
                            item.name
                        }}</span>
                    </Link>
                </div>
            </div>
        </nav>

        <!-- Collapse Toggle at Bottom -->
        <div class="p-4 border-t border-border flex-shrink-0">
            <button
                @click="toggleSidebar"
                :class="
                    cn(
                        'w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-foreground',
                        collapsed ? 'justify-center' : 'justify-between'
                    )
                "
            >
                <div class="flex items-center gap-2">
                    <ChevronLeft
                        :size="20"
                        :class="
                            cn(
                                'transition-transform',
                                collapsed && 'rotate-180'
                            )
                        "
                    />
                    <span v-if="!collapsed" class="text-sm font-medium"
                        >Collapse</span
                    >
                </div>
            </button>
        </div>
    </aside>

    <!-- Mobile Menu Button -->
    <button
        @click="toggleMobile"
        class="lg:hidden fixed top-4 left-4 z-30 p-2 bg-card border border-border rounded-lg shadow-lg"
    >
        <Menu :size="20" />
    </button>
</template>
