"use client"
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { FaVideo } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";

const headerItems = [
  {
    icon: <FaHome />,
    href: "/",
    iconName: "name",
  },
  {
    icon: <FiPlusCircle />,
    href: "/home",
    iconName: "name",
  },
  {
    icon: <FaVideo />,
    href: "/home",
    iconName: "name",
  },
  {
    icon: <FaRegHeart />,
    href: "/home",
    iconName: "name",
  },
  {
    icon: <AiFillMessage />,
    href: "/MessagePage",
    iconName: "name",
  },
  {
    icon: <IoPersonCircle />,
    href: "/home",
    iconName: "name",
  },
];

const Index = ({props}) => {
  const router = useRouter()
  const setUserLogout = () => {
    localStorage.removeItem("userToken")
    router.push("/")
  }
  return (
    <div className="bg-pink-50 shadow flex justify-center items-center fixed top-0 w-full z-50">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <div className="logo text-2xl tracking-widest pl-2">GupShup</div>
          <div className="header-icons space-x-4 items-center justify-center flex md:hidden pr-2">
                <Link href="/" className="text-2xl hover:text-pink-300">
                  <FaRegHeart/>
                </Link>
                <Link href="/MessagePage" className="text-2xl hover:text-pink-300">
                  <AiFillMessage/>
                </Link>
          </div>
          <div className="hidden items-center justify-center space-x-2  ring-1 ring-offset-2 ring-pink-400 rounded-md w-[150px] md:w-auto md:flex">
            <label htmlFor="password" className="text-gray-600 font-semibold">
              <CiSearch className="text-xl text-pink-950" />
            </label>
            <input
              name="Search"
              id="Search"
              type="text"
              placeholder="Search..."
              className="p-1 outline-none placeholder:text-sm  focus:bg-white hover:bg-white placeholder:text-gray-400 focus:placeholder:text-transparent hover:placeholder:text-transparent w-full"
            ></input>
          </div>
          <div className="header-icons space-x-4 items-center justify-center hidden md:flex">
            {headerItems.map((item, index) => {
              return (
                <Link href={item.href} key={index} className="text-2xl hover:text-pink-300">
                  {item.icon}
                </Link>
              );
            })}
            <button className=" bg-pink-400 text-white px-4 py-2 rounded-md font-semibold transform transition hover:bg-white hover:text-pink-400 disabled:bg-pink-300 hover:scale-95" onClick={setUserLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
