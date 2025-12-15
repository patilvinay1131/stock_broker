import { db } from './firebase-config.js';
import { doc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const STOCKS = ['GOOG', 'TSLA', 'AMZN', 'META', 'NVDA'];
const prices = {
    'GOOG': 140.50,
    'TSLA': 210.20,
    'AMZN': 175.00,
    'META': 480.00,
    'NVDA': 850.00
};

let isActive = false;

export async function initMarketSimulation() {
    if (isActive) return;
    isActive = true;

    console.log("Initializing Market Simulation...");

    // Initial Setup
    for (const ticker of STOCKS) {
        const ref = doc(db, "stocks", ticker);
        await setDoc(ref, {
            ticker: ticker,
            price: prices[ticker],
            trend: 'neutral'
        }, { merge: true });
    }

    // Start Loop
    setInterval(async () => {
        for (const ticker of STOCKS) {
            // Random movement -5 to +5
            const movement = (Math.random() * 10) - 5;
            prices[ticker] = parseFloat((prices[ticker] + movement).toFixed(2));

            const customChange = parseFloat(movement.toFixed(2));
            const trend = movement > 0 ? 'up' : 'down';

            const ref = doc(db, "stocks", ticker);
            updateDoc(ref, {
                price: prices[ticker],
                change: customChange,
                trend: trend,
                timestamp: Date.now()
            }).catch(e => console.error("Market update failed", e));
        }
    }, 2000); // Slower interval (2s) to be less aggressive on the client in Dashboard
}
