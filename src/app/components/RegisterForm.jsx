"use client";

import { useSession } from "../components/Providers";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const RegisterForm = () => {
  const { data: session } = useSession() || {};
  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

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
      toast.error(
        error.response?.data?.context?.message || "Error registering user"
      );
    }
  };

  return (
    <div className="max-w-sm mx-auto card bg-base-300 my-4">
      <div className="card-body">
        <h1 className="card-title">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-2">
            <label className="label" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", { required: "First Name is required" })}
              className="input input-bordered w-full max-w-sm"
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
              className="input input-bordered w-full max-w-sm"
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
              className="input input-bordered w-full max-w-sm"
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
              className="input input-bordered w-full max-w-sm"
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
              className="input input-bordered w-full max-w-sm"
            />
            {errors.repeatPassword && (
              <div className="text-error">{errors.repeatPassword.message}</div>
            )}
          </div>
          <div className="my-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full"
            >
              {isSubmitting && (
                <span className="loading loading-spinner"></span>
              )}
              Register
            </button>
          </div>
        </form>

        <div className="divider"> </div>
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
