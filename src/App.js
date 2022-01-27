import HomePage from "./components/pages/Home/HomePage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogDetails from "./components/pages/Blogs/BlogDetails";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Signup/Signup";
import AuthProvider from "./context/AuthProvider";
import PostBlog from "./components/pages/PostBlog/PostBlog";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/post" element={<PostBlog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/blogs/:blogId" element={<BlogDetails />} />

            <Route path="*" element={<main style={{ padding: "3rem", fontSize: "30px", fontWeight: "700" }}><p>404 Nothing Found</p></main>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
