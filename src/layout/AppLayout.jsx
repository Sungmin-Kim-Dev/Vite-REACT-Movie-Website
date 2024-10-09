import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";
import MenuItem from "./components/MenuItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import background from "../assets/background.png";
import logo from "../assets/logo.png";
import { languageList, menuItems } from "@/pages/Constants/globalConst";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setCode } from "@/redux/slice/languageCodeSlice";
import { useLocalStorage } from "@uidotdev/usehooks";
import i18next from "i18next";

const AppLayout = () => {
  // When page changes, the mobile popup menu disappears.
  // When page changes, scrolls to the top.
  const { location } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLanguageMenu(false);
  }, [location]);

  const [, saveLanguageCode] = useLocalStorage("languageCode", "en-US");

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const setLanguageCode = (language, country) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(setCode({ language, country }));
    setLanguageMenu(false);
    navigate(`?language=${language}-${country}`);
    saveLanguageCode(`${language}-${country}`);
    i18next.changeLanguage(language);
    window.location.reload();
  };

  const [keyword, setKeyword] = useState("");
  const [languageMenu, setLanguageMenu] = useState(false);
  const navigate = useNavigate();
  const searchByKeyword = (event) => {
    event.preventDefault();
    // change API URL with keywords
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };

  return (
    <div
      className="flex min-h-dvh select-none flex-col bg-black text-neutral-50"
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
              placeholder={t("Keyword")}
              className="w-4/5 text-xl text-slate-900"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
            />
            <Button
              type="submit"
              className="bg-sky-500 text-lg hover:bg-sky-700"
            >
              {t("Search")}
            </Button>
          </form>
          <div className="language-btn relative ml-4">
            <button
              className="flex items-center gap-x-2 rounded-xl border p-3 text-2xl font-bold opacity-70 transition duration-300 hover:opacity-100 xl:text-xl"
              onClick={() => setLanguageMenu(!languageMenu)}
            >
              <BsGlobe2 />
              <span className="hidden xl:inline-block">{t("Language")}</span>
            </button>
            <ul
              className={`${languageMenu ? "block" : "hidden"} absolute right-0 top-full rounded-xl border border-neutral-400 border-opacity-40 bg-neutral-800/80 p-3`}
            >
              {languageList.map(
                ({ languageName, languageCode, countryCode }, i) => (
                  <li
                    key={i}
                    className="after:hover-underline relative mx-4 w-max cursor-pointer py-2 text-lg font-semibold hover:after:scale-x-100 hover:after:opacity-100"
                    onClick={() => setLanguageCode(languageCode, countryCode)}
                  >
                    {t(`${languageName}`)} ({countryCode})
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </header>
      <main className="pb-14">
        <Outlet />
      </main>
      <div className="flex-grow"></div>
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
              <MdOutlineEmail className="size-6" />
              dreamerk24dev@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
