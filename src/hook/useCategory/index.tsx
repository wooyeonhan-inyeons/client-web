import React from "react";
import { CategoryItemProps } from "./interface";
import { CategoryButton } from "./style";
import { FilterState, WooyeonsCategory } from "../../interface";
import { useMutation } from "react-query";
import { PatchUser } from "../../api";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";

function CategoryItem({
  children,
  filter,
  setFilter,
  checked,
}: CategoryItemProps) {
  const [user] = useRecoilState(userState);

  const handleChecked = (id: WooyeonsCategory) => {
    mutateUser(id);
  };

  const { mutate: mutateUser } = useMutation(
    "updateCategory",
    (arg: string) =>
      PatchUser({
        name: user.name,
        message: "hello",
        category: filter.preferCategory,
        token: user.access_token,
      }),
    {
      onSuccess: (data, arg) => {
        // console.log(data);
        setFilter((prev: FilterState) => {
          let newCategory = prev.preferCategory;
          const index = newCategory.indexOf(arg as WooyeonsCategory);

          if (index === -1) {
            newCategory = [...newCategory, arg as WooyeonsCategory];
          } else if (index !== -1) {
            if (prev.preferCategory.length === 1)
              return {
                ...prev,
                preferCategory: newCategory,
              };
            newCategory = prev.preferCategory.filter(
              (item) => item !== (arg as WooyeonsCategory)
            );
          }
          return {
            ...prev,
            preferCategory: newCategory,
          };
        });
      },
    }
  );

  return (
    <CategoryButton
      variant={checked ? "contained" : "outlined"}
      onClick={() => handleChecked(children.id as WooyeonsCategory)}
      checked={checked}
    >
      {children.value}
    </CategoryButton>
  );
}

function useCategory() {
  return { CategoryItem };
}

export { useCategory };
