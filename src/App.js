import HomePage from "./components/pages/Home/HomePage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogDetails from "./components/pages/Blogs/BlogDetails";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Signup/Signup";
import AuthProvider from "./context/AuthProvider";
import PostBlog from "./components/pages/PostBlog/PostBlog";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "./components/pages/Admin/Dashboard";
import DashboardHome from "./components/pages/Admin/DashboardHome";
import AllBlogs from "./components/pages/Admin/AllBlogs";
import PostAdminBlog from "./components/pages/Admin/PostAdminBlog";
import MakeAdmin from "./components/pages/Admin/MakeAdmin";
import AdminRoute from "./PrivateRoute/AdminRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/post" element={<PrivateRoute><PostBlog /></PrivateRoute>} />
            <Route path="/admin" element={<AdminRoute> <Dashboard /> </AdminRoute>}>
              <Route exact path="/admin/dashboard" element={<DashboardHome />}></Route>
              <Route exact path="/admin/allblogs" element={<AllBlogs />}></Route>
              <Route exact path="/admin/postblog" element={<PostAdminBlog />}></Route>
              <Route exact path="/admin/makeadmin" element={<MakeAdmin />}></Route>

            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/blogs/:blogId" element={<PrivateRoute><BlogDetails /></PrivateRoute>} />

            <Route path="*" element={<main style={{ padding: "3rem", fontSize: "30px", fontWeight: "700" }}><p>404 Nothing Found</p></main>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
