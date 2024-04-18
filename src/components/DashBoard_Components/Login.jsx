"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { adminLoginSchema } from "@/utils/Client_validations/validations";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Login = () => {
  const router = useRouter();
  const [disableBtn, setDisableBtn] = useState(false);
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(adminLoginSchema),
  });

  const onSubmit = async (value) => {
    console.log(value);
    setDisableBtn(true);
    await axios
      .post("/api/admin", {
        email: value.email,
        password: value.password,
      })
      .then((res) => {
        router.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="h-screen w-screen bg-transparent flex justify-center items-center">
      <main className="space-y-10 py-10 px-16 rounded-lg bg-white text-black">
        <form className="space-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-normal text-sm">
              Email:
            </label>
            <input
              type="text"
              className="py-2 px-4 rounded-md border bg-white text-base w-[300px] md:w-[500px] placeholder:text-sm placeholder:capitalize outline-none "
              placeholder="Enter your Email"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-xs capitalize text-red-600 w-[300px] md:w-[500px] ">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-normal text-sm">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="py-2 px-4 rounded-md border bg-white text-base w-[300px] md:w-[500px] placeholder:text-sm placeholder:capitalize outline-none "
              placeholder="Enter your Password"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-xs capitalize text-red-600 w-[300px] md:w-[500px]">
                {errors.password.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="text-white font-medium bg-[#011F26] py-2 px-6 rounded-md disabled:bg-[#011f2619]"
            onClick={handleSubmit(onSubmit)}
            disabled={disableBtn}
          >
            Log In
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
