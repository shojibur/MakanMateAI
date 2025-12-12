### Your Smart Malaysian Food Companion 🇲🇾

**MakanMate AI** is a conversational, AI-powered food discovery app designed for Malaysia.

It helps locals and tourists decide  **what to eat, where to eat, and why** , using Yelp’s new **Conversational AI API** as the primary data source.

Built with a  **Laravel API backend** , a  **professional shadcn-vue admin panel** , and a  **mobile-first Expo React Native app** , MakanMate AI delivers a clean, modern user experience with intelligent, culturally localized recommendations.

---

## 🚀 Features

### 🤖 Conversational Food Discovery

Chat naturally with MakanMate AI:

> “I’m in KL, budget RM20, halal, spicy food, nearby”

The AI understands:

* Location
* Budget
* Halal preference
* Cuisine & spice level
* Time (late night, open now)

---

### 🇲🇾 Malaysia-First Intelligence

MakanMate AI is tuned specifically for Malaysia:

* 🍛 Mamak, nasi kandar, kopitiam, street food
* 🕌 Halal-focused recommendations
* 🌙 Late-night & 24-hour places
* 🌧️ “Rainy day food” suggestions
* 🎧 Café vibes: quiet, study-friendly, family-friendly

---

### 🔍 Smart Comparison Mode

Compare restaurants side-by-side:

* Price range
* Distance
* Halal confidence
* Why each place matches your needs

---

### 📱 Mobile-First Experience

* Clean, modern UI optimized for mobile
* Chat-based interface with quick action chips
* Designed for fast decisions, not long searches

---

### 🛠️ Admin Dashboard (shadcn-vue)

A professional internal dashboard to:

* Monitor chat usage
* View popular food queries
* Manage AI prompt templates
* Toggle recommendation modes (Halal / Late Night / Vibe)
* View API health & logs

---

## 🧠 How It Works

<pre class="overflow-visible! px-0!" data-start="1990" data-end="2230"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-text"><span><span>User (Expo React Native App)
        ↓
Laravel API Backend
        ↓
Yelp Conversational AI API
        ↓
AI Response + Business Data
        ↓
Laravel enriches & localizes response
        ↓
Mobile app displays friendly results
</span></span></code></div></div></pre>

---

## 🏗️ Tech Stack

### Backend

* **Laravel 11**
* REST API architecture
* Secure Yelp AI API integration
* Prompt engineering & response enrichment

### Admin Panel

* **Vue 3**
* **shadcn-vue**
* Tailwind CSS
* Clean, enterprise-style dashboard UI

### Mobile App

* **Expo (React Native)**
* Mobile-first chat UI
* Optimized for Android & iOS

---

## 🔐 Why a Backend?

Using Laravel provides:

* Secure API key management (no client exposure)
* Custom AI prompt control
* Malaysia-specific business logic
* Scalable architecture for future features

---

## 🧪 Example AI Prompt (Simplified)

> You are  **MakanMate AI** , a friendly Malaysian food assistant.
>
> Prioritize halal-friendly, budget-conscious restaurants when requested.
>
> Recommend mamak and late-night options when appropriate.
>
> Always explain *why* each restaurant matches the user’s preferences.
>
