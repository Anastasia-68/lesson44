import React from "react";
import { AppProvider } from "./context/AppContext";
import DeepParent from "./components/DeepParent";
import "./index.css";

function App() {
  return (
    <AppProvider>
      <main className="app-root">
        <header>
          <h1>Пример: React Context в многоуровневой архитектуре</h1>
        </header>

        <DeepParent />

        <footer>
          <p>Демо приложения с передачей данных через Context — без пропсов.</p>
        </footer>
      </main>
    </AppProvider>
  );
}

export default App;
