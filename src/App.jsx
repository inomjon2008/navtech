import Faq from "./components/faq";
import Footer from "./components/Footer";
import Header from "./components/header";
import Hero from "./components/Hero";
import Jamoa from "./components/jamoa";
import Team from "./components/Team";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-950">
      <Header />

      <main>
        <Hero />
        <Team />
        <Jamoa />
        <Faq />
        <Footer />
      </main>
    </div>
  );
}

export default App;