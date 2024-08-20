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
        {
          email,
          password,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Login response:", response.data);

      if (
        response.data &&
        response.data.data &&
        response.data.data.data &&
        response.data.data.data.accessToken
      ) {
        localStorage.setItem("token", response.data.data.data.accessToken);
        toast.success("Login successful!");
        router.push("/dashboard");
      } else {
        throw new Error("Token not found in response");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);

      if (error.response?.data?.errors?.[0]?.code === "invalid_login") {
        toast.error("No active account found for these credentials.");
      } else {
        toast.error(error.response?.data?.message || "Error logging in");
      }
    }
  };

  return (
    <div className="max-w-sm mx-auto card bg-base-300 my-4">
      <div className="card-body">
        <h1 className="card-title">Sign in</h1>
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
              className="input input-bordered w-full max-w-sm"
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
              className="input input-bordered w-full max-w-sm"
            />
            {errors.password?.message && (
              <div className="text-error">{errors.password.message}</div>
            )}
          </div>
          <div className="my-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full"
            >
              {isSubmitting && (
                <span className="loading loading-spinner"></span>
              )}
              Sign in
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
