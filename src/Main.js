import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Component01 from "./pages/component01/Component01";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/deepDive">
          <Route index element={<div>DeepDive</div>} />
          <Route path="250318" element={<Component01 />} />
        </Route>
        <Route path="/*" element={<div><strong>404</strong> 없는페이지입니다.</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;