# MakanMate AI - App Screens Documentation

This directory contains all the main screens for the MakanMate AI mobile application.

## 📱 Screens Overview

### 1. **ChatScreen.js** - Conversational AI Interface
The main chat interface where users interact with MakanMate AI to discover food.

**Features:**
- 💬 Real-time chat interface with AI responses
- 🎯 Quick action chips for common queries (Halal, Late Night, Budget, etc.)
- ⌨️ Multi-line text input with character limit
- 🕐 Message timestamps
- ⏳ Typing indicator animation
- 🎨 Beautiful gradient message bubbles

**Dummy Data:**
- Pre-loaded welcome message
- 6 quick action chips (Halal, Late Night, Under RM20, Spicy, Café, Mamak)
- AI responses for halal, late night, and general queries
- Sample restaurant recommendations with ratings and distances

---

### 2. **ExploreScreen.js** - Browse Restaurants
Discover restaurants by category with search and filtering.

**Features:**
- 🔍 Search bar with real-time filtering
- 🏷️ Category chips (Mamak, Nasi Kandar, Chinese, Malay, Indian, Café, Street Food, Dessert)
- 🍽️ Restaurant cards with detailed information
- 🕌 Halal certification badges
- ⭐ Ratings and review counts
- 📍 Distance and price range
- 🏷️ Tags for special features
- 🚫 Closed restaurant indicators
- 📊 Result count display

**Dummy Data:**
- 8 restaurant categories with emojis and colors
- 8 sample restaurants with complete details:
  - Restoran Nasi Kandar Pelita
  - Wong Ah Wah
  - Madam Kwan's
  - Mamak Corner
  - Restoran Oversea
  - Banana Leaf Restaurant
  - VCR Café
  - Jalan Alor Night Market

---

### 3. **RestaurantDetailScreen.js** - Restaurant Details
Comprehensive view of a single restaurant with all information.

**Features:**
- 🖼️ Large header image with emoji
- ← Back button navigation
- ❤️ Favorite toggle button
- 🟢 Open/Closed status badge
- ⭐ Detailed rating with review count
- 📍 Distance, price range, and hours
- 🧭 Action buttons (Directions, Call, Share)
- ✨ "Why This Matches You" section with personalized reasons
- 📝 About section with description
- 🍽️ Specialties chips
- ✓ Amenities list
- 📞 Contact information (address, phone)
- 💬 Recent reviews with ratings

**Dummy Data:**
- Complete restaurant profile for "Restoran Nasi Kandar Pelita"
- 5 specialty dishes
- 4 amenities
- 5 personalized match reasons
- 3 customer reviews with ratings and dates

---

### 4. **ComparisonScreen.js** - Side-by-Side Comparison
Compare two restaurants across multiple categories.

**Features:**
- 📊 5 comparison categories (Overview, Pricing, Location, Features, Reviews)
- 🏆 "Best Match" recommendation badge
- 💰 Visual price comparison with bars
- 📍 Distance comparison with directions
- ✨ Specialties and match reasons
- 👍👎 Pros and cons analysis
- ⭐ Detailed review statistics
- 🏷️ Review tags (most mentioned features)
- ✅ Bottom action button to select winner

**Dummy Data:**
- 2 restaurants for comparison:
  - Restoran Nasi Kandar Pelita (recommended)
  - Madam Kwan's
- Complete comparison across all 5 categories
- Pros/cons for each restaurant
- Review highlights and tags

---

### 5. **FavoritesScreen.js** - Saved Restaurants
Manage saved restaurants and collections.

**Features:**
- 📊 Statistics cards (Saved Places, Total Visits, Halal Count)
- 🔄 Toggle between "All Favorites" and "Collections" views
- ❤️ Favorite restaurant cards with visit tracking
- 🗑️ Remove from favorites
- 📁 Collections with custom emojis and colors
- ➕ Create new collection
- ⚡ Quick access shortcuts (Late Night, Most Visited, Nearby)
- 📅 "Saved date" tracking
- 🔢 Visit count for each restaurant

**Dummy Data:**
- 4 saved restaurants with visit counts
- 4 pre-made collections:
  - Late Night Favorites (8 places)
  - Halal Spots (12 places)
  - Budget Friendly (15 places)
  - Date Night (5 places)
- 3 quick access shortcuts

---

### 6. **ProfileScreen.js** - User Profile & Settings
User profile, preferences, and app settings.

**Features:**
- 👤 User profile with avatar and stats
- 📊 Statistics (Visits, Favorites, Cuisines)
- 🍽️ Food preferences:
  - 🕌 Halal only toggle
  - 💰 Budget range selector
  - 📍 Max distance setting
  - 🍽️ Favorite cuisines
- ⚙️ App settings:
  - 🔔 Notifications toggle
  - 📍 Location services toggle
  - 🌙 Dark mode toggle
  - 🌐 Language selector
- 👤 Account management (Edit Profile, Privacy, Email)
- 🆘 Support (Help Center, Contact, Rate App, Terms)
- ℹ️ About section with version info
- 🚪 Logout button

**Dummy Data:**
- User profile: Ahmad Rahman
- 42 total visits, 15 favorites
- Halal preference enabled
- Budget: RM20-30
- Max distance: 2km
- 3 favorite cuisines (Malay, Chinese, Indian)

---

## 🎨 Design System

### Color Palette
- **Primary Red**: `#CC0001` (Malaysian flag red)
- **Primary Yellow**: `#FECB00` (Malaysian flag yellow)
- **Primary Blue**: `#0047AB` (Malaysian flag blue)
- **Success Green**: `#16a34a` (Halal indicator)
- **Error Red**: `#dc2626`
- **Background Dark**: `#0a0a0a`
- **Card Background**: `#1a1a1a`
- **Border**: `#2a2a2a`
- **Text Primary**: `#fff`
- **Text Secondary**: `#999`

### Typography
- **Header Title**: 28-32px, Bold
- **Section Title**: 20-22px, Bold
- **Card Title**: 16-18px, Bold
- **Body Text**: 14-16px, Regular
- **Caption**: 11-13px, Regular

### Components
- **Rounded Corners**: 12-25px
- **Card Padding**: 16-20px
- **Border Width**: 1px
- **Shadow**: Subtle elevation for cards
- **Emoji Icons**: Used throughout for visual appeal

---

## 🚀 Navigation

The app uses a custom bottom tab navigation (see `MainApp.js`):

1. **💬 Chat** - ChatScreen
2. **🔍 Explore** - ExploreScreen
3. **❤️ Favorites** - FavoritesScreen
4. **👤 Profile** - ProfileScreen

---

## 🇲🇾 Malaysian-Specific Features

All screens are designed with Malaysian food culture in mind:

- 🕌 **Halal certification** prominently displayed
- 🌙 **Late-night/24-hour** options highlighted
- 💰 **RM pricing** throughout
- 🍛 **Local cuisines**: Mamak, Nasi Kandar, etc.
- 🇲🇾 **Malaysian flag colors** in design
- 📍 **KL-centric** location examples

---

## 📝 Dummy Data Summary

All screens use realistic dummy data representing:
- **8 restaurants** with complete profiles
- **8 food categories**
- **4 collections**
- **Multiple reviews** and ratings
- **User profile** with preferences
- **Chat conversations** with AI

---

## 🔄 Next Steps

To integrate with the Laravel backend:

1. Replace dummy data with API calls
2. Implement authentication
3. Add real-time chat with Yelp AI API
4. Connect favorites to user database
5. Implement actual navigation between screens
6. Add map integration for directions
7. Implement phone calling functionality
8. Add share functionality

---

## 🎯 Key Features Implemented

✅ Conversational AI chat interface  
✅ Restaurant browsing and filtering  
✅ Detailed restaurant profiles  
✅ Side-by-side comparison  
✅ Favorites management  
✅ Collections system  
✅ User preferences  
✅ Halal-focused features  
✅ Malaysian cultural elements  
✅ Beautiful, modern UI  
✅ Dark mode design  
✅ Responsive layouts  

---

**Built with ❤️ for Malaysian food lovers 🇲🇾**
