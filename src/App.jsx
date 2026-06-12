import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./assets/css/all.min.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/custom.css";
import "./assets/css/font.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/mousecursor.css";
import "./assets/css/swiper-bundle.min.css";

function App() {
  return (
    <BrowserRouter basename="/cyber">
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
