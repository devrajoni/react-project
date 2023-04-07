import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Navbar({setSearch}) {
  let links = [
    { name: "Home", link: "/" },
    {
      name: "Service",
      link: "/",
      subMenu: [
        { name: "Demo1", link: "/" },
        { name: "Demo2", link: "/" },
        { name: "Demo3", link: "/" },
      ],
    },
    { name: "Works", link: "/" },
    { name: "About", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Contact", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <>
      <div className="header-section relative w-full bg-slate-900">
        <img
          src="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"
          className="w-full bg-cover h-full absolute mix-blend-overlay"
          alt="banner"
        />
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
            className={`md:flex md:items-center top-20 md:top-0  md:pb-0 pb-12 absolute md:static bg-black md:bg-transparent md:z-auto z-[-1] w-full md:w-auto left-0 md:pl-0 pl-7 transition-all duration-500 ease-in ${
              open ? "top-20 opacity-100" : "top-[-490] h-auto"
            } opacity-0 md:opacity-100`}
          >
            {links.map((data) => (
              <li
                key={data.name}
                className="md:ml-8 md:text-xl md:my-0 py-4 left-0"
              >
                {data?.subMenu ? (
                  <div className="relative group">
                    <p className="text-white-800 hover:text-green-400 duration-500 hover:underline hover:underline-offset-[14px] py-4">
                      {data.name}
                    </p>
                    <ul className="absolute translate-y-12 invisible group-hover:translate-y-0 transition-transform duration-300 ease-in group-hover:visible bg-slate-900 w-56 p-4 rounded">
                      {data?.subMenu?.map((menu) => (
                        <li key={menu.name}>
                          <Link
                            to={menu.link}
                            className="text-white-800 font-normal text-base hover:ring-offset-4 hover:ring-b inline-block"
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
                    className="text-white-800 hover:text-green-400 duration-500 hover:underline hover:underline-offset-[14px] py-4"
                  >
                    {data.name}
                  </Link>
                )}
              </li>
            ))}
            {/* <Link to="/">Home</Link> */}

            <li>
              <button onClick={ () => setSearch(true)}
                className="text-xl md:ml-8 md:my-0 md:opacity-100 opacity-0"
              >
                <ion-icon name="search-outline"></ion-icon>
              </button>
            </li>
          </ul>
        </nav>
        <div className="text-left py-60 text-white px-20 md:px-40">
          <h5 className="text-[#66FCF1] text-uppercase whitespace-pre-wrap pb-3">
            CREATIVE MIND, CREATIVE WORKS.
          </h5>
          <h1 className="font-bold text-4xl pb-10">We are digital agency.</h1>
          <Button />
        </div>
      </div>
    </>
  );
}
