import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import UserUi from "./layouts/UserUi.jsx";
import ExploreHotels from "./pages/ExploreHotels.jsx";
import UserProfileLayout from "./layouts/UserProfileLayout.jsx";
import MyBookings from "./pages/UserProfile/MyBookings.jsx";
import BookingConfirmation from "./pages/BookingConfirmation.jsx";
import Contact from "./pages/Contact.jsx";

import AccountSettings from "./pages/UserProfile/AccountSettings.jsx";
import Notifications from "./pages/UserProfile/Notifications.jsx";
import Wishlists from "./pages/UserProfile/Wishlists.jsx";
import ProfileDashboard from "./pages/UserProfile/ProfileDashboard.jsx";
import FAQ from "./pages/FAQ.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";
import PrivateRoutes from "./auth/PrivateRoutes.jsx";
import AdminLayout from "./layouts/admin/AdminLayout.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";

import ManageBookings from "./pages/admin/ManageBookings.jsx";
import FinancialDashboard from "./pages/admin/FinancialDashboard.jsx";
import ManageReviews from "./pages/admin/ManageReviews.jsx";
import About from "./pages/About.jsx";

import RoomManagement from "./layouts/admin/RoomManagement.jsx";
import Settings from "./pages/admin/Settings.jsx";

import Login from "./auth/Login.jsx";

import HomeDetails from "./pages/HomeDetails.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* User-Related Routes */}
      <Route path="/" element={<UserUi />}>
        {/* Home Page */}
        <Route index element={<App />} />

        {/* Explore Hotels Page (with filters) */}
        <Route path="explore" element={<ExploreHotels />} />
        <Route path="home-details/:homeId" element={<HomeDetails />} />

        {/* Auth Routes */}
        <Route path="login" element={<Login />} />

        {/* Booking Confirmation Page */}
        <Route
          path="booking/confirmation/:bookingId"
          element={<BookingConfirmation />}
        />

        {/* User Account Pages */}
        <Route path="profile" element={<UserProfileLayout />}>
          <Route index element={<ProfileDashboard />} />
          <Route path="bookings" element={<MyBookings />} />
          <Route path="wishlists" element={<Wishlists />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<AccountSettings />} />
        </Route>

        {/* General Pages */}
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
        <Route path="terms" element={<TermsConditions />} />
      </Route>

      {/* Admin-Related Routes */}
      <Route element={<PrivateRoutes />}>
        <Route path="admin" element={<AdminLayout />}>
          {/* Admin Dashboard */}
          <Route index element={<AdminDashboard />} />

          {/* Room Management */}
          <Route path="homes" element={<RoomManagement />} />

          {/* Booking Management */}
          <Route path="bookings" element={<ManageBookings />} />

          {/* Financial Dashboard */}
          <Route path="finances" element={<FinancialDashboard />} />

          {/* Review Management */}
          <Route path="reviews" element={<ManageReviews />} />

          {/* settings */}
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
