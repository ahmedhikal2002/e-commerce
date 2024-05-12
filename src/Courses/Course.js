import React from "react";
import List from "../assets/list.png";
import { NavLink } from "react-router-dom";
function Course({ item }) {
  return (
    <div className="hover:border dark:border hover:border-primary-500 hover:cursor-pointer rounded-md hover:shadow-sm hover:rotate-3  ">
      <NavLink to={`/course-details/${item.id}`}>
        <img
          className="h-[100px] sm:h-[150px] xl:h-[170px] w-full object-cover rounded-t-md "
          src={`${process.env.REACT_APP_BASEURL}${item?.attributes?.image?.data?.attributes?.url}`}
          alt="course banner"
        />
      </NavLink>

      <div className="p-2 flex  items-center bg-white shadow-sm dark:bg-transparent rounded-b-md ">
        <div className="w-[74%] sm:flex-1">
          <strong className="line-clamp-1">{item.attributes.title}</strong>
          <div className="flex items-center gap-1 my-2">
            <img className="w-6 h-6" src={List} alt="category" />
            <p className="font-semibold text-[12px] text-gray-500">
              {item.attributes.category}
            </p>
          </div>
        </div>
        <p className="text-primary-400 ">${item.attributes.price}</p>
      </div>
    </div>
  );
}

export default Course;
