### **Overview**

Create a modern, professional admin panel with a collapsible sidebar, top navigation bar, and dashboard with statistics and charts. The design uses a clean, card-based layout with a custom color scheme.

### **Tech Stack**

**Backend:**

* Laravel 12.x
* Inertia.js 2.x (Vue 3 adapter)
* Laravel Sanctum for authentication
* Laravel Breeze for auth scaffolding

**Frontend:**

* Vue 3 (Composition API with

  ```
  <script setup>
  ```

  )
* Vite for bundling
* TailwindCSS 3.x with custom configuration
* Radix Vue (UI component primitives)
* Lucide Vue Next (icons)
* Chart.js + Vue-ChartJS (for dashboard charts)

**Key Packages:**

<pre><div><div class="min-h-7 relative box-border flex flex-row items-center justify-between rounded-t border border-b-0 border-gray-500/25 px-2 py-0.5"><div class="font-sans text-sm text-ide-text-color opacity-60">json</div><div><div class="flex flex-row items-center gap-0.5"><div class="rounded-sm p-1 cursor-pointer opacity-60 hover:bg-gray-500/25 hover:opacity-100"><span data-tooltip-id="At mention" class="text-ide-text-color"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-3.5 w-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"></path></svg></span></div><div class="rounded-sm p-1 cursor-pointer opacity-60 hover:bg-gray-500/25 hover:opacity-100"><span data-tooltip-id="Copy" class="text-ide-text-color"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy h-3.5 w-3.5"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg></span></div></div></div></div><div class="language-json relative overflow-hidden rounded-b border-x border-b border-gray-500/25 bg-ide-editor-background p-2" aria-label="highlighted-code-language-json"><div class="w-full h-full text-xs cursor-text"><div class="code-block"><div class="code-line" data-line-number="1" data-line-start="1" data-line-end="1"><div class="line-content"><span class="mtk1">{</span></div></div><div class="code-line" data-line-number="2" data-line-start="2" data-line-end="2"><div class="line-content"><span class="mtk1"></span><span class="mtk9">"dependencies"</span><span class="mtk1">: {</span></div></div><div class="code-line" data-line-number="3" data-line-start="3" data-line-end="3"><div class="line-content"><span class="mtk1"></span><span class="mtk9">"@inertiajs/vue3"</span><span class="mtk1">: </span><span class="mtk11">"^2.0.0"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="4" data-line-start="4" data-line-end="4"><div class="line-content"><span class="mtk1"></span><span class="mtk9">"@radix-icons/vue"</span><span class="mtk1">: </span><span class="mtk11">"^1.0.0"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="5" data-line-start="5" data-line-end="5"><div class="line-content"><span class="mtk1"></span><span class="mtk9">"@tiptap/extension-placeholder"</span><span class="mtk1">: </span><span class="mtk11">"^3.11.1"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="6" data-line-start="6" data-line-end="6"><div class="line-content"><span class="mtk1"></span><span class="mtk9">"@tiptap/starter-kit"</span><span class="mtk1">: </span><span class="mtk11">"^3.11.1"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="7" data-line-start="7" data-line-end="7"><div class="line-content"><span class="mtk1"></span><span class="mtk9">"@tiptap/vue-3"</span><span class="mtk1">: </span><span class="mtk11">"^3.11.1"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="8" data-line-start="8" data-line-end="8"><div class="line-content"><span class="mtk1"></span><span class="mtk9">"@vueuse/core"</span><span class="mtk1">: </span><span class="mtk11">"^14.1.0"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="9" data-line-start="9" data-line-end="9"><div class="line-content"><span class="mtk1"></span><span class="mtk9">"chart.js"</span><span class="mtk1">: </span><span class="mtk11">"^4.5.1"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="10" data-line-start="10" data-line-end="10"><div class="line-content"><span class="mtk1"></span><span class="mtk9">"class-variance-authority"</span><span class="mtk1">: </span><span class="mtk11">"^0.7.1"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="11" data-line-start="11" data-line-end="11"><div class="line-content"><span class="mtk1"></span><span class="mtk9">"clsx"</span><span class="mtk1">: </span><span class="mtk11">"^2.1.1"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="12" data-line-start="12" data-line-end="12"><div class="line-content"><span class="mtk1"></span><span class="mtk9">"lucide-vue-next"</span><span class="mtk1">: </span><span class="mtk11">"^0.555.0"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="13" data-line-start="13" data-line-end="13"><div class="line-content"><span class="mtk1"></span><span class="mtk9">"radix-vue"</span><span class="mtk1">: </span><span class="mtk11">"^1.9.17"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="14" data-line-start="14" data-line-end="14"><div class="line-content"><span class="mtk1"></span><span class="mtk9">"tailwind-merge"</span><span class="mtk1">: </span><span class="mtk11">"^3.4.0"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="15" data-line-start="15" data-line-end="15"><div class="line-content"><span class="mtk1"></span><span class="mtk9">"tailwindcss-animate"</span><span class="mtk1">: </span><span class="mtk11">"^1.0.7"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="16" data-line-start="16" data-line-end="16"><div class="line-content"><span class="mtk1"></span><span class="mtk9">"vue-chartjs"</span><span class="mtk1">: </span><span class="mtk11">"^5.3.3"</span></div></div><div class="code-line" data-line-number="17" data-line-start="17" data-line-end="17"><div class="line-content"><span class="mtk1">  },</span></div></div><div class="code-line" data-line-number="18" data-line-start="18" data-line-end="18"><div class="line-content"><span class="mtk1"></span><span class="mtk9">"devDependencies"</span><span class="mtk1">: {</span></div></div><div class="code-line" data-line-number="19" data-line-start="19" data-line-end="19"><div class="line-content"><span class="mtk1"></span><span class="mtk9">"@tailwindcss/forms"</span><span class="mtk1">: </span><span class="mtk11">"^0.5.3"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="20" data-line-start="20" data-line-end="20"><div class="line-content"><span class="mtk1"></span><span class="mtk9">"@tailwindcss/vite"</span><span class="mtk1">: </span><span class="mtk11">"^4.0.0"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="21" data-line-start="21" data-line-end="21"><div class="line-content"><span class="mtk1"></span><span class="mtk9">"@vitejs/plugin-vue"</span><span class="mtk1">: </span><span class="mtk11">"^6.0.0"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="22" data-line-start="22" data-line-end="22"><div class="line-content"><span class="mtk1"></span><span class="mtk9">"laravel-vite-plugin"</span><span class="mtk1">: </span><span class="mtk11">"^2.0.0"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="23" data-line-start="23" data-line-end="23"><div class="line-content"><span class="mtk1"></span><span class="mtk9">"tailwindcss"</span><span class="mtk1">: </span><span class="mtk11">"^3.2.1"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="24" data-line-start="24" data-line-end="24"><div class="line-content"><span class="mtk1"></span><span class="mtk9">"vite"</span><span class="mtk1">: </span><span class="mtk11">"^7.0.7"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="25" data-line-start="25" data-line-end="25"><div class="line-content"><span class="mtk1"></span><span class="mtk9">"vue"</span><span class="mtk1">: </span><span class="mtk11">"^3.4.0"</span></div></div><div class="code-line" data-line-number="26" data-line-start="26" data-line-end="26"><div class="line-content"><span class="mtk1">  }</span></div></div><div class="code-line" data-line-number="27" data-line-start="27" data-line-end="27"><div class="line-content"><span class="mtk1">}</span></div></div></div></div></div></div></pre>

### **Color Scheme (HSL Format)**

**Light Mode:**

* Background:

  ```
  0 0% 100%
  ```

  (White)
* Foreground:

  ```
  0 0% 10.6%
  ```

  (#1B1B1B - Dark Gray)
* Primary:

  ```
  153 73% 39%
  ```

  (#1BAA6A - Ishwardi Green)
* Secondary:

  ```
  212 100% 59%
  ```

  (#2D8EFF - Blue)
* Accent:

  ```
  44 89% 61%
  ```

  (#F4C542 - Yellow Gold)
* Destructive:

  ```
  0 63% 55%
  ```

  (#D64545 - Red)
* Muted:

  ```
  240 4.8% 95.9%
  ```
* Border:

  ```
  240 5.9% 90%
  ```

**Dark Mode:**

* Background:

  ```
  200 11% 7%
  ```

  (#101314 - Dark Background)
* Foreground:

  ```
  0 0% 93%
  ```

  (#EDEDED - Light Text)
* Card:

  ```
  204 9% 11%
  ```

  (#1A1D1F - Dark Card)
* Border:

  ```
  200 6% 18%
  ```

  (#2A2E30 - Dark Border)
* Muted:

  ```
  240 3.7% 15.9%
  ```

### **Layout Structure**

**1. Main Layout (**

**AdminLayout.vue):**

* Flexbox container with sidebar and main content
* Sidebar: Fixed left, collapsible (64px collapsed, 256px expanded)
* Main content: Flex-1, adjusts margin based on sidebar state
* Responsive: Mobile overlay sidebar, desktop persistent sidebar
* Toast notifications system integrated

**2. Sidebar (**

**AdminSidebar.vue):**

* Fixed position, full height
* Logo/Brand at top (shows "IshwardiHub" expanded, "IH" collapsed)
* Collapsible menu groups with icons
* Active route highlighting (primary color background)
* Nested submenu support with indentation
* Collapse toggle button at bottom
* Mobile: Slide-in with backdrop overlay

**Menu Structure:**

* **Overview:** Dashboard
* **Management:** Users, Service Providers (with submenu), Marketplace (with submenu), Emergency Directory (with submenu), Photo Competition, Jobs, Rentals, Restaurants, Lost & Found, Best Locations, Blood Requests
* **System:** Locations, Settings

**3. Topbar (**

**AdminTopbar.vue):**

* Sticky top navigation
* Mobile hamburger menu button
* Search bar (300-400px width)
* Notification bell icon
* User dropdown menu (profile, settings, logout)
* Height: 64px (h-16)

**4. Dashboard (**

**Dashboard.vue):**

* Grid-based stats cards (4 columns on desktop, 2 on tablet, 1 on mobile)
* Each stat card shows: Icon, Title, Main Number, Subtitle
* Charts section: Line chart (user growth), Doughnut chart (marketplace categories), Bar chart (providers by category)
* Recent activity feed with icons and timestamps
* Quick actions section with pending counts

### **TailwindCSS Configuration**

<pre><div><div class="min-h-7 relative box-border flex flex-row items-center justify-between rounded-t border border-b-0 border-gray-500/25 px-2 py-0.5"><div class="font-sans text-sm text-ide-text-color opacity-60">javascript</div><div><div class="flex flex-row items-center gap-0.5"><div class="rounded-sm p-1 cursor-pointer opacity-60 hover:bg-gray-500/25 hover:opacity-100"><span data-tooltip-id="At mention" class="text-ide-text-color"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-3.5 w-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"></path></svg></span></div><div class="rounded-sm p-1 cursor-pointer opacity-60 hover:bg-gray-500/25 hover:opacity-100"><span data-tooltip-id="Copy" class="text-ide-text-color"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy h-3.5 w-3.5"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg></span></div></div></div></div><div class="language-javascript relative overflow-hidden rounded-b border-x border-b border-gray-500/25 bg-ide-editor-background p-2" aria-label="highlighted-code-language-javascript"><div class="w-full h-full text-xs cursor-text"><div class="code-block"><div class="code-line" data-line-number="1" data-line-start="1" data-line-end="1"><div class="line-content"><span class="mtk17">export</span><span class="mtk1"></span><span class="mtk17">default</span><span class="mtk1"> {</span></div></div><div class="code-line" data-line-number="2" data-line-start="2" data-line-end="2"><div class="line-content"><span class="mtk1"></span><span class="mtk9">darkMode:</span><span class="mtk1"> [</span><span class="mtk11">"class"</span><span class="mtk1">],</span></div></div><div class="code-line" data-line-number="3" data-line-start="3" data-line-end="3"><div class="line-content"><span class="mtk1"></span><span class="mtk9">theme:</span><span class="mtk1"> {</span></div></div><div class="code-line" data-line-number="4" data-line-start="4" data-line-end="4"><div class="line-content"><span class="mtk1"></span><span class="mtk9">extend:</span><span class="mtk1"> {</span></div></div><div class="code-line" data-line-number="5" data-line-start="5" data-line-end="5"><div class="line-content"><span class="mtk1"></span><span class="mtk9">fontFamily:</span><span class="mtk1"> {</span></div></div><div class="code-line" data-line-number="6" data-line-start="6" data-line-end="6"><div class="line-content"><span class="mtk1"></span><span class="mtk9">sans:</span><span class="mtk1"> [</span><span class="mtk11">"Figtree"</span><span class="mtk1">, ...</span><span class="mtk9">defaultTheme</span><span class="mtk1">.</span><span class="mtk9">fontFamily</span><span class="mtk1">.</span><span class="mtk9">sans</span><span class="mtk1">],</span></div></div><div class="code-line" data-line-number="7" data-line-start="7" data-line-end="7"><div class="line-content"><span class="mtk1">      },</span></div></div><div class="code-line" data-line-number="8" data-line-start="8" data-line-end="8"><div class="line-content"><span class="mtk1"></span><span class="mtk9">colors:</span><span class="mtk1"> {</span></div></div><div class="code-line" data-line-number="9" data-line-start="9" data-line-end="9"><div class="line-content"><span class="mtk1"></span><span class="mtk9">border:</span><span class="mtk1"></span><span class="mtk11">"hsl(var(--border))"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="10" data-line-start="10" data-line-end="10"><div class="line-content"><span class="mtk1"></span><span class="mtk9">input:</span><span class="mtk1"></span><span class="mtk11">"hsl(var(--input))"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="11" data-line-start="11" data-line-end="11"><div class="line-content"><span class="mtk1"></span><span class="mtk9">ring:</span><span class="mtk1"></span><span class="mtk11">"hsl(var(--ring))"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="12" data-line-start="12" data-line-end="12"><div class="line-content"><span class="mtk1"></span><span class="mtk9">background:</span><span class="mtk1"></span><span class="mtk11">"hsl(var(--background))"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="13" data-line-start="13" data-line-end="13"><div class="line-content"><span class="mtk1"></span><span class="mtk9">foreground:</span><span class="mtk1"></span><span class="mtk11">"hsl(var(--foreground))"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="14" data-line-start="14" data-line-end="14"><div class="line-content"><span class="mtk1"></span><span class="mtk9">primary:</span><span class="mtk1"> {</span></div></div><div class="code-line" data-line-number="15" data-line-start="15" data-line-end="15"><div class="line-content"><span class="mtk1"></span><span class="mtk9">DEFAULT:</span><span class="mtk1"></span><span class="mtk11">"hsl(var(--primary))"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="16" data-line-start="16" data-line-end="16"><div class="line-content"><span class="mtk1"></span><span class="mtk9">foreground:</span><span class="mtk1"></span><span class="mtk11">"hsl(var(--primary-foreground))"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="17" data-line-start="17" data-line-end="17"><div class="line-content"><span class="mtk1">        },</span></div></div><div class="code-line" data-line-number="18" data-line-start="18" data-line-end="18"><div class="line-content"><span class="mtk1"></span><span class="mtk4">// ... (secondary, destructive, muted, accent, popover, card)</span></div></div><div class="code-line" data-line-number="19" data-line-start="19" data-line-end="19"><div class="line-content"><span class="mtk1">      },</span></div></div><div class="code-line" data-line-number="20" data-line-start="20" data-line-end="20"><div class="line-content"><span class="mtk1"></span><span class="mtk9">borderRadius:</span><span class="mtk1"> {</span></div></div><div class="code-line" data-line-number="21" data-line-start="21" data-line-end="21"><div class="line-content"><span class="mtk1"></span><span class="mtk9">lg:</span><span class="mtk1"></span><span class="mtk11">"var(--radius)"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="22" data-line-start="22" data-line-end="22"><div class="line-content"><span class="mtk1"></span><span class="mtk9">md:</span><span class="mtk1"></span><span class="mtk11">"calc(var(--radius) - 2px)"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="23" data-line-start="23" data-line-end="23"><div class="line-content"><span class="mtk1"></span><span class="mtk9">sm:</span><span class="mtk1"></span><span class="mtk11">"calc(var(--radius) - 4px)"</span><span class="mtk1">,</span></div></div><div class="code-line" data-line-number="24" data-line-start="24" data-line-end="24"><div class="line-content"><span class="mtk1">      },</span></div></div><div class="code-line" data-line-number="25" data-line-start="25" data-line-end="25"><div class="line-content"><span class="mtk1">    },</span></div></div><div class="code-line" data-line-number="26" data-line-start="26" data-line-end="26"><div class="line-content"><span class="mtk1">  },</span></div></div><div class="code-line" data-line-number="27" data-line-start="27" data-line-end="27"><div class="line-content"><span class="mtk1"></span><span class="mtk9">plugins:</span><span class="mtk1"> [</span><span class="mtk9">forms</span><span class="mtk1">, </span><span class="mtk9">animate</span><span class="mtk1">],</span></div></div><div class="code-line" data-line-number="28" data-line-start="28" data-line-end="28"><div class="line-content"><span class="mtk1">}</span></div></div></div></div></div></div></pre>

### **Key Features**

1. **Responsive Design:** Mobile-first with breakpoints (md, lg)
2. **Dark Mode Support:** Class-based dark mode toggle
3. **Smooth Transitions:** 300ms duration for sidebar, hover effects
4. **Icon System:** Lucide icons throughout (consistent 16px/20px sizes)
5. **Card Components:** Radix-based card system with header/content
6. **Active State:** Route-based active highlighting
7. **Accessibility:** Proper ARIA labels, semantic HTML
8. **Toast Notifications:** Flash message integration
9. **Charts:** Responsive Chart.js integration with custom colors

### **CSS Variables (app.css)**

Define all color variables in

```
:root
```

 and

```
.dark
```

 classes using HSL format. Use

```
@tailwind
```

 directives and

```
@layer base
```

 for global styles.

### **Utility Function**

Create

lib/utils.js:

<pre><div><div class="min-h-7 relative box-border flex flex-row items-center justify-between rounded-t border border-b-0 border-gray-500/25 px-2 py-0.5"><div class="font-sans text-sm text-ide-text-color opacity-60">javascript</div><div><div class="flex flex-row items-center gap-0.5"><div class="rounded-sm p-1 cursor-pointer opacity-60 hover:bg-gray-500/25 hover:opacity-100"><span data-tooltip-id="At mention" class="text-ide-text-color"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-3.5 w-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"></path></svg></span></div><div class="rounded-sm p-1 cursor-pointer opacity-60 hover:bg-gray-500/25 hover:opacity-100"><span data-tooltip-id="Copy" class="text-ide-text-color"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy h-3.5 w-3.5"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg></span></div></div></div></div><div class="language-javascript relative overflow-hidden rounded-b border-x border-b border-gray-500/25 bg-ide-editor-background p-2" aria-label="highlighted-code-language-javascript"><div class="w-full h-full text-xs cursor-text"><div class="code-block"><div class="code-line" data-line-number="1" data-line-start="1" data-line-end="1"><div class="line-content"><span class="mtk17">import</span><span class="mtk1"> { </span><span class="mtk9">clsx</span><span class="mtk1"> } </span><span class="mtk17">from</span><span class="mtk1"></span><span class="mtk11">"clsx"</span><span class="mtk1">;</span></div></div><div class="code-line" data-line-number="2" data-line-start="2" data-line-end="2"><div class="line-content"><span class="mtk17">import</span><span class="mtk1"> { </span><span class="mtk9">twMerge</span><span class="mtk1"> } </span><span class="mtk17">from</span><span class="mtk1"></span><span class="mtk11">"tailwind-merge"</span><span class="mtk1">;</span></div></div><div class="code-line" data-line-number="3" data-line-start="3" data-line-end="3"><div class="line-content"><span class="mtk1"></span></div></div><div class="code-line" data-line-number="4" data-line-start="4" data-line-end="4"><div class="line-content"><span class="mtk17">export</span><span class="mtk1"></span><span class="mtk5">function</span><span class="mtk1"></span><span class="mtk15">cn</span><span class="mtk1">(...</span><span class="mtk9">inputs</span><span class="mtk1">) {</span></div></div><div class="code-line" data-line-number="5" data-line-start="5" data-line-end="5"><div class="line-content"><span class="mtk1"></span><span class="mtk17">return</span><span class="mtk1"></span><span class="mtk15">twMerge</span><span class="mtk1">(</span><span class="mtk15">clsx</span><span class="mtk1">(</span><span class="mtk9">inputs</span><span class="mtk1">));</span></div></div><div class="code-line" data-line-number="6" data-line-start="6" data-line-end="6"><div class="line-content"><span class="mtk1">}</span></div></div></div></div></div></div></pre>

### **Design Principles**

* **Clean & Modern:** Minimal design with ample whitespace
* **Consistent Spacing:** 4px base unit (p-4, gap-4, space-y-6)
* **Typography:** Bold headings (text-3xl, font-bold), muted secondary text
* **Shadows:** Subtle shadows on topbar (shadow-sm)
* **Borders:** Consistent border color throughout
* **Hover States:** Accent background on hover for interactive elements
* **Status Badges:** Colored badges for pending/active states

---
