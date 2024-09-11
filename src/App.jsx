import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Order from "./pages/order/Order";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Signup from "./pages/registration/signup/Signup";
import Login from "./pages/registration/login/Login";
import Dashboard from "./pages/admin/Dashboard";
import MyState from "./context/data/myState";
import AddProduct from "./pages/admin/pages/AddProduct";
import EditProduct from "./pages/admin/pages/EditProduct";
import Cart from "./pages/cart/Cart";




function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          {/* Home Page route  */}
          <Route path="/" element={<Home />} />

          {/* Order Page Route  */}
          <Route path="/order" element={
            <ProtectedRouteForUser>
              <Order />
            </ProtectedRouteForUser>
          } />


          {/* Product Info Page Route [Dynamic Route] */}
          <Route path="/productInfo/:id" element={<ProductInfo />} />

          {/* Signup Route  */}
          <Route path="/signup" element={<Signup />} />

          {/* Login Route  */}
          <Route path="/login" element={<Login />} />

          {/* Login Route  */}
          <Route path="/cart" element={<Cart />} />

          {/* Admin Dashboard  */}
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          } />

          {/* Add Product  */}
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProduct />
            </ProtectedRouteForAdmin>
          } />


          {/* Edit Product  */}
          <Route path="/editproduct" element={
            <ProtectedRouteForAdmin>
              <EditProduct />
            </ProtectedRouteForAdmin>
          } />


          {/* NoPage Route */}
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </MyState>
  )
}

export default App

// Protected Route For Admin And User

// 1. Protected Route For User 
const ProtectedRouteForUser = ({ children }) => {
  const user = localStorage.getItem('user')
  if (user) {
    return children
  } else {
    return <Navigate to={'/login'} />
  }
}

// 2. Protected Route For Admin 
export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'))

  if (admin?.user?.email === 'admin@gmail.com') {
    return children
  }
  else {
    return <Navigate to={'/login'} />
  }

}