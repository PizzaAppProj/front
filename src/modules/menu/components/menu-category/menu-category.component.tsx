import { Categories } from "@app/core/types";
import { FC } from "react";
import { MenuList } from "../menu-list/menu-list.component";

interface MenuCategoryProps {
  data: Omit<Categories, "menu_items_aggregate">;
}

export const MenuCategory: FC<MenuCategoryProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-12" id={data.slug}>
      <div className="flex flex-col gap-1 items-center">
        <h2 className="relative after:content-[''] after:block after:absolute after:w-full text-2xl after:h-1 font-bold  after:bg-amber-400">
          {data.title}
        </h2>
      </div>
      <MenuList items={data.menu_items} />
    </div>
  );
};
