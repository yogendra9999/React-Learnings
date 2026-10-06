import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="content">
        <Sidebar />
        <Dashboard />
      </div>

      <Footer />
    </div>
  );
}

export default App;