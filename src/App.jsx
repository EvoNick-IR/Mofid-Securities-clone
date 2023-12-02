import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import ChatIcon from "./components/chatIcon";

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
