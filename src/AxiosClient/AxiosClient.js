import axios from "axios";

const apiToken = process.env.REACT_APP_API_TOKEN;
const apiUrl = "http://localhost:1337/api/";

const axiosReqById = (id) => {
  return axios.get(`${apiUrl}courses/${id}?populate=*`);
};
const getCourseByCat = (cat) => {
  return axios.get(`${apiUrl}${cat}?populate=*`);
};
const getSimilarCourses = (cat) => {
  return axios.get(`${apiUrl}courses?filters[category][$eq]=${cat}&populate=*`);
};
const axiosClient = axios.create({
  baseURL: apiUrl,
  headers: apiToken,
});
const axiosStripe=axios.create({
  baseURL:'http://127.0.0.1:5001/e-commerce-568a7/us-central1/api',

})
export { axiosClient, axiosReqById, getCourseByCat, getSimilarCourses ,axiosStripe};
