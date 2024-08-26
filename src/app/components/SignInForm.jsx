"use client";

import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const SignInForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/dashboard";
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const formSubmit = async (data) => {
    const { email, password } = data;

    try {
      const response = await axios.post(
        `${apiUrl}/authentication/login`,
        { email, password },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data?.data?.data?.accessToken) {
        if (typeof window !== "undefined") {
          localStorage.setItem("token", response.data.data.data.accessToken);
          localStorage.setItem(
            "UserName",
            response.data.data.data.user.first_name
          );
        }
        toast.success("Login successful!");
        router.push(callbackUrl);
      } else {
        throw new Error("Token not found in response");
      }
    } catch (error) {
      const errorMsg =
        error.response?.data?.errors?.[0]?.code === "invalid_login"
          ? "No active account found for these credentials."
          : error.response?.data?.message || "Error logging in";

      setErrorMessage(errorMsg);
      toast.error(errorMsg);
    }
  };

  return (
    <div className="max-w-sm mx-auto card bg-light-teal bg-opacity-60 m-4 text-white p-10">
      <div className="card-body">
        <h1 className="card-title text-3xl justify-center">SIGN IN</h1>
        {errorMessage && <div className="alert text-error">{errorMessage}</div>}
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="my-2">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Email is invalid",
                },
              })}
              className="input input-bordered w-full max-w-sm text-black rounded-full"
            />
            {errors.email?.message && (
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
              })}
              className="input input-bordered w-full max-w-sm text-black rounded-full"
            />
            {errors.password?.message && (
              <div className="text-error">{errors.password.message}</div>
            )}
          </div>
          <div className="my-4 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-ghost w-32 bg-dark-pink hover:bg-light-pink  text-white rounded-full"
            >
              {isSubmitting && (
                <span className="loading loading-spinner text-white"></span>
              )}
              Sign In
            </button>
          </div>
        </form>
        <div>
          Need an account?{" "}
          <Link className="link" href={`/register?callbackUrl=${callbackUrl}`}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
