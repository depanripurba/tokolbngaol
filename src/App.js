import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Header from "./component/header";
import Aside from "./component/aside";
import Footer from "./component/footer";
import Kontrolside from "./component/kontrolside";
import Home from "./pages/home";
import Stok from "./pages/stok";
import Notfound from "./pages/404";
import Billing from "./pages/billing";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Aside />
        <Routes>
          <Route path="/" element={<Home aktif="dashboard" />} />
          <Route path="/stok" element={<Stok aktif="stok" />} />
          <Route path="/billing" element={<Billing aktif="billing"/>} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Kontrolside />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
