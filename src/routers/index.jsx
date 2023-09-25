import { Routes,Route } from "react-router-dom";

import ProtectedRoute from "./protected-route";
import PrivateRoute from "./private-route";

import LoginPage from "../pages/login-page";
import DashboardPage from "../pages/dashboard-page";
import AdministratorPage from "../pages/administrator-page";
import ProfilePage from "../pages/profile-page";
import KategoriKamarPage from "../pages/kategori-kamar-page";
import LantaiKamarPage from "../pages/lantai-kamar-page";
import ListKamarPage from "../pages/list-kamar-page";
import PesanKamarPage from "../pages/pesan-kamar-page";
import CheckinKamarPage from "../pages/checkin-kamar-page";
import CheckoutKamarpage from "../pages/checkout-kamar-page";
import LaporanPage from "../pages/laporan-page";

export default function Router(){
    return(
        <Routes>
            <Route>
                <Route path="/" element={<ProtectedRoute />}>
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route path="/" element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/administrator" element={<AdministratorPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="/kategori-kamar" element={<KategoriKamarPage />} />
                    <Route path="/lantai-kamar" element={<LantaiKamarPage />} />
                    <Route path="list-kamar" element={<ListKamarPage />} />
                    <Route path="/pesan-kamar" element={<PesanKamarPage />} />
                    <Route path="/checkin-kamar" element={<CheckinKamarPage />} />
                    <Route path="/checkout-kamar" element={<CheckoutKamarpage />} />
                    <Route path="laporan" element={<LaporanPage />} />
                </Route>
            </Route>
        </Routes>
    )
}