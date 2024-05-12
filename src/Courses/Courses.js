import React, { useEffect, useState } from "react";
import { axiosClient } from "../AxiosClient/AxiosClient";
import Course from "./Course";
import Arrow from "../assets/arrow.png";
function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axiosClient
      .get("/courses?populate=*")
      .then((res) => {
        setCourses(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="pb-16 bg-stone-50 dark:bg-transparent">
      <div className="container">
        <div className="flex items-center justify-between py-5 px-3 sm:px-0">
          <h3 className="font-bold text-2xl">Brand New</h3>
          <div className="text-primary-400 flex gap-1 items-center">
            <a href="##">View All Collection</a>
            <img className="w-4 h-4" src={Arrow} alt="arrow_image" />
          </div>
        </div>

        <div className="p-3 sm:p-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {courses.map((course) => (
            <Course key={course.id} item={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
