import { useGetMeDataQuery } from "@app/modules/auth/hooks/use-get-customer-data-query";
import { UpdateInfo } from "../components/update-info/update-info.component";
import { UpdateInfoLoading } from "../components/update-info-loading/update-info-loading.component";
import { UpdateInfoFormValues } from "../components/update-info/upadate-info.types";
import { useUpdateCustomerDataMutation } from "@app/core/types";

export const ProfilePage = () => {
  const { data, loading: ProfileDataLoading } = useGetMeDataQuery();

  const [updataCustomerData, { loading: isProfileUpdating }] =
    useUpdateCustomerDataMutation();

  const containerClasses = "max-w-5xl mx-auto";

  if (ProfileDataLoading) {
    return (
      <div className={containerClasses}>
        <UpdateInfoLoading />
      </div>
    );
  }

  const onSubmitCallback = async (values: UpdateInfoFormValues) => {
    await updataCustomerData({
      variables: {
        id: data?.id,
        name: values.name || data?.name,
        address: values.address || data?.address,
      },
    });
  };

  return (
    <div className={containerClasses}>
      <UpdateInfo
        initialValues={data}
        onSubmitCallback={onSubmitCallback}
        isUpdating={isProfileUpdating}
      />
    </div>
  );
};
