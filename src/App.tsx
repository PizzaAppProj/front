import { Footer } from "./common/commonts/footer/footer.components";
import { Header } from "./common/commonts/header/header.component";
import { useGetCategoriesQuery } from "./core/types";

import { MenuPage } from "./modules/menu/pages/menu.page";

export const App = () => {
  const { data, loading } = useGetCategoriesQuery();

  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoading={loading} categories={data?.categories} />
      <div className="mx-12 mb-24 my-24">
        <MenuPage />
      </div>
      <Footer />
    </div>
  );
};
