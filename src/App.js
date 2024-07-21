import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Header from "./component/header";
import Aside from "./component/aside";
import Footer from "./component/footer";
import Kontrolside from "./component/kontrolside";
import Home from "./pages/home";
import Stok from "./pages/stok";
import Gudang from "./pages/gudang";
function App() {

useEffect(()=>{
  console.log(id)
})
const { id } = useParams();
  return (
    <>
    <div>
      {console.log(id)}
    </div>
      <BrowserRouter>
        <Header />
        <Aside />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stok" element={<Stok />} />
          <Route path="/gudang" element={<Gudang />} />
        </Routes>
        <Kontrolside />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
