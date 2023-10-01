import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from '../Components/main/Layout';
import Home from '../pages/Home'
import Pricing from '../pages/Pricing'
import Product from '../pages/Products/Product'
import Services from '../pages/Services'
import About from '../pages/About';
import LostAndFound from '../pages/lostandfound/LostAndFound';
import ProductDetails from '../pages/Products/Product-details';
import MircochipVsBiotectPet from '../pages/Products/Mircochip-Vs-BiotectPet';
import ReportPet from "../pages/lostandfound/ReportPet";
import CutePetContest from "../pages/CutePetContest";
import Login from '../pages/Login';
import PetConcierge from '../pages/PetConcierge';
import CDCParticipant from '../pages/CDCParticipant';
import PetWellnessPlan from '../pages/PetWellnessPlan';
import CuteDog from '../Components/cutedogprofile/CuteDog';
import NewsAndEvents from '../pages/newsandevents/NewsAndEvents';
import TermAndCondition from '../pages/tremandcondition/TermAndCondition';
import Contact from '../pages/contact/Contact';
import PrivacyPolicy from '../pages/privacypolicy/PrivacyPolicy';
import Blog from '../pages/Blog';
import VitalDocumentScreen from '../pages/vitaldocument/vital-document';
import Registration from '../pages/auth/Registration';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import FavProducts from '../pages/FavProducts';
import AdminLayout from '../pages/AdminLayout';
import AdminHomeScreen from '../Components/AdminHome/AdminHomeScreen';
import AddProducts from '../pages/AddProducts';
import AddBrand from '../pages/AddBrand';
import AddCategory from '../pages/AddCategory';
import CheckingApi from '../pages/CheckingApi';
import CreateProducts from '../pages/CreateProducts';
import ViewProducts from '../pages/ViewProducts';
import FormValidation from '../Components/AddProducts/FormValidation';
import EditProduct from "../pages/EditProduct";
import { useSelector } from 'react-redux';
import AllOrders from '../pages/AllOrders';
import OrderScreen from '../pages/OrderScreen';
import AdminSetting from '../pages/AdminSetting';
import Kanban from '../Components/Orders/Kanban';

const AppRouting = () => {

  const { token, user } = useSelector((state) => state.auth)

  const checkToken = () => {

    if (token && token === "") {
      return true
    }
    else {
      return false
    }
  }

  useEffect(() => {
    console.log('user', user)
    checkToken()

  }, [token, user])



  const role = 'user'
  return (
    <>
      <BrowserRouter>
        <>
          {!user ? <>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/login' element={<Login />} />
                <Route path='/product' element={<Product />} />
                <Route path='/product-details/:id' element={<ProductDetails />} />
              </Route>
            </Routes>
          </> : <>
            {
              user?.user_type == "user" ?
                <>
                  <Routes>
                    <Route path='/' element={<Layout />}>
                      <Route index element={<Home />} />
                      <Route path='/pricing' element={<Pricing />} />
                      <Route path='/product' element={<Product />} />
                      <Route path='/services' element={<Services />} />
                      <Route path='/about' element={<About />} />
                      <Route path='/lost-and-found-zone' element={<LostAndFound />} />

                      <Route path='/microchip-technology-vs-biotechPet' element={<MircochipVsBiotectPet />} />
                      <Route path='/report-lost-pet' element={<ReportPet />} />
                      <Route path='/cute-pet-content' element={<CutePetContest />} />
                      <Route path='/pet-concierge' element={<PetConcierge />} />
                      <Route path='/cdc-participate' element={<CDCParticipant />} />
                      <Route path='/pet-wellness-plan' element={<PetWellnessPlan />} />
                      <Route path='/cute-dog-profile' element={<CuteDog />} />
                      <Route path='/news-&-events' element={<NewsAndEvents />} />
                      <Route path='/terms-&-conditions' element={<TermAndCondition />} />
                      <Route path='/contact' element={<Contact />} />
                      <Route path='/privacypolicy' element={<PrivacyPolicy />} />
                      <Route path='/blog' element={<Blog />} />
                      <Route path='/vital-document' element={<VitalDocumentScreen />} />
                      <Route path='/cart' element={<Cart />} />
                      <Route path='/checkout' element={<Checkout />} />
                      <Route path='/favourite-products' element={<FavProducts />} />
                      <Route path='/product-details/:id' element={<ProductDetails />} />

                    </Route>
                  </Routes>

                </>
                :

                <>
                  <Routes>
                    <Route path='/' element={<AdminLayout />}>
                      <Route index element={<AdminHomeScreen />} />
                      <Route path='products' element={<AddProducts />} />
                      <Route path='add-products' element={<CreateProducts />} />
                      <Route path='add-brands' element={<AddBrand />} />
                      <Route path='add-category' element={<AddCategory />} />
                      <Route path='checking-api' element={<CheckingApi />} />
                      <Route path='view-product/:id' element={<ViewProducts />} />
                      <Route path='validation' element={<FormValidation />} />
                      <Route path='edit-product/:id' element={<EditProduct />} />
                      <Route path='orders' element={<AllOrders />} />
                      <Route path="/orders-detail/:id">
                        <Route path=":notificationId" element={<OrderScreen />} />
                        <Route path="" element={<OrderScreen />} />
                      </Route>
                      {/* <Route path='orders-detail/:id' element={<OrderScreen />} /> */}
                      <Route path='admin-setting' element={<AdminSetting />} />
                      <Route path='kanban' element={<Kanban />} />

                    </Route>
                  </Routes>

                </>
            }

          </>}
        </>




      </BrowserRouter>

    </>
  )
}

export default AppRouting