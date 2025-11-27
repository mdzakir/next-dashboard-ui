import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Search bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="search" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
          // className="ml-2 p-1 border border-gray-300 rounded-md"
        />
      </div>

      {/* Icons and user */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="flex items-center gap-4 bg-white p-2 rounded-full shadow-md">
          <Image src="/message.png" alt="messages" width={20} height={20} />
        </div>
        <div className="flex items-center gap-4 bg-white p-2 rounded-full shadow-md relative">
          <Image
            src="/announcement.png"
            alt="messages"
            width={20}
            height={20}
          />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full">
            2
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-xs leading-3 text-gray-500">Admin</span>
        </div>
        <Image
          className="rounded-full"
          src="/avatar.png"
          alt="profile"
          width={36}
          height={36}
        />
      </div>
    </div>
  );
};

export default Navbar;
