import React, { useEffect, useState } from "react";
import Course from "../Courses/Course";
import { getSimilarCourses } from "../AxiosClient/AxiosClient";

function SimilarCourses({ cat }) {
  const [similarCourse, setSimlarCourse] = useState([]);
  useEffect(() => {
    getSimilarCourses(cat)
      .then((res) => setSimlarCourse(res.data.data))
      .catch((err) => console.log(err));
  }, [cat]);

  return (
    <section className="bg-gray-50 dark:bg-transparent">
      <div className="container">
        <div className="text-primary-400 font-semibold py-4 pl-3 sm:pl-0">
          Similar Courses
        </div>
        <div className="p-3 sm:p-0 sm:pb-[50px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
          {similarCourse.map((course) => (
            <Course key={course.id} item={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SimilarCourses;
