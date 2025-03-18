import { BrowserRouter, Route, Routes } from "react-router-dom";
import Component01 from "./pages/component01/Component01";
import HomePage from "./pages/home/HomePage";
import MainLayout from './layout/MainLayout';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
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