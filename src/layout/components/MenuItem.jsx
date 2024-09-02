/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MenuItem = ({ itemName, itemLink, Icon, iconUnderline }) => {
  return (
    <li className="group/item">
      <Link
        to={itemLink}
        className="flex items-center gap-2 px-3 py-4 font-bold xl:px-[1.125rem] xl:py-4"
      >
        <div className={`${iconUnderline ? "before:hover-underline" : ""} before:-bottom-2 xl:before:hidden relative`}>
          <Icon className="size-6 xl:size-5" />
        </div>
        <span className="before:hover-underline relative inline-block py-3 leading-4 md:hidden xl:inline-block">
          {itemName}
        </span>
      </Link>
    </li>
  );
};

export default MenuItem;
