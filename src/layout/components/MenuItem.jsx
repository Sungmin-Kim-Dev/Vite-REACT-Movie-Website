/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const MenuItem = ({ itemName, itemLink, Icon }) => {
  const { t } = useTranslation();
  return (
    <li className="group/item first:hidden xs:first:block">
      <NavLink
        to={itemLink}
        className="menu-link flex items-center gap-2 px-2 py-4 font-bold xs:px-3 xl:px-4 xl:py-4"
      >
        <div className="before:hover-underline menu-icon relative before:-bottom-2 xl:before:hidden">
          <Icon className="size-6 xl:size-5" />
        </div>
        <span className="before:hover-underline menu-text relative hidden py-3 leading-4 xl:inline-block">
          {t(`${itemName}`)}
        </span>
      </NavLink>
    </li>
  );
};

export default MenuItem;
