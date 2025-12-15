# 🚀 Stock Broker

**Stock Broker** is a modern, real-time stock portfolio tracking application designed to simulate a trading environment. Users can manage their investments, view live market updates, and analyze their portfolio's performance through interactive charts and dynamic statistics.



## ✨ Features

### 🔐 Authentication & user Management
-   **Secure Login/Signup**: Powered by Firebase Authentication.
-   **Auto-Redirect**: Intelligent routing directs logged-in users straight to the dashboard.
-   **Persistent Sessions**: Stay logged in across page reloads.

### 📊 Interactive Dashboard
-   **Portfolio Overview**: Instantly view your **Invested Value**, **Current Value**, and **Total Returns** (Profit/Loss).
-   **Real-Time Analytics**:
    -   **Dynamic Graph**: A large, interactive area chart visualizes your total portfolio value over time.
    -   **Color-Coded Indicators**: Visual cues (Green for Profit, Red for Loss) changes dynamically based on performance.
-   **Responsive Design**: A sleek, dark-themed Glassmorphism UI that adapts seamlessly to desktop and mobile screens.

### 📈 Live Market Simulation
-   **Real-Time Ticker**: Built-in market engine (`market-simulation.js`) simulates live price movements for major tech stocks (GOOG, TSLA, AMZN, META, NVDA).
-   **Live Updates**: Prices, trends, and charts update instantly without page refreshes using Firestore real-time listeners.

### 💰 Portfolio Management
-   **Buy Stocks**: Add stocks to your portfolio with custom quantities. The app automatically records your **Cost Basis** at the time of purchase.
-   **Sell/Remove**:
    -   **Partial Sell**: Sell a specific number of shares; the app proportionally adjusts your invested amount.
    -   **Remove All**: One-click option to completely divest from a stock.
-   **Toast Notifications**: instant visual feedback ("Successfully Added!!", "Successfully Removed!!") for all actions.

## 🛠️ Tech Stack

-   **Frontend**: HTML5, JavaScript (ES6 Modules), CSS3 (Custom Glassmorphism Design).
-   **Backend**: Google Firebase (Firestore Database, Authentication).
-   **Libraries**:
    -   **Chart.js**: For rendering beautiful, responsive line charts.
    -   **Ionicons**: For crisp UI icons.

## 📂 Project Structure

```bash
CUPI/
├── public/
│   ├── css/
│   │   └── style.css          # Main styling (Glassmorphism, animations)
│   ├── dashboard.html         # Main app interface (Portfolio & Stocks view)
│   ├── index.html             # Login page
│   ├── signup.html            # Registration page
│   ├── firebase-config.js     # Firebase SDK initialization
│   └── market-simulation.js   # Background service for dummy stock prices
└── README.md                  # Project documentation
```

## 🚀 Getting Started

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/stock-broker.git
    cd stock-broker
    ```

2.  **Configure Firebase**
    -   Create a project in the [Firebase Console](https://console.firebase.google.com/).
    -   Enable **Authentication** (Email/Password).
    -   Enable **Firestore Database**.
    -   Copy your config object into `public/firebase-config.js`.

3.  **Run Locally**
    Since the app uses ES Modules, you need a local server.
    ```bash
    # Using python
    python -m http.server 8000

    # OR using Node.js 'serve'
    npx serve public
    ```
    Open `http://localhost:8000` in your browser.

## 🕹️ How to Use

1.  **Sign Up**: Create a new account on the landing page.
2.  **Explore Market**: Go to the "Stocks" tab to see live simulated prices.
3.  **Buy**: Click the **+** button on any stock card, enter quantity, and confirm.
4.  **Track**: Switch to the "Dashboard" tab to watch your portfolio grow (or shrink!) in real-time.
5.  **Sell**: Click the **X** button on a stock in your portfolio to sell some or all shares.

---

**Developed for the Advanced Agentic Coding Project.**
