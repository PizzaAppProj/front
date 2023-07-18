import { Footer } from "./common/commonts/footer/footer.components";
import { Header } from "./common/commonts/header/header.component";
import { MenuList } from "./modules/menu/components/menu-list/menu-list.component";
import pizzaMenu from "@app/mocks/pizza.json";

export const App = () => {
  return (
    <div>
      <Header />
      <div className="mx-12 mb-24">
        <MenuList items={pizzaMenu} />
      </div>
      <Footer />
    </div>
  );
};
