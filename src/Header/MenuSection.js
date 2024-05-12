import React from "react";

export default function MenuSection() {
  return (
    <nav className="font-medium text-gray-800 dark:text-white ">
    
      <ul className="pt-4">
        <li className="py-2 pl-2 border-b  dark:border-gray-500 rounded-md ">
          <a href="/" className="text-white">
            Home
          </a>
         
        </li>
        <li className="py-2 pl-2  border-b  dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-500  ">
          <a href="/">Explore</a>
        </li>
        <li className=" py-2 pl-2  border-b  dark:border-gray-500  hover:bg-gray-100 dark:hover:bg-gray-500 ">
          <a href="/">Products</a>
        </li>
        <li className="py-2 pl-2  border-b  dark:border-gray-500  hover:bg-gray-100 dark:hover:bg-gray-500  ">
          <a href="/">About Us</a>
        </li>
        <li className=" py-2 pl-2  border-b  dark:border-gray-500  hover:bg-gray-100 dark:hover:bg-gray-500  ">
          <a href="##">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}
