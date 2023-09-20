import { Route, Routes } from "react-router-dom";
import { Footer } from "./common/components/footer/footer.components";
import { Header } from "./common/components/header/header.component";
import { useGetCategoriesQuery } from "./core/types";

import { MenuPage } from "./modules/menu/pages/menu.page";
import { LoginPage } from "./modules/auth/pages/login.page";
import { useEffect } from "react";
import { isLoggedInReactive } from "./modules/auth/store/reactive-vars";
import { ProfilePage } from "./modules/user/pages/profile.page";
import { PrivateRoute } from "./common/components/private-route/private-route.component";
import { CartSidebar } from "./modules/cart/components/cart-sidebar/cart-sidebar.component";

export const App = () => {
  const { data, loading } = useGetCategoriesQuery();
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    isLoggedInReactive(Boolean(token));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoading={loading} categories={data?.categories} />
      <CartSidebar
        items={[
          {
            image: "menu/menu-1691077891",
            title: "Піца барбекю",
            count: 1,
            price: 148,
          },
          {
            image: "menu/menu-1691077891",
            title: "Піца барбекю",
            count: 1,
            price: 148,
          },
        ]}
      />
      <div className="mx-12 mb-24 my-24">
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
