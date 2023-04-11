
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

let links = [
  { name: "Home", link: "/", subMenu: [{ name: "Home 1", link: "/" }, { name: "Home 2", link: "/" }] },
  { name: "Service", link: "/service", subMenu: [{ name: "Service 1", link: "/service" }, { name: "Service 2", link: "/service-two" }, { name: "Single Project", link: "/" }] },
  { name: "Works", link: "/"},
  { name: "About", link: "/" },
  { name: "Blog", link: "/" },
  { name: "Contact", link: "/" },
];


export default function Nav(props) {


  let [open, setOpen] = useState(false);
  // let [search, setSearch] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [open])

    return(
        <div className="fixed left-0 w-full z-50">
          <nav className="flex items-center font-medium justify-between w-full text-[#ffffff] py-4 px-7 md:px-20 ">
            <div className="font-bold text-2xl font-[poppins]">
              <p>Logo</p>
            </div>
            <ul
            className="hidden lg:flex gap-4 items-center"
              // className="md:flex md:items-center top-20 md:top-0  md:pb-0 pb-12 absolute md:static bg-black md:bg-transparent md:z-auto z-[-1] w-full md:w-auto left-0 md:pl-0 pl-7 transition-all duration-500 ease-in "
            >
              {links.map((data) => (
                <li
                  key={data.name}
                  className="md:ml-8 md:text-xl md:my-0 my-4 left-0"
                >
                  {data?.subMenu ? (
                    <div className="relative group">
                      <p className="text-white-800 hover:text-green-400 duration-500 hover:underline hover:underline-offset-[14px] py-4">{data.name}</p>
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
                      className="text-white-800 hover:text-green-400 duration-500 hover:underline hover:underline-offset-[14px] py-4"
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
            <div
              className="text-3xl absolute top-6 right-8 cursor-pointer md:hidden"
              onClick={() => setOpen(!open)}
            >
              <ion-icon name={open ? "close-outline" : "grid-outline"}></ion-icon>
            </div>
          </nav>
          <SideMenu isOpen={open} setOpen={setOpen}/>
        </div>
    );
}

function SideMenu({isOpen, setOpen}){
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])
  return(
    <div className={`${isOpen ? 'translate-x-0': '-translate-x-full'} block lg:hidden h-screen z-50 transition duration-500`}>
      <ul className="block lg:hidden absolute top-0 left-0 p-12 h-full w-full bg-black text-white">
        {links.map((link) =>
          <li key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}