import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Solutions } from "./components/Solutions/Solutions";
import { Products } from "./components/Products/Products";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Epoxy } from "./components/Epoxy/Epoxy" 
import { Contact } from "./components/Contact/Contact";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";

import { EpoxyPage } from "./pages/EpoxyPage/EpoxyPage";


import "./App.css";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Products />
        <Epoxy />
        <Solutions />
        <About />
        <Contact />
      </main>
    </>
  );
}


function App() {
  return (
    <BrowserRouter basename="/redesign">
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/pisos-epoxicos"
          element={
            <>
              <Header />
              <EpoxyPage />
            </>
          }
        />

        <Route
          path="/catalogo"
          element={
            <>
              <Header />
              <CatalogPage />
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;