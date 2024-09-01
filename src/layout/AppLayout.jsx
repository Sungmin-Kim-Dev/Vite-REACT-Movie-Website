import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AppLayout = () => {
  const menuItems = {
    itemName: ["HOME", "SEARCH", "WATCH LIST", "MOVIES", "SERIES"],
    itemLink: ["", "search", "watchlist", "movies", "series"],
  };

  return (
    <div className="h-dvh bg-black text-white">
      <header className="px-8 flex items-center bg-slate-900 sticky top-0 left-0">
        <h1 className="px-5">
          <Link to="/">LOGO</Link>
        </h1>
        <nav className="mr-auto">
          <ul className="flex">
            {menuItems.itemName.map((item, i) => (
              <li key={item}>
                <Link to={menuItems.itemLink[i]} className="block px-6 py-4">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Search" />
          <Button type="submit" className="bg-sky-500 hover:bg-sky-700">
            Search
          </Button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
