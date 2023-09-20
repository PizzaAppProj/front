import { useGetMenuQuery, useGetSettingsQuery } from "@app/core/types";
import { MenuListLoading } from "../components/menu-item-list-loading/menu-item-list-loading.component";
import { ShowInfo } from "@app/common/components/show-info/show-info.component";
import { MenuCategory } from "../components/menu-category/menu-category.component";
import { Helmet } from "react-helmet";

export const MenuPage = () => {
  const { data, loading, error } = useGetMenuQuery();
  const { loading: loadingSettings } = useGetSettingsQuery();

  if (error) {
    return (
      <ShowInfo type="error">
        <p>Упс, спалася помилка</p>
        <p>Спробуйте трохи пізніше</p>
      </ShowInfo>
    );
  }
  if (loading || loadingSettings) {
    return <MenuListLoading items={9} />;
  }
  if (!data) {
    return (
      <ShowInfo type="info">
        <p>Нажаль меню пусте</p>
      </ShowInfo>
    );
  }
  return (
    <>
      <Helmet>
        <title>Меню</title>
      </Helmet>
      <div className="flex flex-col gap-12">
        {data.categories.map((category) => (
          <MenuCategory data={category} key={`menu-page${category.id}`} />
        ))}
      </div>
    </>
  );
};
