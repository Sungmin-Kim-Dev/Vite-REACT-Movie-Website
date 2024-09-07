/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const MenuItem = ({ itemName, itemLink, Icon, iconUnderline }) => {
  const { t } = useTranslation();
  return (
    <li className="group/item first:hidden last:hidden xs:first:block">
      <Link
        to={itemLink}
        className="flex items-center gap-2 px-2 py-4 font-bold xs:px-3 xl:px-4 xl:py-4"
      >
        <div
          className={`${iconUnderline ? "before:hover-underline" : ""} relative before:-bottom-2 xl:before:hidden`}
        >
          <Icon className="size-6 xl:size-5" />
        </div>
        <span className="before:hover-underline relative hidden py-3 leading-4 xl:inline-block">
          {t(`${itemName}`)}
        </span>
      </Link>
    </li>
  );
};

export default MenuItem;
