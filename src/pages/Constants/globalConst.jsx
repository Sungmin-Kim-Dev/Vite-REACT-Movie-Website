import { HiHome } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { FiTv } from "react-icons/fi";

export const menuItems = [
  {
    itemName: "Home",
    itemLink: "",
    Icon: HiHome,
  },
  {
    itemName: "Search",
    itemLink: "search",
    Icon: IoSearch,
  },
  {
    itemName: "WatchList",
    itemLink: "watchlist",
    Icon: FaPlus,
  },
  {
    itemName: "Movies",
    itemLink: "movies",
    Icon: BiCameraMovie,
  },
  {
    itemName: "Series",
    itemLink: "series",
    Icon: FiTv,
  },
];

export const languageList = [
  {
    languageName: "English",
    languageCode: "en",
    countryCode: "US",
  },
  {
    languageName: "English",
    languageCode: "en",
    countryCode: "GB",
  },
  {
    languageName: "English",
    languageCode: "en",
    countryCode: "AU",
  },
  {
    languageName: "Korean",
    languageCode: "ko",
    countryCode: "KR",
  },
];

export const tabList = ["RECOMMENDATIONS", "COLLECTION", "REVIEW"]