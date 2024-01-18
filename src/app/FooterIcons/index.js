"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { FaVideo } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import Link from "next/link";

const headerItems = [
    {
      icon:<FaHome/>,
      href:"/home",
      iconName:"name"
    },
    {
      icon:<FiPlusCircle/>,
      href:"/home",
      iconName:"name"
    },{
      icon:<FaVideo/>,
      href:"/home",
      iconName:"name"
    }
  ]


const FooterIcons = () => {
  const router = useRouter()
  const setUserLogout = () => {
    localStorage.removeItem("userToken")
    router.push("/")
  }
  const [footerSlider , openFooterSlider] = useState(false)
  return (
    <>
    <div className="header-icons space-x-4 items-center justify-around flex md:hidden fixed bg-white py-2 bottom-0 w-full">
        {
          headerItems.map((item,index)=>{
           return(
            <Link href={item.href} key={index} className="text-2xl">{item.icon}</Link>
           )
          })
        }
        <IoPersonCircle className="text-2xl cursor-pointer" onClick={()=>{
          footerSlider === true ? openFooterSlider(false) : openFooterSlider(true)
        }}/>
      </div>
      {footerSlider === true && <div className="fixed bottom-10 border-t-2 w-full bg-white flex flex-col space-y-3 py-2 ">
        <button>Switch Account</button>
        <button>Setting</button>
        <button>Profile</button>
        <button className="text-red-500" onClick={setUserLogout}>Logout</button>
      </div>}
      
      </>
  )
}

export default FooterIcons