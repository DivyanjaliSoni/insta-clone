import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CiCamera } from "react-icons/ci";
import Link from "next/link";

const MessageList = [
  {
    name: "tapu_gada",
    lastMessage: "Sent a reel by chalchitraLal",
    image: "/images/users/user-1.jpg",
  },
  {
    name: "SonuBhide_00",
    lastMessage: "Hey",
    image: "/images/users/user-3.jpg",
  },
  {
    name: "Foodie Goli",
    lastMessage: "Bhai khane chale?",
    image: "/images/users/user-2.jpg",
  },
  {
    name: "Abdul Miya",
    lastMessage: "Kya chahiye",
    image: "/images/users/user-4.jpg",
  },
  {
    name: "Gogi Sodhi",
    lastMessage: "Liked a message",
    image: "/images/users/user-5.jpg",
  },
  {
    name: "pinku_0088",
    lastMessage: "Sent",
    image: "/images/users/user-6.jpg",
  },
  {
    name: "tapu_gada",
    lastMessage: "Sent a reel by chalchitraLal",
    image: "/images/users/user-1.jpg",
  },
  {
    name: "SonuBhide_00",
    lastMessage: "Hey",
    image: "/images/users/user-3.jpg",
  },
  {
    name: "Foodie Goli",
    lastMessage: "Bhai khane chale?",
    image: "/images/users/user-2.jpg",
  },
  {
    name: "Abdul Miya",
    lastMessage: "Kya chahiye",
    image: "/images/users/user-4.jpg",
  },
  {
    name: "Gogi Sodhi",
    lastMessage: "Liked a message",
    image: "/images/users/user-5.jpg",
  },
  {
    name: "pinku_0088",
    lastMessage: "Sent",
    image: "/images/users/user-6.jpg",
  },
];

const MessagePage = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-4 px-2  shadow">
        <div className="flex justify-center items-center space-x-4">
          <Link href="/Feed">
            <IoIosArrowBack className="text-2xl" />
          </Link>
          <p className="font-semibold">User name</p>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <RiVideoAddLine className="text-2xl" />
          <FaEdit className="text-2xl" />
        </div>
      </div>
      <div className="flex space-x-2 bg-gray-200 p-2 rounded-md m-2">
        <label>
          <IoIosSearch className="text-2xl" />
        </label>
        <input placeholder="Search" className="bg-transparent" />
      </div>
      <div className="flex p-2 justify-between m-2">
        <div>Message</div>
        <div className="text-pink-400">Requests</div>
      </div>
      <div className="m-2">
        {MessageList.map((list, index) => {
          return (
            <div className="flex p-2 justify-between items-center " key={index}>
              <Link href="/">
                <div className="flex space-x-4">
                  <div>
                    <img
                      src={list.image}
                      className="w-[40px] h-[40px] rounded-full object-cover ring-1 ring-offset-2 ring-pink-300"
                    />
                  </div>
                  <div className="text-sm">
                    <p>{list.name}</p>
                    <p className="text-gray-400">
                      {list.lastMessage}
                    </p>
                  </div>
                </div>
              </Link>
              <div>
                <CiCamera className="text-2xl" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MessagePage;
