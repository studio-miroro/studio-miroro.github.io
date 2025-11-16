import "../styles/App.css"
import { Header } from "./Header.tsx"
import { Games  } from "./Games.tsx"
import { Footer } from "./Footer.tsx"

function App() {
  return (
    <main>
      <div className="app-container">
        <Header/>
        <Games/>
        <Footer/>
      </div>
    </main>
  );
};

export default App;