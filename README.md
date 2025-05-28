# 🧠 Answer Buddy

Answer Buddy is a single-page AI assistant built using React and integrated with Google's **Gemini API**. Inspired by Google's Gemini interface, this project allows users to interact with an intelligent chatbot, supporting light/dark mode, command history, and a sleek UI.

---

## 🔧 Tech Stack

- **React.js** – Front-end framework
- **Tailwind CSS** – Utility-first styling
- **Lucide React** – Icon library for SVG icons
- **Vite** – Fast development bundler
- **Gemini API** – AI response backend
- **Context API** - State Management

---

## 📁 Folder Structure

```bash
answer-buddy/
├── public/                     # Static files
├── node_modules/               # Node dependencies
├── src/                        # Source files
│   ├── api/                    # Gemini API call logic
│   ├── assets/                 # Static assets like icons/images
│   ├── component/
│   │   ├── Main-section/       # Main chat UI (chat window, markdown typing, etc.)
│   │   └── Sidebar/            # Sidebar navigation (history, settings, etc.)
│   ├── config/                 # Tailwind and environment configurations
│   ├── App.css                 # Global styles
│   ├── App.jsx                 # App entry wrapper
│   ├── AnswerBuddyContext.jsx      # Global state with React Context
│   ├── index.css              # Tailwind base styles
│   ├── main.jsx               # React DOM render logic
├── .gitignore                  # Git ignore rules
├── eslint.config.js           # ESLint configuration
├── index.html                 # Main HTML file
├── package.json               # Project metadata and scripts
├── README.md                  # Project documentation
├── tailwind.config.js         # Tailwind CSS configuration
└── vite.config.js             # Vite configuration
```

---

## 🌗 Dark Mode Support

As of now,Dark mode is enabled using simple and baisc React state variables.

Toggle is handled via a `ThemeToggle` component and toggles the `darkMode` state variable between true and false.

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/answer-buddy.git
cd answer-buddy

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Open your browser at `http://localhost:5173` to see it in action.

---

## 📦 Build

```bash
npm run build
```

---

## 🤖 Features

- Chat interface with Markdown support
- Animated typing effect for AI responses
- Light/Dark theme toggle
- Sidebar for chat history and settings
- Lucide icons for consistent theming

---

## 📄 License

MIT © [Uday Krishna Rajbangshi]
