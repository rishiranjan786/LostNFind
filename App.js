// import Root from './component/Rootpage';
// import Layout from './component/Layouts/Layout';
import Home from './component/Pages/Home';
// import Navbar from './component/Layouts/Navbar';
// import Footer from './component/Layouts/Foot';
// import Signup from './component/Signup';
import Login from './component/Login';
import AddProduct from './component/AddProduct';
// import ProductList from './component/ProductList';
import UpdateProduct from './component/UpdateProduct';
import About from './component/Pages/About';
// import Profile from './component/Profile';
import UpdateProfile from './component/UpdateProfile';
import UpdateGallary from './component/UpdateGallary';
import Contact from './component/Pages/Contact';
import Policy from './component/Pages/Privacy';
import Forget from './component/Forget';
import AdminDashboard from './component/AdminPage/AdminDashboard';
import Alluser from './component/AdminPage/Alluser';
import Createcat from './component/AdminPage/Createcategory';
import Createpro from './component/AdminPage/Createproduct';
import Createproduct from './component/UserPage/Createproduct';
import UserDashboard from './component/UserPage/UserDashboard';
import Profile from './component/Profile';
import UserProduct from './component/UserPage/UserProduct';
import AdminProduct from './component/AdminPage/AdminProduct';
import AdminProductList from './component/AdminPage/AdminProductList';
import UserProductList from './component/UserPage/UserProductList';
import PageNotfound from './component/Pages/PageNotfound';
import UserDetails from './component/Pages/UserDetails';
import UpdateCat from './component/UpdateCategory';
import ProductDetails from './component/Pages/ProductDetails';
import Selectcat from './component/Pages/Selectcat';
// import Slide from './component/Slider'
// import ProDetail from './component/ProDetail';

import Gadgets from './component/Pages/Gadgets';
import Documents from './component/Pages/Documents';
import Human from './component/Pages/Human';
import Blood from './component/Pages/Blood';
import Others from './component/Pages/Others';
import Khoya from './component/Pages/Khoya';
import Paya from './component/Pages/Paya';
import Finded from './component/Pages/Finded';

import PrivateComponent from './component/PrivateComponent';
import './App.css';
// import './component/css/LoginStyle.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route element={<PrivateComponent />} >
            {/* <Route path='/home' element={<Home />} /> */}
            {/* <Route path='/productlist' element={<ProductList />} /> */}
            <Route path='/add' element={<AddProduct />} />
            <Route path='/update/:id' element={<UpdateProduct />} />
            <Route path='/logout' element={<h1>Logout component</h1>} />
            <Route path='/profile/:id' element={<Profile />} />
            <Route path='/updatecategory/:id' element={<UpdateCat />} />
            <Route path='/updateprofile/:id' element={<UpdateProfile />} />
            <Route path='/updategallary/:id' element={<UpdateGallary />} />
            {/* <Route path='/productuser/:id' element={<ProductUser />} /> */}

            {/* <Route path='/admindashboard/:id' element={<AdminDashboard />} ></Route> */}
            <Route path='/admindashboard' element={<AdminDashboard />} />
            <Route path='/admindashboard/alluser' element={<Alluser />} />
            <Route path='/admindashboard/createcat' element={<Createcat />} />
            <Route path='/admindashboard/createpro' element={<Createpro />} />
            <Route path='/admindashboard/productlist' element={<AdminProductList />} />
            <Route path='/admindashboard/adminproduct/:id' element={<AdminProduct />} />

            <Route path='/userdashboard/:id' element={<UserDashboard />} ></Route>
            <Route path='/userdashboard/profile' element={<Profile />} />
            <Route path='/userdashboard/createproduct' element={<Createproduct />} />
            <Route path='/userdashboard/allproductlist' element={<UserProductList />} />
            <Route path='/userdashboard/userproduct/:id' element={<UserProduct />} />
            <Route path='*' element={<PageNotfound />} />
          </Route>
          {/* <Route path='/' element={<Root />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/policy' element={<Policy />} />
          {/* <Route exact path= '/signup' element={<Signup />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/forget' element={<Forget />} />
          <Route path='/userdetails/:id' element={<UserDetails />} />
          <Route path='/productdetails/:id' element={<ProductDetails />} />
          <Route path='/selectcat' element={<Selectcat />} />

          <Route path='/home/gadgets' element={<Gadgets />} />
          <Route path='/home/documents' element={<Documents />} />
          <Route path='/home/human' element={<Human />} />
          <Route path='/home/blood' element={<Blood />} />
          <Route path='/home/others' element={<Others />} />
          <Route path='/home/khoya' element={<Khoya />} />
          <Route path='/home/paya' element={<Paya />} />
          <Route path='/home/finded' element={<Finded />} />

          {/* <Route path='/prodetail/:id' element={<ProDetail />} /> */}


          {/* <Route exact path= '/about' element={<About />} /> */}
          {/* <Route exact path= '/contact' element={<Contact />} /> */}
          {/* <Route exact path= '/policy' element={<Policy />} /> */}
          {/* <Route exact path= '/footer' element={<Foot />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
