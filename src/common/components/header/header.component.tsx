import { FC } from "react";
import { Skeleton } from "../skeleton/skeleton.component";
import { Categories } from "@app/core/types";
import { Button } from "../button/button.component";
import { UserDropdown } from "@app/modules/auth/components/user-dropdown/user-dropdown.component";
import { Link, useLocation } from "react-router-dom";
import { HeaderCategpryLink } from "../link/link.component";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInReactive } from "@app/modules/auth/store/reactive-vars";
import { ReactComponent as ShoppingCartSolidIcon } from "@app/assets/icons/shopping-cart-solid.svg";
import { toggleCart } from "@app/modules/cart/store/cart-opened-state";

interface HeaderProps {
  isLoading?: boolean;
  categories?: Omit<Categories, "menu_items" | "menu_items_aggregate">[];
}

export const Header: FC<HeaderProps> = ({ isLoading, categories }) => {
  const isLoggedIn = useReactiveVar(isLoggedInReactive);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="h-12 shadow px-6 mb-12 fixed w-full z-20 bg-white flex justify-between items-center">
      <div className="flex items-center h-full gap-3">
        <Link to="/" className="text-xl font-semibold">
          🍕MyPizza
        </Link>

        {isLoading ? (
          <>
            <div className="h-6 w-px bg-gray-200"></div>
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
            <Skeleton width={34} height={19} />
          </>
        ) : (
          <>
            {isHomePage && (
              <>
                <div className="h-6 w-px bg-gray-200"></div>
                {categories?.map((category) => (
                  <HeaderCategpryLink
                    url={`#${category.slug}`}
                    key={`header-category${category.id}`}
                  >
                    {category.title}
                  </HeaderCategpryLink>
                ))}
              </>
            )}
          </>
        )}
      </div>

      <div className="flex items-centerv gap-3">
        <div>
          <button onClick={toggleCart}>
            <ShoppingCartSolidIcon className="w-6 h-6 fill-gray-900" />
          </button>
        </div>

        {isLoggedIn ? (
          <UserDropdown />
        ) : (
          !isLoginPage && (
            <Link to="/login">
              <Button size="sm">Ввійти</Button>
            </Link>
          )
        )}
      </div>
    </div>
  );
};
