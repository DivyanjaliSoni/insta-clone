"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const userAuthentication = {
  username : "admin",
  password : "admin1234",
  token : "zzxxcvbnm"
}

const schema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required().min(7),
});

const index = () => {
  const router  = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async ({ username, password }) => {
      if( username === userAuthentication.username && password === userAuthentication.password) 
      {
        localStorage.setItem("userToken", userAuthentication.token);
        router.push("/Feed");
      }
      else{
        toast.error("Please enter valid username or password")
      }
      
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <>
      <div className="w-full  h-screen border-4 flex items-center justify-center bg-[url('/images/login-page.jpg')] bg-center bg-contain bg-no-repeat opacity-55 relative"></div>
      <div className=" bg-red-50 opacity-60 w-full h-full absolute top-0"></div>
      <div className="w-1/3 h-1/2 border-gray-500 absolute top-[25%] left-[35%] flex flex-col items-center justify-center shadow-lg ">
        <form onSubmit={handleSubmit} method="POST">
          <label htmlFor="username" className="text-gray-600 font-semibold">
            Username:
          </label>
          <br />
          <input
            name="username"
            id="username"
            type="text"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
            className="p-2 rounded-md outline-none placeholder:text-sm bg-pink-50 focus:bg-white hover:bg-white placeholder:text-gray-600 focus:placeholder:text-transparent hover:placeholder:text-transparent ring-1 ring-offset-2 ring-pink-400 my-2 "
          ></input>
          <br></br>
          {errors.username && touched.username && <span className="text-red-500 text-sm">{errors.username}</span>}
          <br />
          <label htmlFor="password" className="text-gray-600 font-semibold">
            Password:
          </label>
          <br />
          <input
            name="password"
            id="password"
            type="text"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
            className="p-2 rounded-md outline-none placeholder:text-sm bg-pink-50 focus:bg-white hover:bg-white placeholder:text-gray-600 focus:placeholder:text-transparent hover:placeholder:text-transparent ring-1 ring-offset-2 ring-pink-400 mt-2 "
          ></input>
          <br></br>
          {errors.password && touched.password && <span className="text-red-500 text-sm">{errors.password}</span>}
          <br />
          <div className="mt-5">
            <button
            type="submit"
              className="block text-center bg-pink-400 text-white w-[235px] py-2 rounded-md font-semibold transform transition hover:bg-white hover:text-pink-400 disabled:bg-pink-300 hover:scale-95"
            >
              Log In
            </button>
          </div>
        </form>
        <div className="mt-2">
          <Link href="/" className="text-pink-400 font-semibold">
            Forget password?
          </Link>
        </div>
        <div className="mt-2  flex space-x-2">
          <span className="font-semibold text-gray-600">
            Already have an account ?
          </span>
          <Link href="/" className="text-pink-400 font-semibold">
            Sign Up
          </Link>
        </div>
      </div>
      <ToastContainer
      position="top-center"/>
    </>
  );
};

export default index;
