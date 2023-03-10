import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/:listType/:id" element={<Home />}></Route>
        <Route path="/home/banner/:id" element={<Home />}></Route>
        <Route path="/tv" element={<Tv />} />
        <Route path="/tv/:listType/:id" element={<Tv />}></Route>
        <Route path="/tv/banner/:id" element={<Tv />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/search/:menuName/:id" element={<Search />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
