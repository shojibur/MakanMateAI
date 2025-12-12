<script setup>
import { ref } from "vue";
import { router, useForm } from "@inertiajs/vue3";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { Plus, Pencil, Trash2, Mail, Shield } from "lucide-vue-next";
import { cn } from "@/lib/utils";

const props = defineProps({
    users: Array,
});

const showCreateModal = ref(false);
const showEditModal = ref(false);
const editingUser = ref(null);

const createForm = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});

const editForm = useForm({
    name: "",
    email: "",
});

const openCreateModal = () => {
    createForm.reset();
    showCreateModal.value = true;
};

const openEditModal = (user) => {
    editingUser.value = user;
    editForm.name = user.name;
    editForm.email = user.email;
    showEditModal.value = true;
};

const createUser = () => {
    createForm.post(route("admin.users.store"), {
        onSuccess: () => {
            showCreateModal.value = false;
            createForm.reset();
        },
    });
};

const updateUser = () => {
    editForm.put(route("admin.users.update", editingUser.value.id), {
        onSuccess: () => {
            showEditModal.value = false;
            editForm.reset();
            editingUser.value = null;
        },
    });
};

const deleteUser = (userId) => {
    if (confirm("Are you sure you want to delete this admin user?")) {
        router.delete(route("admin.users.destroy", userId));
    }
};
</script>

<template>
    <AdminLayout title="Admin Users">
        <!-- Header -->
        <div class="mb-6 flex items-center justify-between">
            <div>
                <h1 class="text-3xl font-bold text-foreground">Admin Users</h1>
                <p class="text-muted-foreground mt-1">
                    Manage administrator accounts
                </p>
            </div>
            <button
                @click="openCreateModal"
                class="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
                <Plus :size="20" />
                Add Admin User
            </button>
        </div>

        <!-- Users Table -->
        <div
            class="bg-card border border-border rounded-lg shadow-sm overflow-hidden"
        >
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-muted">
                        <tr>
                            <th
                                class="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                            >
                                Name
                            </th>
                            <th
                                class="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                            >
                                Email
                            </th>
                            <th
                                class="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                            >
                                Role
                            </th>
                            <th
                                class="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                            >
                                Created
                            </th>
                            <th
                                class="px-6 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                            >
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-border">
                        <tr
                            v-for="user in users"
                            :key="user.id"
                            class="hover:bg-muted/50 transition-colors"
                        >
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-3">
                                    <div
                                        class="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-medium"
                                    >
                                        {{ user.name.charAt(0) }}
                                    </div>
                                    <span class="font-medium text-foreground">{{
                                        user.name
                                    }}</span>
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div
                                    class="flex items-center gap-2 text-muted-foreground"
                                >
                                    <Mail :size="16" />
                                    {{ user.email }}
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <span
                                    class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                                >
                                    <Shield :size="14" />
                                    Admin
                                </span>
                            </td>
                            <td class="px-6 py-4 text-muted-foreground text-sm">
                                {{
                                    new Date(
                                        user.created_at
                                    ).toLocaleDateString()
                                }}
                            </td>
                            <td class="px-6 py-4">
                                <div
                                    class="flex items-center justify-end gap-2"
                                >
                                    <button
                                        @click="openEditModal(user)"
                                        class="p-2 text-secondary hover:bg-secondary/10 rounded-lg transition-colors"
                                        title="Edit"
                                    >
                                        <Pencil :size="16" />
                                    </button>
                                    <button
                                        @click="deleteUser(user.id)"
                                        class="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                                        title="Delete"
                                    >
                                        <Trash2 :size="16" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr v-if="!users || users.length === 0">
                            <td
                                colspan="5"
                                class="px-6 py-12 text-center text-muted-foreground"
                            >
                                No admin users found. Click "Add Admin User" to
                                create one.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Create User Modal -->
        <div
            v-if="showCreateModal"
            class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            @click.self="showCreateModal = false"
        >
            <div class="bg-card rounded-lg shadow-xl max-w-md w-full p-6">
                <h2 class="text-2xl font-bold text-foreground mb-4">
                    Add Admin User
                </h2>

                <form @submit.prevent="createUser" class="space-y-4">
                    <div>
                        <label
                            class="block text-sm font-medium text-foreground mb-1"
                            >Name</label
                        >
                        <input
                            v-model="createForm.name"
                            type="text"
                            required
                            class="w-full px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Enter name"
                        />
                        <p
                            v-if="createForm.errors.name"
                            class="mt-1 text-sm text-destructive"
                        >
                            {{ createForm.errors.name }}
                        </p>
                    </div>

                    <div>
                        <label
                            class="block text-sm font-medium text-foreground mb-1"
                            >Email</label
                        >
                        <input
                            v-model="createForm.email"
                            type="email"
                            required
                            class="w-full px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Enter email"
                        />
                        <p
                            v-if="createForm.errors.email"
                            class="mt-1 text-sm text-destructive"
                        >
                            {{ createForm.errors.email }}
                        </p>
                    </div>

                    <div>
                        <label
                            class="block text-sm font-medium text-foreground mb-1"
                            >Password</label
                        >
                        <input
                            v-model="createForm.password"
                            type="password"
                            required
                            class="w-full px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Enter password"
                        />
                        <p
                            v-if="createForm.errors.password"
                            class="mt-1 text-sm text-destructive"
                        >
                            {{ createForm.errors.password }}
                        </p>
                    </div>

                    <div>
                        <label
                            class="block text-sm font-medium text-foreground mb-1"
                            >Confirm Password</label
                        >
                        <input
                            v-model="createForm.password_confirmation"
                            type="password"
                            required
                            class="w-full px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Confirm password"
                        />
                    </div>

                    <div class="flex gap-3 pt-4">
                        <button
                            type="button"
                            @click="showCreateModal = false"
                            class="flex-1 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            :disabled="createForm.processing"
                            class="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                        >
                            {{
                                createForm.processing
                                    ? "Creating..."
                                    : "Create User"
                            }}
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Edit User Modal -->
        <div
            v-if="showEditModal"
            class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            @click.self="showEditModal = false"
        >
            <div class="bg-card rounded-lg shadow-xl max-w-md w-full p-6">
                <h2 class="text-2xl font-bold text-foreground mb-4">
                    Edit Admin User
                </h2>

                <form @submit.prevent="updateUser" class="space-y-4">
                    <div>
                        <label
                            class="block text-sm font-medium text-foreground mb-1"
                            >Name</label
                        >
                        <input
                            v-model="editForm.name"
                            type="text"
                            required
                            class="w-full px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Enter name"
                        />
                        <p
                            v-if="editForm.errors.name"
                            class="mt-1 text-sm text-destructive"
                        >
                            {{ editForm.errors.name }}
                        </p>
                    </div>

                    <div>
                        <label
                            class="block text-sm font-medium text-foreground mb-1"
                            >Email</label
                        >
                        <input
                            v-model="editForm.email"
                            type="email"
                            required
                            class="w-full px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Enter email"
                        />
                        <p
                            v-if="editForm.errors.email"
                            class="mt-1 text-sm text-destructive"
                        >
                            {{ editForm.errors.email }}
                        </p>
                    </div>

                    <div class="flex gap-3 pt-4">
                        <button
                            type="button"
                            @click="showEditModal = false"
                            class="flex-1 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            :disabled="editForm.processing"
                            class="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                        >
                            {{
                                editForm.processing
                                    ? "Updating..."
                                    : "Update User"
                            }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </AdminLayout>
</template>
