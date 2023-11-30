import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
