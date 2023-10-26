import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./protected-route";
import PrivateRoute from "./private-route";

import LoginPage from "../pages/login-page";
import DashboardPage from "../pages/dashboard-page";
import ProfilePage from "../pages/profile-page";
import ListKamarPage from "../pages/list-kamar-page";
import PesanKamarPage from "../pages/pesan-kamar-page";
import CheckinKamarPage from "../pages/checkin-kamar-page";
import CheckoutKamarpage from "../pages/checkout-kamar-page";
import LaporanPage from "../pages/laporan-page";
import AdministratorPage from "../Components/administrator/administrator-page";
import ProfilAdmin from "../Components/ProfilAdmin/ProfilAdmin";
import TambahKamarForm from "../pages/tambah-kamar";
import UpdateKamarForm from "../pages/update-kamar";
import DetailKamarForm from "../pages/detail-kamar";

import CategoryPage from "../pages/category-page";
import AddCategory from "../Components/category/add-category";
import DetailCategory from "../Components/category/detail-category";
import EditCategory from "../Components/category/edit-category";

export default function Router() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile-user" element={<ProfilAdmin />} />
          <Route path="/administrator" element={<AdministratorPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="/category-page" element={<CategoryPage />} />
          <Route path="/category-add" element={<AddCategory />} />
          <Route path="/category-detail" element={<DetailCategory />} />
          <Route path="/category-edit" element={<EditCategory />} />
          <Route path="/list-kamar" element={<ListKamarPage />} />
          <Route path="/tambah-kamar" element={<TambahKamarForm />} />
          <Route path="/update-kamar/:id" element={<UpdateKamarForm />} />
          <Route path="/detail-kamar/:id" element={<DetailKamarForm />} />
          <Route path="/pesan-kamar" element={<PesanKamarPage />} />
          <Route path="/checkin-kamar" element={<CheckinKamarPage />} />
          <Route path="/checkout-kamar" element={<CheckoutKamarpage />} />
          <Route path="laporan" element={<LaporanPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
