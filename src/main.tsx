import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Beklenmedik render hatasında beyaz ekran yerine kurtarma ekranı.
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error) {
    console.error("EPT ErrorBoundary:", error);
  }
  async resetData() {
    const keys = Object.keys(localStorage).filter((k) => k.startsWith("ept:"));
    const dump = Object.fromEntries(keys.map((k) => [k, localStorage.getItem(k)]));
    try {
      await navigator.clipboard.writeText(JSON.stringify(dump, null, 2));
    } catch {
      /* pano izni yoksa yine de sıfırla */
    }
    keys.forEach((k) => localStorage.removeItem(k));
    location.reload();
  }
  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div className="mx-auto flex h-[100dvh] max-w-md flex-col items-center justify-center gap-4 bg-surface-0 p-6 text-center">
        <p className="text-lg font-semibold text-neutral-100">Bir şeyler ters gitti.</p>
        <button className="btn-accent" onClick={() => location.reload()}>
          Yeniden yükle
        </button>
        <button className="btn-ghost text-sm" onClick={() => this.resetData()}>
          Verileri sıfırla (önce JSON kopyala)
        </button>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);

// Service worker sadece production'da (dev'de HMR'ı bozmasın).
if (import.meta.env.PROD && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).catch(() => {});
  });
}
