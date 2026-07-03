import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { ToastProvider } from "./context/ToastContext";
import { AchievementProvider } from "./context/AchievementContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AchievementProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </AchievementProvider>
    </ThemeProvider>
  </React.StrictMode>
);

if (
  typeof window !== "undefined" &&
  window.location.hostname !== "localhost" &&
  window.location.hostname !== "127.0.0.1"
) {
  import("@vercel/analytics")
    .then(({ inject }) => {
      inject();
    })
    .catch(() => {});
}