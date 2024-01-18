import React from "react";
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
    },{
      icon:<FaRegHeart/>,
      href:"/home",
      iconName:"name"
    },{
      icon:<AiFillMessage/>,
      href:"/home",
      iconName:"name"
    },{
      icon:<IoPersonCircle/>,
      href:"/home",
      iconName:"name"
    },
  ]


const FooterIcons = () => {
  return (
    <div className="header-icons space-x-4 items-center justify-around flex md:hidden fixed bg-white py-2 bottom-0 w-full">
        {
          headerItems.map((item,index)=>{
           return(
            <Link href={item.href} key={index} className="text-2xl">{item.icon}</Link>
           )
          })
        }
      </div>
  )
}

export default FooterIcons