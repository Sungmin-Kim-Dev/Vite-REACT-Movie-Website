/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MenuItem = ({ itemName, itemLink, Icon, iconUnderline }) => {
  return (
    <li className="group/item xs:first:block first:hidden">
      <Link
        to={itemLink}
        className="flex items-center gap-2 px-2 xs:px-3 py-4 font-bold xl:px-4 xl:py-4"
      >
        <div
          className={`${iconUnderline ? "before:hover-underline" : ""} relative before:-bottom-2 xl:before:hidden`}
        >
          <Icon className="size-6 xl:size-5" />
        </div>
        <span className="before:hover-underline relative hidden py-3 leading-4 xl:inline-block">
          {itemName}
        </span>
      </Link>
    </li>
  );
};

export default MenuItem;
