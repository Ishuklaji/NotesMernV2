import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import MyNotes from "./screens/MyNotes/MyNotes"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main >
        <Routes>
          <Route path="/" element={<LandingPage />} exact/>
          <Route path="/mynotes" element={<MyNotes />} />
          <Route path="/contac" element={<LandingPage />} />
        </Routes> 
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
