
import Footer from "./components/Footer";
import Header from "./components/header";
import Hero from "./components/Hero";
import Team from "./components/Team";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-950">
      <Header/>

      <main>
        <Hero />
        <Team/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;