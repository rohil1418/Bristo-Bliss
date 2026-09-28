import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Services from "./components/Services";
import Delivery from "./components/Delivery";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import BookTable from "./components/BookTable";
import MenuPage from "./components/MenuPage";
import BlogPage from "./components/BlogPage";
import NotFound from "./components/NotFound";

import Breakfast from "./pages/Breakfast";
import MainDishes from "./pages/MainDishes";
import Drinks from "./pages/Drinks";
import Desserts from "./pages/Desserts";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero />
              <Menu />
              <About />
              <Services />
              <Delivery />
              <Testimonials />
              <Blog />
            </>
          }
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/book-table" element={<BookTable />} />

        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/breakfast" element={<Breakfast />} />
        <Route path="/menu/main-dishes" element={<MainDishes />} />
        <Route path="/menu/drinks" element={<Drinks />} />
        <Route path="/menu/desserts" element={<Desserts />} />

        <Route path="/blog" element={<BlogPage />} />

        <Route path="/delivery" element={<Delivery />} />

        <Route path="/style-guide" element={<NotFound />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/licenses" element={<NotFound />} />
        <Route path="/changelog" element={<NotFound />} />
        <Route path="/password-protected" element={<NotFound />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;