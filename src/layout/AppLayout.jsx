import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { FiTv } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import MenuItem from "./components/MenuItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import background from "../assets/background.png";
import logo from "../assets/logo.png";

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

  // When page changes, the mobile popup menu disappears.
  // When page changes, scrolls to the top.
  const { pathname } = useLocation();
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, [pathname]);

  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchByKeyword = (event) => {
    event.preventDefault();
    // change API URL with keywords
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };

  return (
    <div
      className="min-h-dvh select-none bg-black text-neutral-50"
      style={{ background: `url(${background}) 50%/cover no-repeat fixed` }}
    >
      <header className="sticky top-0 z-10 bg-black">
        <div className="after:after-gradient flex h-[4.5rem] items-center px-5 md:px-9">
          <h1>
            <Link
              to="/"
              className="mr-2 block h-[2.375rem] w-[4.25rem] xs:mr-8 md:h-12 md:w-[5.375rem]"
            >
              <img src={logo} alt="Logo" className="size-full" />
            </Link>
          </h1>
          <nav className="mr-auto">
            <ul className="flex">
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
          </nav>
          <form
            className="hidden max-w-sm items-center space-x-2 md:flex"
            onSubmit={searchByKeyword}
          >
            <Input
              type="search"
              placeholder="Search"
              className="text-xl text-slate-900"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
            />
            <Button type="submit" className="bg-sky-500 hover:bg-sky-700">
              Search
            </Button>
          </form>
        </div>
      </header>
      <main className="pb-14">
        <Outlet />
      </main>
      <footer className="global-px bg-black pb-8">
        <Link to="/" className="mx-auto block w-[4.25rem] py-4 md:w-[5.375rem]">
          <img src={logo} alt="Logo" className="size-full" />
        </Link>
        <div className="f-text-box">
          <p className="text-lg">
            This is a demo website for my REACT Project.
          </p>
          <p className="text-lg">This website is created with:</p>
          <p className="pl-2 text-lg">
            Vite, REACT, Tailwind CSS, shadcn/UI, REACT Router, TanStack Query,
            Axios, TMDB API, react-i18next
          </p>
          <div className="link-box flex flex-wrap items-center gap-x-10 gap-y-4 pt-4">
            <a
              href="https://github.com/Sungmin-Kim-Dev/Vite-REACT-Movie-Website"
              className="flex items-center gap-2 hover:underline"
            >
              <FaGithub className="size-6" />
              <span className="text-lg">Github Repository</span>
            </a>
            <a
              href="mailto: dreamerk24dev@gmail.com"
              className="flex items-center gap-2 text-lg hover:underline"
            >
              <MdOutlineEmail className='size-6'/>
              dreamerk24dev@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
