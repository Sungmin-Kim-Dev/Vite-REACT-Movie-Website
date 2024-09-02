import { Link, Outlet } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { FiTv } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import MenuItem from "./components/MenuItem";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import background from "../assets/background.png";

const AppLayout = () => {
  const menuItems = [
    {
      itemName: "HOME",
      itemLink: "",
      Icon: HiHome,
    },
    {
      itemName: "SEARCH",
      itemLink: "search",
      Icon: IoSearch,
    },
    {
      itemName: "WATCH LIST",
      itemLink: "watchlist",
      Icon: FaPlus,
    },
    {
      itemName: "MOVIES",
      itemLink: "movies",
      Icon: BiCameraMovie,
    },
    {
      itemName: "SERIES",
      itemLink: "series",
      Icon: FiTv,
    },
  ];
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

  return (
    <div
      className="relative z-10 h-dvh bg-black text-slate-50"
      style={{ background: `url(${background}) 50%/cover no-repeat fixed` }}
    >
      <header className="after:after-gradient flex h-[4.5rem] items-center px-5 md:px-9">
        <h1>
          <Link
            to="/"
            className="mr-8 block h-[2.375rem] w-[4.25rem] bg-slate-300 px-5 md:h-12 md:w-[5.375rem]"
          >
            LOGO
          </Link>
        </h1>
        <nav className="mr-auto">
          <ul className="hidden md:flex">
            {menuItems.map(({ itemName, itemLink, Icon }) => (
              <MenuItem
                key={itemName}
                itemName={itemName}
                itemLink={itemLink}
                Icon={Icon}
                iconUnderline={true}
              />
            ))}
          </ul>

          {/* Mobile menu */}
          <ul className="flex md:hidden">
            {menuItems.map(
              ({ itemName, itemLink, Icon }, index) =>
                index < 3 && (
                  <MenuItem
                    key={itemName}
                    itemName=""
                    itemLink={itemLink}
                    Icon={Icon}
                    iconUnderline={true}
                  />
                ),
            )}
            <li className="group relative">
              <button
                className="flex items-center gap-2 px-3 py-4 font-bold xl:px-[1.125rem] xl:py-4"
                onClick={() => setMobileMenuToggle(!mobileMenuToggle)}
              >
                <BsThreeDotsVertical className="size-6 xl:size-5" />
              </button>
              <ul
                className={`${mobileMenuToggle ? "block" : "hidden"} absolute border border-neutral-500 border-opacity-35 py-2 pe-12 ps-4 group-hover:block`}
              >
                {menuItems.map(
                  ({ itemName, itemLink, Icon }, index) =>
                    index > 2 && (
                      <MenuItem
                        key={itemName}
                        itemName={itemName}
                        itemLink={itemLink}
                        Icon={Icon}
                        iconUnderline={false}
                      />
                    ),
                )}
              </ul>
            </li>
          </ul>
        </nav>
        <div className="hidden max-w-sm items-center space-x-2 md:flex">
          <Input type="text" placeholder="Search" />
          <Button type="submit" className="bg-sky-500 hover:bg-sky-700">
            Search
          </Button>
        </div>
      </header>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
