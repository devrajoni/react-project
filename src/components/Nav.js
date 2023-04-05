
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav(props) {

  let links = [
    { name: "Home", link: "/", subMenu: [{ name: "Home", link: "/" }] },
    { name: "Service", link: "/", subMenu: [{ name: "Home", link: "/" }] },
    { name: "Works", link: "/", subMenu: [{ name: "Home", link: "/" }]},
    { name: "About", link: "/", subMenu: [{ name: "Home", link: "/" }] },
    { name: "Blog", link: "/",subMenu: [{ name: "Home", link: "/" }] },
    { name: "Contact", link: "/", subMenu: [{ name: "Home", link: "/" }] },
  ];
  let [open, setOpen] = useState(false);
  // let [search, setSearch] = useState(false);
    return(
        <>
        <nav className="flex items-center font-medium justify-between w-full fixed left-0 text-[#ffffff] py-6 px-7 md:px-20 bg-black md:bg-transparent">
          <div className="font-bold text-2xl font-[poppins]">
            <p>Logo</p>
          </div>
          <div
            className="text-3xl absolute top-6 right-8 cursor-pointer md:hidden"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={open ? "close-outline" : "grid-outline"}></ion-icon>
          </div>
          <ul
            className="md:flex md:items-center top-20 md:top-0  md:pb-0 pb-12 absolute md:static bg-black md:bg-transparent md:z-auto z-[-1] w-full md:w-auto left-0 md:pl-0 pl-7 transition-all duration-500 ease-in "
          >
            {links.map((data) => (
              <li
                key={data.name}
                className="md:ml-8 md:text-xl md:my-0 my-4 left-0"
              >
                {data?.subMenu ? (
                  <div className="relative group">
                    <p>{data.name}</p>
                    <ul className="absolute translate-y-12 invisible group-hover:translate-y-0 transition-transform duration-300 ease-in group-hover:visible bg-slate-900 w-56 p-4 rounded">
                      {data?.subMenu?.map((menu) => (
                        <li key={menu.name}>
                          <Link
                            to={menu.link}
                            className="text-white-800 text-base hover:ring-offset-4 hover:ring-b inline-block"
                          >
                            {menu.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    to={data.link}
                    className="text-white-800 hover:text-green-400 duration-500 hover:underline"
                  >
                    {data.name}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <div
                className="text-xl md:ml-8 md:my-0 md:opacity-100 opacity-0 " onClick={() => props.setSearch
                (true)}
              >
                <ion-icon name="search-outline"></ion-icon>
              </div>
            </li>
          </ul>
        </nav>
        </>
    );
}