
# 💬 ChatterMood – Feel What You Type

> A Real-Time Chat App with Emotion Detection built using Firebase, ReactJS, and Google Cloud AI

---

### 👨‍🎓 Made with ❤️ by Arnav Tripathi  
🎓 **B.E. Electronics & Computer Science Engineering**  
🏫 **Vidyalankar Institute of Technology, Mumbai**  

---

## 🌟 What is ChatterMood?

**ChatterMood** isn't just a chat app — it's a mood-aware messenger.  
It analyzes every message you send and tells you how you’re *feeling*, using real-time sentiment analysis powered by **Google Cloud Natural Language API**.

Whether you're venting, vibing, or just vibing low-key, ChatterMood senses the emotion behind the words and brings it to life using expressive mood emojis 😄 😐 😞.

---

## ⚙️ Features

✅ Real-time chatting with instant message sync  
✅ Automatic mood detection on every message  
✅ Firebase Authentication (Google/email)  
✅ Firestore database to store messages  
✅ Cloud Function for real-time sentiment processing  
✅ Deployed live with Firebase Hosting  

---

## 🖼️ Screenshots

### 💬 Chat Interface
![Chat UI](./screenshots/chatUI.png)

### 🔥 Firestore Integration
![Firestore](./screenshots/firestore-data.png)

### ☁️ Live on Firebase Hosting
![Firebase Hosting](./screenshots/firebase-hosting.png)

---

## 🧠 How It Works (Behind the Scenes)

1. User sends a message through the chat interface.
2. It’s stored instantly in Firestore.
3. A **Firebase Cloud Function** is triggered.
4. It sends the message text to **Google Cloud Natural Language API**.
5. The response includes a **sentiment score** (positive/neutral/negative).
6. The score is saved back to the message entry.
7. UI updates with an emoji that reflects the mood 🌈

---

## 🛠️ Tech Stack

| Layer       | Tool/Service                     |
|-------------|----------------------------------|
| Frontend    | ReactJS + TailwindCSS            |
| Backend     | Firebase Functions (Node.js)     |
| Auth        | Firebase Authentication          |
| Database    | Firebase Firestore               |
| AI / NLP    | Google Cloud Natural Language API|
| Hosting     | Firebase Hosting                 |

---

## 🚀 Live Demo

[👉 chattermood-realtime.web.app](https://chattermood-realtime.web.app)

Try chatting and see the mood change with every message!

---

## 📦 Project Structure

```

chattermood/
├── src/
│   ├── App.js            # Main chat UI
│   └── firebase.js       # Firebase config
├── functions/            # Cloud Function for sentiment
│   └── index.js
├── public/
├── screenshots/          # UI proofs for README
├── firebase.json
├── .firebaserc
├── README.md
└── package.json

````

---

## 🧪 Run It Locally (if you want to test it)

```bash
git clone https://github.com/ArnavGit17/chattermood.git
cd chattermood
npm install
````

🛠️ Set up your Firebase credentials in `src/firebase.js`

Then run:

```bash
npm start
```

---

## ☁️ Deployment (If you want to host your own)

```bash
npm run build
firebase deploy --only hosting
firebase deploy --only functions
```

---

## 📄 License

This project was made as a part of my cloud-based application project portfolio.
Use it, fork it, vibe with it. Just don’t forget to give credits 🌱

---


