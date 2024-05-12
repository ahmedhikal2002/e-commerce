import React, { Fragment, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { axiosReqById } from "../AxiosClient/AxiosClient";
import SimilarCourses from "./SimilarCourses";
import ShoppingCart from "../assets/shopping-cart.png";
import Budget from "../assets/budget.png";
import BudgetWarning from "../assets/budget-warning.png";
import Breadcrumb from "../Components/Breadcrumb";
import { useAppContext } from "../Context/AppContext";
function CourseDetails() {
  const { user, dispatch,products } = useAppContext();
  const [course, setCourse] = useState([]);
  const params = useParams();
  const addCoures = () => {
    const data = {
      id: course.id,
      title: course?.attributes?.title,
      category: course?.attributes?.category,
      desc: course?.attributes?.desc[0]?.children[0]?.text,
      instantDelivery: course?.attributes?.instantDelivery,
      price: course?.attributes?.price,
      img: course?.attributes?.image?.data?.attributes?.url,
    };
    dispatch({ type: "ADD_TO_CART", payload: data });
  };
 console.log(products)
  useEffect(() => {
    axiosReqById(params.id)
      .then((res) => setCourse(res.data.data))
      .catch((err) => console.log(err));
  }, [params.id]);
  return (
    <section>
      <div className="container">
        <Breadcrumb />
        <div className="flex flex-col lg:flex-row gap-10 my-9   p-3 md:p-0">
          <div className="w-[500px] max-w-full group">
            <img
              className="w-full rounded-lg group-hover:scale-105 transition-transform duration-200 ease-linear"
              src={`${process.env.REACT_APP_BASEURL}${course?.attributes?.image?.data?.attributes?.url}`}
              alt="course banner"
            />
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <strong>{course?.attributes?.title}</strong>
            <h6 className="text-gray-600 font-bold text-sm ">
              {course?.attributes?.category}
            </h6>
            <div>
              <p>{course?.attributes?.desc[0]?.children[0]?.text}</p>
              <div className="flex items-center gap-1 text-sm pt-1 pl-2">
                {course?.attributes?.instantDelivery ? (
                  <>
                    <img className="w-5 h-5" src={Budget} alt="Budget banner" />
                    <p className="text-green-500">
                      Eligible For Instant Delivery
                    </p>
                  </>
                ) : (
                  <>
                    <img
                      className="w-5 h-5"
                      src={BudgetWarning}
                      alt="budget banner"
                    />
                    <p className="text-yellow-500">
                      Not Eligible For Instant Delivery
                    </p>
                  </>
                )}
              </div>
            </div>
            <span className="text-primary-500 font-bold">
              ${course?.attributes?.price}
            </span>
            <button
              className="btn bg-primary-400 hover:bg-primary-300 w-fit text-white active:scale-90"
              onClick={addCoures}
            >
              <NavLink
                to={!user && "/login"}
                className="  flex items-center gap-1"
              >
                <img src={ShoppingCart} alt="Shopping_cart_image" />
                <p>Add To Cart </p>
              </NavLink>
            </button>
          </div>
        </div>
      </div>
      <Fragment>
        <SimilarCourses cat={course?.attributes?.category} />
      </Fragment>
    </section>
  );
}

export default CourseDetails;
