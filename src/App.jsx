import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import ChatIcon from "./components/chatIcon/ChatIcon";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <ChatIcon />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
