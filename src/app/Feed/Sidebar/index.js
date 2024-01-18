import React from "react";

const userSuggestions = [
  {
    pic: "/images/users/user-1.jpg",
    name: "Pinku Sharma",
  },
  {
    pic: "/images/users/user-2.jpg",
    name: "Tapu Gada",
  },
  {
    pic: "/images/users/user-3.jpg",
    name: "Sonu Atmaram Bhide",
  },
  {
    pic: "/images/users/user-4.jpg",
    name: "Golu",
  },
  {
    pic: "/images/users/user-5.jpg",
    name: "Gogi Singh",
  },
  {
    pic: "/images/users/user-6.jpg",
    name: "Abdul Miya",
  },
];

const Sidebar = () => {
  return (
    <div className="fixed right-[10%] left-[68%] border border-gray-400 p-4 rounded-md hidden md:block">
      <div>Suggestion for you</div>
      <div className="my-5">
        {userSuggestions.map((sug, index) => {
          return (
            <div className="flex items-center justify-between mt-3" key={index}>
              <div className="flex space-x-2">
                <div
                  className="w-[40px] h-[40px] rounded-full ring-2 ring-offset-2 ring-pink-300 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${sug.pic})` }}
                ></div>
                <div>
                  <p className="font-semibold">{sug.name}</p>
                  <p className="text-sm text-gray-500">Follows You</p>
                </div>
              </div>
              <div>
                <button className=" bg-pink-400 text-white px-2 py-1 rounded-md font-semibold transform transition hover:bg-white hover:text-pink-400 disabled:bg-pink-300 hover:scale-95">
                  Follow
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
