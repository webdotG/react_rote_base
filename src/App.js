import { Routes, Route } from "react-router-dom";

import { Home } from './pages/Homepage'
import { Blog } from './pages/Blogpage'
import { About } from './pages/Aboutpage'
import { Notfound } from './pages/Notfoundpage'
import { Layout } from "./components/Layout";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}  >
          <Route index path="/" element={<Home />} />
          <Route path="posts" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
