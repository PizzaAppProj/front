import { MenuItemLoading } from "../menu-item-loading/menu-item-loading.component";
import { FC } from "react";

interface MenuListLoding {
  items: number;
}

export const MenuListLoading: FC<MenuListLoding> = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {new Array(items).fill(1).map((v, index) => {
        return <MenuItemLoading key={`menu-loading-${index}`} />;
      })}
    </div>
  );
};
