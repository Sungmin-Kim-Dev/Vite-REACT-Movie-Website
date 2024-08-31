import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  const menuItems = {
    itemName: ["HOME", "SEARCH", "WATCH LIST", "MOVIES", "SERIES"],
    itemLink: ["", "search", "watchlist", "movies", "series"],
  };

  return (
    <div className="h-dvh bg-black text-white">
      <header className="flex items-center bg-slate-900">
        <h1 className="px-5">LOGO</h1>
        <nav>
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
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
