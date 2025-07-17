# 🎬 NetflixGPT

A Netflix clone built with React, Firebase, TailwindCSS, Redux, and integrated with **Cohere's GPT API** to provide smart movie suggestions based on user input.


## 📌 Features

### 👥 Authentication
- 🔐 Firebase Sign Up / Sign In
- ✅ Form validation using `useRef`
- 👤 Display user displayName and profile picture
- 🔁 Redirect between `/browse` and `/login` based on auth state
- 🚪 Logout functionality
- 🧹 `onAuthStateChanged` unsubscribe for cleanup

### 🔍 GPT-Powered Search (using Cohere API)
- 🔡 Search movies using natural language
- 🧠 Smart GPT suggestions for user input
- 🌐 Multi-language support (Bonus)

### 🎞️ Movie Discovery (TMDB)
- 🎬 Fetch "Now Playing" & "Popular" movies
- 📽️ Get trailers & play them via YouTube embed
- 🧩 Reusable `MovieList` and `MovieCard` components
- 🎨 Styled beautifully with TailwindCSS

### 🧠 Redux Store
- `userSlice` - manages login/logout
- `movieSlice` - stores movie & trailer data
- `gptSlice` - stores AI-generated movie suggestions

### 💄 Responsive UI
- 📱 Mobile-friendly design
- 📽️ Hero trailer background with autoplay & mute
- 📂 Sectioned movie lists
- 🧠 GPT search UI with suggestion list

