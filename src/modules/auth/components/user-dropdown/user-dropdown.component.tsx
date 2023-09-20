import { ReactComponent as UserSolidIcon } from "@app/assets/icons/user-solid.svg";
import { FC, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { UserDropdownLink } from "../user-dropdown-link/user-dropdown-link.component";
import { useOnClickOutside } from "@app/common/hooks/use-on-click-outside.hook";
import { isLoggedInReactive } from "../../store/reactive-vars";

interface UserDropdownProps {}

export const UserDropdown: FC<UserDropdownProps> = () => {
  const [isDrowpdownOpen, setIsDrowpdownOpen] = useState(false);
  const toggleDropdownState = () => setIsDrowpdownOpen((v) => !v);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    if (!isDrowpdownOpen) {
      return;
    }
    toggleDropdownState();
  });

  const logout = () => {
    toggleDropdownState();
    localStorage.removeItem("jwt");
    isLoggedInReactive(false);
  };

  return (
    <div className="relative h-6" ref={ref}>
      <button onClick={toggleDropdownState}>
        <UserSolidIcon className="w-6 h-6 fill-gray-900" />
      </button>
      {isDrowpdownOpen && (
        <div className="absolute right-0 top-7.5 bg-white border border-gray-200 shadow-lg rounded-md py-1.5 w-48">
          <UserDropdownLink onClick={toggleDropdownState} to="/profile">
            Ваш профіль
          </UserDropdownLink>
          <UserDropdownLink onClick={logout}>Вийти</UserDropdownLink>
        </div>
      )}
    </div>
  );
};
