"use client";

import { useSession } from "../components/Providers";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { data: session } = useSession() || {}; //the current user's session data
  const router = useRouter();
  const params = useSearchParams(); //access the query parameters in the URL (parameters after the ?)
  const callbackUrl = params.get("callbackUrl") || "/";

  //initializes the form and provides fx to register and submit, and objects for erros and isSubmitting
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  //This effect checks if the user is already logged in (i.e., a session exists). If they are, it redirects them to the callbackUrl or home page.
  useEffect(() => {
    if (session && session.user) {
      router.push(callbackUrl);
    }
  }, [callbackUrl, router, session]);

  const onSubmit = async (data) => {
    const { firstName, lastName, email, password, repeatPassword } = data;

    if (password !== repeatPassword) {
      toast.error("Passwords do not match");
      return;
    }

    //here I modify the names of the variables from the back to fit the client
    try {
      const payload = {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        repeat_password: repeatPassword,
      };

      const response = await axios.post(
        `${apiUrl}/authentication/register`,
        payload,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Registration response:", response);

      toast.success("User registered successfully!");
      router.push("/signin");
    } catch (error) {
      console.error(
        "Registration error:",
        error.response?.data || error.message
      );

      //optional chaining operator --> It’s a feature in JavaScript
      //that allows you to safely access deeply nested properties of an object
      // without having to check each level for null or undefined
      //Without optional chaining, accessing data on an undefined error.response would result in a runtime error.

      //this allows for simpler and straightforward code, otherwise it would be:
      // let errorData;
      // if (error.response) {
      //   errorData = error.response.data;
      // }

      // let errorCode;
      // if (errorData && errorData.errors && errorData.errors.length > 0) {
      //   errorCode = errorData.errors[0].code;
      // }

      const errorData = error.response?.data;
      const errorCode = errorData?.errors?.[0]?.code;
      const errorMessage =
        errorData?.context?.message || "Error registering user";

      if (errorCode === "user_exists") {
        setErrorMessage("A user with this email already exists.");
        toast.error("A user with this email already exists.");
      } else {
        setErrorMessage(errorMessage);
        toast.error(errorMessage);
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto card bg-light-teal bg-opacity-60 m-4 text-white p-10">
      <div className="card-body ">
        <h1 className="card-title text-3xl justify-center">REGISTER</h1>
        {errorMessage && (
          <div className="alert alert-error mb-4">{errorMessage}</div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-2">
            {/* htmlFor used to access the id */}
            <label className="label" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", { required: "First Name is required" })}
              className="input input-bordered w-full max-w-sm text-black rounded-full"
            />
            {errors.firstName && (
              <div className="text-error">{errors.firstName.message}</div>
            )}
          </div>
          <div className="my-2">
            <label className="label" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              {...register("lastName", { required: "Last Name is required" })}
              className="input input-bordered w-full max-w-sm text-black rounded-full"
            />
            {errors.lastName && (
              <div className="text-error">{errors.lastName.message}</div>
            )}
          </div>
          <div className="my-2">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email is invalid",
                },
              })}
              className="input input-bordered w-full max-w-sm text-black rounded-full"
            />
            {errors.email && (
              <div className="text-error">{errors.email.message}</div>
            )}
          </div>
          <div className="my-2">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              className="input input-bordered w-full max-w-sm text-black rounded-full"
            />
            {errors.password && (
              <div className="text-error">{errors.password.message}</div>
            )}
          </div>
          <div className="my-2">
            <label className="label" htmlFor="repeatPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="repeatPassword"
              {...register("repeatPassword", {
                required: "Confirm Password is required",
              })}
              className="input input-bordered w-full max-w-sm text-black rounded-full"
            />
            {errors.repeatPassword && (
              <div className="text-error">{errors.repeatPassword.message}</div>
            )}
          </div>
          <div className="my-4 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className=" btn btn-ghost w-32 bg-dark-pink hover:bg-light-pink  text-white rounded-full"
            >
              {isSubmitting && (
                <span className="loading loading-spinner"></span>
              )}
              Register
            </button>
          </div>
        </form>
        <div>
          Already have an account?{" "}
          <Link className="link" href={`/signin?callbackUrl=${callbackUrl}`}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
