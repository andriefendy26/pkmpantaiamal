import Layout from "@/Layout";
import Galeri from "@/Pages/Galeri";
import Beranda from "@/Pages/Home";
import PortalSistemInformasi from "@/Pages/Portal";
import ProfilPuskesmas from "@/Pages/Profil";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children : [
        {
            path: "/",
            element: <Beranda/>
        },
        {
            path: "/profil",
            element: <ProfilPuskesmas/>
        },
        {
            path: "/portal",
            element: <PortalSistemInformasi/>
        },
        {
            path: "/galeri",
            element: <Galeri/>
        },
        {
            path: "/kontak",
            element: <div>Welcome to kontak Page</div>
        },
    ]
},
]);

export default router;
